// SHRUG v2 — Quiz Scoring Engine
// Shared by quiz.html and results.html

const QUIZ_QUESTIONS = [
  {
    id: 'time',
    q: 'How much time do you actually have per week?',
    sub: 'Be honest. Not what you wish — what you actually carve out.',
    opts: [
      { label: 'An hour or two, scattered',       value: 'low',    emoji: '⚡' },
      { label: '3–5 hours, mostly on weekends',   value: 'medium', emoji: '🕑' },
      { label: '6+ hours — I go deep on things',  value: 'high',   emoji: '🕗' }
    ]
  },
  {
    id: 'patience',
    q: 'Do you need to see results fast, or are you patient with slow progress?',
    sub: 'Some hobbies show results in an hour. Others take months.',
    opts: [
      { label: 'I need wins in the first week',                    value: 'fast',   emoji: '🏎️' },
      { label: 'A few weeks before it clicks is fine',             value: 'medium', emoji: '🚶' },
      { label: 'I can commit to months before it pays off',        value: 'slow',   emoji: '🌱' }
    ]
  },
  {
    id: 'social',
    q: 'Do you want to do this alone or with other people?',
    sub: null,
    opts: [
      { label: 'Solo — just me and the craft',  value: 'solo',  emoji: '🙋' },
      { label: 'Either — depends on my mood',   value: 'mixed', emoji: '🔄' },
      { label: 'I need the group energy',        value: 'group', emoji: '👥' }
    ]
  },
  {
    id: 'motivation',
    q: 'What actually drives you?',
    sub: 'The honest answer, not the impressive one.',
    opts: [
      { label: 'Creating — I want to make things',           value: 'creating',   emoji: '✂️' },
      { label: 'Learning — I want to understand things',     value: 'learning',   emoji: '🧠' },
      { label: 'Competing — I want to be good at something', value: 'competing',  emoji: '🏆' },
      { label: 'Collecting — I want to curate and own',      value: 'collecting', emoji: '🃏' }
    ]
  },
  {
    id: 'budget',
    q: "What's your budget ceiling for the first 3 months?",
    sub: 'After this point you\'ll know if you\'re serious.',
    opts: [
      { label: '$0 — free only',        value: 0,   emoji: '🆓' },
      { label: 'Up to $30',             value: 30,  emoji: '☕' },
      { label: 'Up to $100',            value: 100, emoji: '💳' },
      { label: '$100+ if I\'m into it', value: 500, emoji: '💰' }
    ]
  }
];

// ── SCORING ───────────────────────────────────────────────────

function scoreHobby(key, answers) {
  const c = HOBBY_CONSTRAINTS[key];
  if (!c) return 0;
  let score = 0;

  // Time — weight 30 (hardest constraint)
  const timeOrder = ['low', 'medium', 'high'];
  const timeDiff = Math.abs(timeOrder.indexOf(c.timeRequirement) - timeOrder.indexOf(answers.time));
  score += timeDiff === 0 ? 30 : timeDiff === 1 ? 15 : 0;

  // Patience / results speed — weight 20
  const speedOrder = ['fast', 'medium', 'slow'];
  const speedDiff = Math.abs(speedOrder.indexOf(c.resultsSpeed) - speedOrder.indexOf(answers.patience));
  score += speedDiff === 0 ? 20 : speedDiff === 1 ? 10 : 0;

  // Social — weight 20 ('mixed' is adjacent to both)
  if (c.social === answers.social) {
    score += 20;
  } else if (c.social === 'mixed' || answers.social === 'mixed') {
    score += 10;
  }

  // Motivation — weight 20
  score += c.motivations.includes(answers.motivation) ? 20 : 0;

  // Budget — weight 10
  score += c.budgetMin <= answers.budget ? 10 : 0;

  return score; // max 100
}

function rankHobbies(answers, rejectedKeys) {
  var rejected = rejectedKeys || [];
  return Object.keys(HOBBY_CONSTRAINTS)
    .filter(function(k) { return !rejected.includes(k); })
    .map(function(k) { return { key: k, score: scoreHobby(k, answers) }; })
    .sort(function(a, b) { return b.score - a.score; });
}

// ── MATCH TAG HELPERS ────────────────────────────────────────

function getMatchTags(key, answers) {
  var c = HOBBY_CONSTRAINTS[key];
  if (!c) return [];
  var tags = [];

  var timeOrder  = ['low','medium','high'];
  var speedOrder = ['fast','medium','slow'];
  var timeMatch  = Math.abs(timeOrder.indexOf(c.timeRequirement)  - timeOrder.indexOf(answers.time))    <= 1;
  var speedMatch = Math.abs(speedOrder.indexOf(c.resultsSpeed)    - speedOrder.indexOf(answers.patience)) <= 1;
  var socialMatch = c.social === answers.social || c.social === 'mixed' || answers.social === 'mixed';
  var motivMatch  = c.motivations.includes(answers.motivation);
  var budgetMatch = c.budgetMin <= answers.budget;

  var timeLabels  = { low:'Low time', medium:'Medium time', high:'High time' };
  var speedLabels = { fast:'Quick results', medium:'Weeks to click', slow:'Months to bloom' };

  tags.push({ label: timeLabels[c.timeRequirement],  hit: timeMatch });
  tags.push({ label: speedLabels[c.resultsSpeed],    hit: speedMatch });
  tags.push({ label: c.social === 'solo' ? 'Solo' : c.social === 'group' ? 'Group' : 'Solo or group', hit: socialMatch });
  tags.push({ label: c.motivations[0].charAt(0).toUpperCase() + c.motivations[0].slice(1), hit: motivMatch });
  tags.push({ label: c.budgetMin === 0 ? 'Free to start' : '$' + c.budgetMin + '+ to start', hit: budgetMatch });

  return tags;
}

// ── SESSION STORAGE HELPERS ───────────────────────────────────

var STORAGE_RESULTS  = 'shrugResults';
var STORAGE_REJECTED = 'shrugRejected';

function saveResults(answers, ranked) {
  try {
    sessionStorage.setItem(STORAGE_RESULTS, JSON.stringify({ answers: answers, ranked: ranked }));
  } catch(e) {}
}

function loadResults() {
  try {
    var raw = sessionStorage.getItem(STORAGE_RESULTS);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
}

function loadRejected() {
  try {
    var raw = sessionStorage.getItem(STORAGE_REJECTED);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function saveRejected(list) {
  try {
    sessionStorage.setItem(STORAGE_REJECTED, JSON.stringify(list));
  } catch(e) {}
}

function rejectHobby(key) {
  var rejected = loadRejected();
  if (!rejected.includes(key)) rejected.push(key);
  saveRejected(rejected);
  // Re-score and re-save
  var results = loadResults();
  if (results) {
    var newRanked = rankHobbies(results.answers, rejected);
    saveResults(results.answers, newRanked);
  }
  return rejected;
}
