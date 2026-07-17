# AGENTS.md

Repo-wide contributor instructions for the PrigeeX marketing site.

## What this repo is

The PrigeeX landing page. Next.js 16 + React 19, no wallet / web3 dependencies. Deploys to `prigeex.com`.

The dApp (`/swap`, `/pool`, `/portfolio`, `/stake`, `/analytics`, `/perpetuals`) lives in a separate repo, `PrigeeX/frontend`, deployed at `app.prigeex.com`. This site links out to it; it does not render any dApp routes itself.

PrigeeX is positioned as an institutional venue for on-chain markets: liquidity, settlement, and tokenised real-world assets, engineered for capital arriving on-chain.

## Design system

`public/theme.css` is the source of truth for tokens and shared component classes (`.btn` + `.btn--primary` / `.btn--warm` / `.btn--ghost`, `.surface`, `.hairline-grid`, `.eyebrow`, `.pill`, `.sec-head`, `.bg-grid`, `.tel-val` + `.tel-label`, `.reveal`). It is duplicated from the `frontend` repo by hand - if you change tokens or shared component styles there, port the same change here (and vice versa). There is no build-time link between the two; keeping them in sync is a manual discipline, not automatic.

`app/globals.css` here only adds the floating-nav chrome (shared visual language with the dApp nav) and a couple of resets. Landing-only visuals live in `components/landing/landing.css`.

## Content rules for landing copy

- **Keep landing copy broad.** Do not list specific fee tiers, library names, function-parameter names, contract module names, or hyper-specific market segments. Engineering pillars describe qualities of the venue (institutional grade, precision, audited, transparent, open analytics). Phase cards describe what each phase delivers in one or two general lines. Implementation specifics live in documentation, not on the investor landing.
- **No Phase-1 markers.** No "Phase 1" / "BETA" / "MVP" eyebrows, stamps, or footer cells. Phase 1 / Phase 2 / Phase 3 are valid structural section labels *inside* the Flight Plan section only.
- **No fake telemetry.** Do not fabricate TVL, volume, fees, or APY figures. If the number is not real, leave the placeholder cell at `-` or omit the metric.
- **No DeFi tropes.** No emoji, no "WAGMI", no purple-to-pink gradients, no glowing 3D coins, no "Empower the future of finance".

## Style rule that applies everywhere

**No em dashes (U+2014) anywhere.** Not in code, comments, strings, markdown, copy, or commit messages. Use a hyphen (`-`), comma, parentheses, or a new sentence instead.

Verify locally before pushing:

```bash
grep -R "—" app components lib public/theme.css AGENTS.md
```

The grep should return nothing.

## Repository layout

```
app/              Next.js App Router routes
  page.tsx        Landing
  layout.tsx      imports /theme.css
  globals.css     floating-nav chrome, resets
components/
  Nav.tsx         floating pill nav - all dApp links resolve to NEXT_PUBLIC_APP_URL
  landing/        landing sections + landing.css
  icons.tsx       inline icon set
lib/
  docs.ts         doc link builder, defaults to docs.prigeex.com
  app-url.ts      dApp link builder, defaults to app.prigeex.com
public/
  theme.css       design system, kept in sync with the frontend repo by hand
  assets/         aviation video, other media
  brand/          PrigeeX logo SVGs
AGENTS.md         this file
```

## Local dev

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
```

Env vars (see `.env.example`), both optional:

- `NEXT_PUBLIC_APP_URL` (defaults to `https://app.prigeex.com`)
- `NEXT_PUBLIC_DOCS_URL` (defaults to `https://docs.prigeex.com`)

## What is NOT in scope here

- Any dApp route or wallet-connect logic. Lives in `PrigeeX/frontend`, deployed at `app.prigeex.com`.
- Smart contract source. Lives in the contracts repo.
- Subgraph definitions. Live in the subgraph repo.
- Docs content. Lives in the docs space published at `docs.prigeex.com`.

If you find yourself wanting to add one of these, open the relevant repo instead of this one.
