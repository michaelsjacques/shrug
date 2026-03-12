// SHRUG — Supabase client + auth helpers
// Replace these two values with your Supabase project URL and anon key
// Find them at: https://app.supabase.com/project/[your-project]/settings/api
const SUPABASE_URL = 'https://cvyxgcwccvvsndannesk.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2eXhnY3djY3Z2c25kYW5uZXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyODMwMjIsImV4cCI6MjA4ODg1OTAyMn0.VrOZE7bsGG0wRYRtDTrKOB0K7NN-BzTdvcSPQxRCIX0';

var supabaseClient;
if (typeof supabase !== 'undefined') {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

  // Broadcast auth state changes as a DOM event so any page can react
  supabaseClient.auth.onAuthStateChange(function(event, session) {
    window.dispatchEvent(new CustomEvent('shrug:auth', {
      detail: { event: event, session: session }
    }));
  });
} else {
  // Graceful no-op when Supabase SDK not loaded (offline / before credentials set)
  supabaseClient = null;
}

var _shrugIsConfigured = (SUPABASE_URL !== 'https://YOUR_PROJECT.supabase.co');

// ── Auth helpers ──────────────────────────────────────────────────────────────

async function getCurrentUser() {
  if (!supabaseClient || !_shrugIsConfigured) return null;
  var result = await supabaseClient.auth.getSession();
  return result.data.session ? result.data.session.user : null;
}

async function sendMagicLink(email) {
  if (!supabaseClient || !_shrugIsConfigured) {
    return { error: { message: 'Supabase not configured — add your project URL and anon key to supabase.js' } };
  }
  return supabaseClient.auth.signInWithOtp({
    email: email,
    options: { emailRedirectTo: window.location.origin + '/dashboard.html' }
  });
}

async function signOut() {
  if (supabaseClient && _shrugIsConfigured) {
    await supabaseClient.auth.signOut();
  }
  sessionStorage.removeItem('shrugResults');
  sessionStorage.removeItem('shrugRejected');
  window.location.href = '/index.html';
}

// ── Nav helpers ───────────────────────────────────────────────────────────────

// Call on every page to update bottom nav state based on auth + sessionStorage
async function initNav(activePage) {
  // Mark active tab
  var items = document.querySelectorAll('.bnav-item');
  items.forEach(function(el) {
    if (el.getAttribute('data-page') === activePage) el.classList.add('active');
  });

  // "My Arc" href: top ranked hobby if session exists, else results.html
  var arcEl = document.getElementById('bnav-arc');
  if (arcEl) {
    var results = null;
    try { results = JSON.parse(sessionStorage.getItem('shrugResults')); } catch(e) {}
    if (results && results.ranked && results.ranked.length) {
      arcEl.href = 'hobby.html?key=' + results.ranked[0].key;
    } else {
      arcEl.href = 'results.html';
    }
  }

  // Logged-in state: show user indicator in top nav if present
  var user = await getCurrentUser();
  var userIndicator = document.getElementById('nav-user');
  if (userIndicator) {
    if (user) {
      userIndicator.innerHTML = '<button onclick="signOut()" class="nav-signout">Sign out</button>';
    } else {
      userIndicator.innerHTML = '';
    }
  }

  return user;
}

// Redirect to save prompt if auth-gated page accessed without account
function requireAuth(redirectBack) {
  getCurrentUser().then(function(user) {
    if (!user) {
      var url = 'results.html?prompt=save';
      if (redirectBack) url += '&next=' + encodeURIComponent(redirectBack);
      window.location.href = url;
    }
  });
}

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').catch(function() {});
  });
}
