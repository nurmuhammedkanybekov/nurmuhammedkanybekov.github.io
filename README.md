# nurmuhammedkanybekov.github.io

My personal site. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
```

## Editing content

Almost everything is in **`src/data/site.ts`**: hero text, about paragraphs,
jobs, featured projects, other projects, contact text, links.

| I want to… | Do this |
| --- | --- |
| Add my CV | Put it at `public/resume.pdf`. The Resume buttons appear on the next build. |
| Add my photo | Put a square photo at `public/me.jpg`. It replaces the monogram in About. |
| Write a note / blog post | Copy `src/content/notes/_example.md`, rename it without the `_`, set `draft: false`. The "Notes" link shows up in the menu once one post exists. |
| Change the accent color | Edit `--accent` in `src/styles/global.css` (once for dark, once for light). |
| Add a project | Add an object to `featured` or `projects` in `src/data/site.ts`. |

Featured project images are drawn in code (`src/components/Cover.astro`).
To use a real screenshot instead, replace the `<Cover />` in
`src/components/Featured.astro` with an `<img>`.

## Deploying (first time)

1. On GitHub, create a **public** repo named exactly
   `nurmuhammedkanybekov.github.io`.
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/nurmuhammedkanybekov/nurmuhammedkanybekov.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Wait for the "Deploy to GitHub Pages" action to finish (Actions tab).
   The site is live at https://nurmuhammedkanybekov.github.io

Every push to `main` redeploys. Remnant keeps working at `/remnant` because it
lives in its own repo.

Layout inspired by [Brittany Chiang's v4](https://github.com/bchiang7/v4).
