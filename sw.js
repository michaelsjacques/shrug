// SHRUG — Service Worker
// Cache-first for static assets, network-first for Supabase API calls

var CACHE_NAME = 'shrug-v2';
var STATIC_ASSETS = [
  '/index.html',
  '/quiz.html',
  '/results.html',
  '/hobby.html',
  '/dashboard.html',
  '/journal.html',
  '/map.html',
  '/explore.html',
  '/community.html',
  '/data.js',
  '/quiz.js',
  '/style.css',
  '/supabase.js',
  '/db.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
];

// Install: cache all static assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      // addAll fails if any resource 404s — use individual adds so missing icons don't break install
      return Promise.allSettled(
        STATIC_ASSETS.map(function(url) {
          return cache.add(url).catch(function() { /* ignore missing */ });
        })
      );
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// Activate: delete old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch: cache-first for static, network-first for Supabase/CDN
self.addEventListener('fetch', function(event) {
  var url = event.request.url;

  // Always network-first for Supabase API calls
  if (url.includes('supabase.co') || url.includes('cdn.jsdelivr')) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
    return;
  }

  // Cache-first for everything else (HTML, CSS, JS, images)
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request).then(function(response) {
        // Cache successful GET responses
        if (event.request.method === 'GET' && response.status === 200) {
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, copy); });
        }
        return response;
      });
    })
  );
});
