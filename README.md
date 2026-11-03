# hanmafit.com

Hanma Fitness Studio website. Astro, React islands, Tailwind. Hosted on Netlify.

- All business facts (hours, prices, coaches, programmes, results) live in `src/data/site.ts`.
- Photos live in `public/img/` as optimised WebP; brand files in `public/brand/`.
- Trial form submissions go to Netlify Forms; `netlify/functions/submission-created.mjs` copies them to Brevo when `BREVO_API_KEY` is set.
- Tracking: Google Analytics G-HS7N64H2QT, Google tag GT-TQDRWV76, Brevo, all in `src/layouts/Base.astro`.

Local: `npm install`, `npm run dev`. Build: `npm run build`.
- Calorie calculator at `/calculator` (`public/calculator.html`). The working runs on the server, in `netlify/functions/calculator-plan.mjs` with the engine in `netlify/lib/calculator/`; the page only renders what comes back, so the paid plan never reaches a browser that has not unlocked it. Coach access and paid links need `COACH_PASSWORD` and `UNLOCK_SECRET` (any long random phrase, 24+ characters) in Netlify environment variables. Without them the calculator still works in its free view.
