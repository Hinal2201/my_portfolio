# Hinal Arya — Portfolio

A responsive personal portfolio built with React, TypeScript, and Vite. It presents Hinal's experience in machine learning, selected projects, technical toolkit, education, and contact links.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

The production-ready site is written to `dist/`.

## Hosting

### Deploy to Vercel

1. Commit and push the portfolio source, lockfile, `vercel.json`, and public assets to `Hinal2201/my_portfolio` on GitHub. Do not commit `node_modules` or `dist`.
2. Sign in to [Vercel](https://vercel.com) with GitHub.
3. Select **Add New > Project**, then import `Hinal2201/my_portfolio`. Grant Vercel repository access if prompted.
4. Keep the root directory at the repository root. The included `vercel.json` selects Vite, `npm run build`, and `dist`.
5. Click **Deploy**. Vercel will provide the public HTTPS URL when the deployment succeeds.
6. Open the public URL and test navigation and **Download resume** before sharing it on LinkedIn.

Subsequent pushes to the production branch trigger automatic deployments. An optional custom domain can be connected in the project's **Settings > Domains**.

### Resume download

The hero's **Download resume** button downloads `public/Hinal_Arya_Resume.pdf`. This PDF is a public asset and will be accessible to anyone once the site is deployed. Replace that file with a new PDF using the same filename to update the resume. The PDF is copied unchanged into `dist` during the build.

## Personalize

- Update portfolio content and links in `src/App.tsx`.
- In each `skillGroups` entry, use `description` for the category summary and `featured` to highlight key skills with dark green badges. Keep featured names identical to entries in `skills`.
- Typography and responsive layouts are in `src/styles.css`; main body text is 16–19px and skill badges stay 16px on mobile as well as desktop.
- Update page title, SEO description, and social preview metadata in `index.html`.
- Replace the placeholder monogram favicon at `public/favicon.svg` if desired.
