// A pass-through service worker: it only makes the app installable on the phone.
// It caches nothing and answers no request itself, so the app always loads fresh.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
