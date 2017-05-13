var CACHE_NAME = 'packtris-v1';
var urlsToCache = [
  '/',
  '/assets/styles.css',
  '/assets/bundle.js',
  '/assets/images/logo.png',
  '/assets/manifest.json'
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Open a cache and cache our files
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
