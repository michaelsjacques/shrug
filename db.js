// SHRUG — DB operations (all Supabase interactions go here)
// Requires: supabase.js loaded first

// ── Quiz results ──────────────────────────────────────────────────────────────

async function saveQuizResults(userId, answers, ranked) {
  if (!supabaseClient || !userId) return null;
  return supabaseClient.from('quiz_results')
    .upsert({ user_id: userId, answers: answers, ranked: ranked });
}

// ── Phase / chapter progress ──────────────────────────────────────────────────

// phaseIdx: 0 = Phase 1 (Week 1), 1 = Phase 2 (Weeks 2-3), 2 = Phase 3 (Month 1+)
async function completePhase(userId, hobbyKey, phaseIdx) {
  // Always save to localStorage as fallback
  localStorage.setItem('shrug_phase_' + hobbyKey + '_' + phaseIdx, '1');

  if (!supabaseClient || !userId) return null;
  return supabaseClient.from('chapter_progress')
    .upsert({ user_id: userId, hobby_key: hobbyKey, chapter_idx: phaseIdx });
}

// Returns array of completed phase indices [0, 1, 2]
async function getCompletedPhases(userId, hobbyKey) {
  // Local fallback always available
  var local = [];
  for (var i = 0; i < 3; i++) {
    if (localStorage.getItem('shrug_phase_' + hobbyKey + '_' + i)) local.push(i);
  }

  if (!supabaseClient || !userId) return local;

  var result = await supabaseClient.from('chapter_progress')
    .select('chapter_idx')
    .eq('user_id', userId)
    .eq('hobby_key', hobbyKey);

  if (result.data) {
    var remote = result.data.map(function(r) { return r.chapter_idx; });
    // Merge local + remote (remote is authoritative but local may have unsynced)
    remote.forEach(function(idx) { if (local.indexOf(idx) === -1) local.push(idx); });
    return local;
  }
  return local;
}

// ── Memoir / journal entries ──────────────────────────────────────────────────

// Save a submission (reflection text + optional photo) for a phase
async function saveMemoirEntry(userId, hobbyKey, phaseIdx, text, imageFile) {
  var entry = {
    hobby_key: hobbyKey,
    phase_idx: phaseIdx,
    text: text,
    submitted_at: new Date().toISOString(),
    ai_feedback: null,
    image_url: null,
  };

  // Always save to localStorage first
  var localKey = 'shrug_journal_' + (userId || 'anon');
  var existing = [];
  try { existing = JSON.parse(localStorage.getItem(localKey)) || []; } catch(e) {}
  existing.unshift(entry);
  if (existing.length > 100) existing = existing.slice(0, 100);
  localStorage.setItem(localKey, JSON.stringify(existing));

  if (!supabaseClient || !userId) return { entry: entry, local: true };

  // Upload image if provided
  var imagePath = null;
  if (imageFile) {
    var path = userId + '/' + hobbyKey + '/phase' + phaseIdx + '-' + Date.now();
    var uploadResult = await supabaseClient.storage
      .from('memoir-images')
      .upload(path, imageFile, { upsert: false });
    if (!uploadResult.error) imagePath = path;
  }

  // Save to DB
  var dbResult = await supabaseClient.from('memoir_entries').insert({
    user_id: userId,
    hobby_key: hobbyKey,
    chapter_idx: phaseIdx,
    reflection: text,
    image_path: imagePath,
    liked: true,
  });

  if (imagePath) entry.image_path = imagePath;
  return { entry: entry, dbResult: dbResult, imagePath: imagePath };
}

// Get AI feedback for a submitted photo via edge function
async function getAIFeedback(hobbyKey, imagePath) {
  if (!supabaseClient || !imagePath) return null;
  try {
    var result = await supabaseClient.functions.invoke('analyze-artifact', {
      body: { hobby_key: hobbyKey, media_path: imagePath, media_type: 'photo' }
    });
    return result.data ? result.data.feedback : null;
  } catch(e) {
    return null;
  }
}

// Load journal entries for current user
async function loadJournalEntries(userId, hobbyKey) {
  // Local fallback
  var localKey = 'shrug_journal_' + (userId || 'anon');
  var local = [];
  try { local = JSON.parse(localStorage.getItem(localKey)) || []; } catch(e) {}
  if (hobbyKey) local = local.filter(function(e) { return e.hobby_key === hobbyKey; });

  if (!supabaseClient || !userId) return local;

  var query = supabaseClient.from('memoir_entries')
    .select('*')
    .eq('user_id', userId)
    .order('completed_at', { ascending: false });
  if (hobbyKey) query = query.eq('hobby_key', hobbyKey);

  var result = await query;
  return result.data || local;
}

// ── Creative trait map ────────────────────────────────────────────────────────

// Derive trait scores from completed hobby phases using HOBBY_TRAITS
// Returns: { creative: 0-100, analytical: 0-100, physical: 0-100, expressive: 0-100, social: 0-100 }
async function getTraitProfile(userId) {
  if (typeof HOBBY_TRAITS === 'undefined') return null;

  // Get all completed phases across hobbies
  var completedHobbies = [];

  // From localStorage
  Object.keys(localStorage).forEach(function(k) {
    var m = k.match(/^shrug_phase_(.+)_\d$/);
    if (m && completedHobbies.indexOf(m[1]) === -1) completedHobbies.push(m[1]);
  });

  if (supabaseClient && userId) {
    var result = await supabaseClient.from('chapter_progress')
      .select('hobby_key').eq('user_id', userId);
    if (result.data) {
      result.data.forEach(function(r) {
        if (completedHobbies.indexOf(r.hobby_key) === -1) completedHobbies.push(r.hobby_key);
      });
    }
  }

  if (completedHobbies.length === 0) return null; // no data yet

  // Sum up traits from completed hobbies
  var sums = { creative: 0, analytical: 0, physical: 0, expressive: 0, social: 0 };
  var dims = Object.keys(sums);
  var count = 0;

  completedHobbies.forEach(function(key) {
    var t = HOBBY_TRAITS[key];
    if (!t) return;
    dims.forEach(function(d) { sums[d] += (t[d] || 0); });
    count++;
  });

  if (count === 0) return null;

  // Normalize to 0-100 (HOBBY_TRAITS values are 1-10, max per hobby = 10)
  var profile = {};
  dims.forEach(function(d) { profile[d] = Math.round((sums[d] / count) * 10); });
  return profile;
}

// ── Community / weekly submissions ───────────────────────────────────────────

// Get current ISO week number
function getISOWeek() {
  var now = new Date();
  var jan4 = new Date(now.getFullYear(), 0, 4);
  var dayOfYear = Math.floor((now - jan4) / 86400000) + 1;
  return Math.ceil((dayOfYear + jan4.getDay()) / 7);
}

async function saveWeeklySubmission(userId, hobbyKey, text, imageFile) {
  var weekNum = getISOWeek();
  var year = new Date().getFullYear();

  // Local save
  var localKey = 'shrug_weekly_' + (userId || 'anon');
  var existing = [];
  try { existing = JSON.parse(localStorage.getItem(localKey)) || []; } catch(e) {}
  var localEntry = { hobby_key: hobbyKey, week_num: weekNum, year: year, text: text };
  existing.unshift(localEntry);
  localStorage.setItem(localKey, JSON.stringify(existing));

  if (!supabaseClient || !userId) return { local: true };

  var imagePath = null;
  if (imageFile) {
    var path = userId + '/weekly/' + hobbyKey + '-w' + weekNum + '-' + year;
    var uploadResult = await supabaseClient.storage
      .from('memoir-images').upload(path, imageFile, { upsert: true });
    if (!uploadResult.error) imagePath = path;
  }

  return supabaseClient.from('weekly_submissions').upsert({
    user_id: userId,
    hobby_key: hobbyKey,
    week_num: weekNum,
    year: year,
    text: text,
    image_path: imagePath,
  });
}

async function loadWeeklySubmissions(hobbyKey) {
  if (!supabaseClient) return [];
  var weekNum = getISOWeek();
  var year = new Date().getFullYear();

  var result = await supabaseClient.from('weekly_submissions')
    .select('*')
    .eq('hobby_key', hobbyKey)
    .eq('week_num', weekNum)
    .eq('year', year)
    .order('submitted_at', { ascending: false })
    .limit(20);
  return result.data || [];
}

async function getUserWeeklySubmission(userId, hobbyKey) {
  if (!supabaseClient || !userId) return null;
  var weekNum = getISOWeek();
  var year = new Date().getFullYear();

  var result = await supabaseClient.from('weekly_submissions')
    .select('*')
    .eq('user_id', userId)
    .eq('hobby_key', hobbyKey)
    .eq('week_num', weekNum)
    .eq('year', year)
    .maybeSingle();
  return result.data || null;
}
