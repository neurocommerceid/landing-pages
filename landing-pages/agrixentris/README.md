# AgriXentris Nusantara

Indonesian company profile and searchable 10-item sample catalog. Product details include a quantity selector and a WhatsApp inquiry containing the product name, SKU, and quantity. No payment, server submission, or persistence.

## Run

Node.js 20.9+ and pnpm. From this directory:

```sh
pnpm install --frozen-lockfile --store-dir /workspace/.pnpm-store
pnpm dev --hostname 127.0.0.1 --port 3001
pnpm typecheck
pnpm build
pnpm start --hostname 127.0.0.1 --port 3001
```

## GitHub and Vercel deployment

The GitHub Actions workflow `.github/workflows/agrixentris.yml` typechecks and builds this project when its files change. The Vercel settings are:

| Setting | Value |
| --- | --- |
| Repository | `neurocommerceid/landing-pages` |
| Project name | `agrixentris-nusantara` |
| Production branch | `agrixentris-website` |
| Root directory | `landing-pages/agrixentris` |
| Framework | Next.js |
| Node.js | 24.x |
| Install command | From `vercel.json`: `npx --yes pnpm@11.25.0 install --frozen-lockfile` |
| Build command | From `vercel.json`: `npm run build` |
| Output directory | Next.js default |

Import the repository into Vercel and select this root directory. Set the production branch to `agrixentris-website` in the project's Git settings. The Vercel GitHub integration must have access to this repository. Future pushes to the connected branch trigger deployments. `VERCEL_TOKEN` is needed only by deployment tooling, never by the website; do not add it to public application variables or commit its value.

The environment's deployment token requirement is stored securely in environment settings. A saved requirement is not an authenticated Vercel connection or a completed deployment.

## Content and publication

- Edit company contacts and the ten sample SKUs in `lib/catalog.ts`.
- Company facts, contact details, logo, and photographs are from the user-supplied `Compro_Agrixentris_Nusantara_Compressed.pdf` (November 2026). The phone was normalized from `+62 0896 - 0771 - 8976` to `6289607718976`; confirm ownership and WhatsApp availability before publishing.
- The user approved example products. All ten SKU identifiers, variants, descriptions, and packaging illustrations are provisional. No price, stock, size, composition, yield, or certification is asserted. Replace them with the client's verified data and images before public launch.
- Product SVG artwork is original conceptual illustration. It is not a photograph of an actual product or package. Document photos are used only for company imagery.
- The source PDF's printed web address contains an underscore. No canonical origin is assumed. Set the real production domain in metadata and remove the preview `noindex` when the client approves the content.
- Fonts are local; retain the SIL Open Font Licenses in `app/fonts`.
- The website does not submit or send a message automatically. The customer opens WhatsApp and reviews/sends the inquiry there.

## Checks

Typecheck and production build are required. Browser smoke checks should cover all 10 items, combined category/search filtering, empty state/reset, accessible product dialog, quantity bounds, the generated WhatsApp URL, Escape/focus return, and mobile navigation without horizontal overflow.
