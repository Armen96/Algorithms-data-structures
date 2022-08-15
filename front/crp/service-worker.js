/*Install gets executed when the user launches the single page application for *the first time
*/

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(
                [
                    'styles.css',
                    'script.js'
                ]
            );
        })
    );
});

//When a user performs an operation
document.querySelector('.lazy').addEventListener('click', function (event) {
    event.preventDefault();
    caches.open('lazy_posts').then(function (cache) {
        fetch('/get-article').then(function (response) {
            return response;
        }).then(function (urls) {
            cache.addAll(urls);
        });
    });
});

//When there is a network response
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open('lazy_posts').then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return response
            });
        })
    );
});
