// Service Worker script to cache assets for offline use
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("my-cache").then((cache) => {
            return cache.addAll([
                "./index.html",
                "./styles.css",
                "./assets/one.jpg",
                "./assets/two.jpg",
                "./assets/three.jpg",
                "./assets/four.jpg",
                "./assets/five.jpg",
                "./assets/six.jpg",
                "./assets/seven.jpg",
                "./assets/eight.jpg",
                "./assets/nine.jpg",
                "./assets/ten.jpg"
            ]);
        })
    );
});

// Fetch event to serve cached assets when offline
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});