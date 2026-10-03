# nurmuhammedkanybekov.github.io

My personal site: [nurmuhammedkanybekov.github.io](https://nurmuhammedkanybekov.github.io).
Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview    # serve the build
```

## Editing

All content lives in `src/data/site.ts`. Components only render it.

| I want to... | Do this |
| --- | --- |
| Add my CV | Put it at `public/resume.pdf`. Resume buttons appear on the next build. |
| Add my photo | Put a square photo at `public/me.jpg`. It replaces the monogram in About. |
| Use a real screenshot for a featured project | Put it in `public/` and set `image: '/file.jpg'` on that entry in `featured`. |
| Write a note | Copy `src/content/notes/_example.md`, drop the `_`, set `draft: false`. The Notes link and sitemap entry show up once one post exists. |
| Change the accent color | Edit `--accent` in `src/styles/global.css` (dark and light). |

## Things to know

- GitHub Pages must be set to **Settings → Pages → Source: GitHub Actions**.
- The Remnant game lives in its own repo and is served at `/remnant`. Don't add a `public/remnant/` folder, it would shadow the game.
- Colors are tokens in `global.css`. Don't hardcode them in components.
- The gold Kyrgyz ornaments (ram's horn and tunduk) live in `src/components/Ornament.astro` and take their color from `--accent`.

Layout inspired by [Brittany Chiang's v4](https://github.com/bchiang7/v4).
