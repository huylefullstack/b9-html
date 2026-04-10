# b9-html

Static HTML demos (`desktop.html`, `mobile.html`).

## Vercel

This project uses a tiny build step that copies HTML into `public/` so Vercel always has an explicit output directory (`outputDirectory` in `vercel.json`).

- **Production:** `/`, `/desktop.html`, and `/mobile.html` should all work after deploy.
- If you use a **monorepo**, set the Vercel project **Root Directory** to this folder (`b9-html`).
