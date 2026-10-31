# Mahesh & Muttu — Wedding Invitation Website

Static site (HTML, CSS, JavaScript). No backend, no build step.

## Files
- `index.html` — page content
- `style.css` — design
- `script.js` — countdown, Kannada/English toggle, music, menu, animations (settings in `CONFIG` at the top)
- `assets/images/` — add `couple-1.jpg` … `couple-6.jpg` (see README inside)
- `assets/music/` — optional `wedding-music.mp3`
- `assets/mahesh-muttu-wedding.ics` — calendar file for Apple / Outlook

## Publish
**Netlify (easiest):** go to app.netlify.com/drop and drag this whole folder onto the page.

**Vercel:** vercel.com → Add New → Project → upload/import this folder (Framework preset: "Other").

**GitHub Pages:** create a repository, upload all files (keep `index.html` at the top level),
then Settings → Pages → Deploy from branch → `main` / root.

After publishing, paste the site address into `siteLink` in `script.js` so WhatsApp shares include it.
