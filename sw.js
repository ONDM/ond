const CACHE_NAME = 'prazdniny-v2';

const ASSETS = [
  '/ond/',
  '/ond/index.html',
  '/ond/style.css',
  '/ond/script.js',
    '/ond/manifest.json',
  '/ond/ondlogo.png',
  '/prazdniny/font/font1.woff2',
  '/prazdniny/font/font2.woff2',
];

self.addEventListener('install', event =>
{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      {
      console.log('SW: Ukládám soubory do mezipaměti');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event =>
  {
  event.waitUntil(
    caches.keys().then(keys =>
      {
      return Promise.all(
        keys.map(key =>
          {
          if (key !== CACHE_NAME)
          {
            console.log('SW: Mažu starou cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event =>
  {
  event.respondWith(
    caches.match(event.request).then(cachedResponse =>
      {
      const fetchPromise = fetch(event.request).then(networkResponse =>
        {
        if (networkResponse.status === 200)
        {
          caches.open(CACHE_NAME).then(cache =>
            {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      }).catch(() =>
        {
      });

      return cachedResponse || fetchPromise;
    })
  );
});
