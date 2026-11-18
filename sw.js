/* 前の型（2026-11-18 まで。shell）が端末に保存した物を消す。ページ型のサイトは何も保存しない（直した中身がすぐ届く） */
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.map(k => caches.delete(k)))).then(() => self.clients.claim())); });
