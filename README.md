# Docusaurus Site

This repository contains a Docusaurus-based publication layer for the existing documentation stored in `./docs`.

## What is included

- Docusaurus app files at the repository root
- existing markdown content from `./docs`
- existing static API reference files from `./docs/public`
- GitHub Pages deployment workflow in `.github/workflows/deploy.yml`

## Local development

```bash
npm install
npm run start
```

## Production build

```bash
npm run build
npm run serve
```

## Notes

- Docusaurus uses `./docs` as the docs content directory.
- VitePress-specific files in `./docs/.vitepress` are excluded from the Docusaurus docs pipeline.
- Static API reference files are served from `./docs/public`.
