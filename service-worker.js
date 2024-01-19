const cacheName = 'OND-cache-v2';

self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        '/',
        '/ond/manifest.json',
        '/ond/style.css',
        '/ond/script.js',
        '/ond/favicon.png',
        '/ond/font/font1.woff2',
        '/ond/font/font2.woff2',
        '/ond/sw.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch((error) => {
      console.error('Error fetching:', error);
    })
  );
});

self.addEventListener('error', (error) => {
  console.error('Service Worker Error:', error);
});
