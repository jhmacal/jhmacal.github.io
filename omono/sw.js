/* Retire the former browser-only app at this address. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", event => {
  event.waitUntil(caches.delete("omono-v6").then(() => self.registration.unregister()));
});
