const CACHE_NAME = "travila-v1";
const ASSETS = [
  "/",
  "./src/index.html",
  "./src/index.js",
  "./resources/logo.png",
  "./resources/ss.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        cache.addAll(ASSETS).then().catch();
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
  );
});