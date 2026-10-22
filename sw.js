/* Retires the old Mockup web app. No offline generator or fetch interception. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async () => {
  const scope = self.registration.scope;
  for (const name of await caches.keys()) {
    if (name.startsWith('phone-mockup-generator-')) await caches.delete(name);
  }
  await self.clients.claim();
  await self.registration.unregister();
  for (const client of await self.clients.matchAll({ type: 'window' })) {
    if (client.url.startsWith(scope)) await client.navigate(client.url);
  }
})()));
