# What's the 311?

Landing page for a public-service ad campaign encouraging San Franciscans to
report cleanliness issues via **SolveSF** or **SF311**. Built with Next.js 14
(App Router) + Tailwind. Zero backend — drop on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

```bash
npx vercel        # first time, links the project
npx vercel --prod # deploy
```

Or push to GitHub and import in the Vercel dashboard. No env vars required.

## Sections

- **Hero** — Tagline + QR code that points to `https://solvesf.com` (edit
  `SOLVESF_URL` in [Hero.tsx](components/Hero.tsx) to swap in the real
  App Store / Play Store link or a smart-link).
- **How it works** — Three-step civic loop, emphasizes that DPW responds in
  hours and that the city *needs* citizen reports.
- **What you can call in** — Grid of reportable categories handled by SF DPW
  (litter, human/animal waste, graffiti, illegal dumping, syringes, dead
  animals, tree/sidewalk hazards, abandoned vehicles, encampment debris).
- **Clean SF Wins** — Before/after card grid. **Placeholders right now.** To
  use real photos from @solvesf, drop them in `public/wins/` and replace the
  gradient `<BeforeAfter />` blocks with `<Image>` tags.
- **Hero Reporters** — Quarterly leaderboard concept for top reporters in
  underreported neighborhoods (Bayview, Vis Valley, OMI, Portola, Excelsior).
  Top reporter per neighborhood gets a meeting with the Mayor.
- **Footer** — Links to SolveSF, SF311, DPW, Mayor's office.

## Customizing

- **Colors:** `tailwind.config.ts` (`sf.orange`, `sf.bay`, etc.)
- **Copy:** all strings live inline in `components/*.tsx`
- **Leaderboard data:** edit the `heroes` array in
  [Heroes.tsx](components/Heroes.tsx). Wire it to a real API by turning the
  component into a Server Component that fetches from the SolveSF backend.

## Notes on the campaign claim

The numbers in the hero (`<48h avg response`, `2h fastest`, `1M+ reports/yr`)
are illustrative — confirm with DPW comms before publishing. SF311 logs
~2.5M+ service requests per year across all categories per recent open-data
dashboards, so "1M+" cleanliness-specific is in the right zip code but should
be sourced.
