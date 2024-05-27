var cacheName = 'mine-pwa';
var filesToCache = [
  'index.html',
  'css/style.css',
  'js/main.js',
  'assets/css/stylesheet.css',
  'assets/img/1x1px.png',
  'assets/img/minesweeper_graphs.png',
  'assets/img/minesweeper_icon.png',
  'assets/img/resetIcon.png',
  'assets/img/sprite.png',
  'assets/js/Celula.js',
  'assets/js/routines.js',
  'assets/js/Sprite.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  console.log('install:', e);
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  console.log('fetch:', e);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
