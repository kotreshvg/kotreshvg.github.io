const CACHE_NAME = 'penguinfecache';
const EXCLUDED_DOMAINS = ['backend.penguinduo.com'];

const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js',
  '/static/js/vendors~main.chunk.js',
  '/static/js/main.chunk.js',
  '/static/css/main.chunk.css',
  '/favicon.ico',
];

// Install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener('fetch', (event) => {
    // Check if the request URL is from the excluded subdomain
  if (requestUrl.hostname === EXCLUDED_DOMAINS) {
    // If it's the excluded subdomain, bypass the cache and fetch from the network
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }

      return fetch(event.request).catch(() => {
        // If request fails, return cached response if available
        return caches.match('/index.html');
      });
    })
  );
});

// Update a service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});