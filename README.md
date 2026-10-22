# Mockup

Mockup is now a native Android app. This repository hosts its Google Play landing page at https://ventsharm.github.io/Feature/.

**Download or update:** https://play.google.com/store/apps/details?id=io.github.ventsharm.mockup

The old browser-based generator and PWA assets have been retired. `sw.js` is intentionally kept as a small retirement worker so existing offline installations can clear only the old Mockup cache, unregister and load the landing page. It does not cache content or run the generator.
