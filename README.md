# RadarCopter — website

Public site for the RadarCopter iOS app, served via GitHub Pages at
<https://radarcopter.github.io/radarcopter-privacy/>.

| Page | URL |
| --- | --- |
| Product home | [`app.html`](https://radarcopter.github.io/radarcopter-privacy/app.html) |
| Privacy Policy (EN/ES) | [`index.html`](https://radarcopter.github.io/radarcopter-privacy/) |
| Terms of Use / EULA (EN/ES) | [`terms.html`](https://radarcopter.github.io/radarcopter-privacy/terms.html) |
| Support & FAQ (EN/ES) | [`support.html`](https://radarcopter.github.io/radarcopter-privacy/support.html) |

The AdMob seller declaration lives in [`app-ads.txt`](app-ads.txt). AdMob
crawls the root of the developer-website hostname, so the same file must be
available at `https://radarcopter.github.io/app-ads.txt` (or at the root of a
replacement developer domain) before requesting verification. The project-page
URL by itself is not sufficient for the crawler.

These URLs are referenced by the App Store listing — do not move or rename
`index.html` (Privacy Policy URL / Support URL) or `terms.html` without
updating the listing first.

Shared styles and the EN/ES language switcher live in `assets/`.
