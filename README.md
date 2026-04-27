# Volta Landing

Vite + React + TypeScript port of the Volta marketing landing page.

## Scripts

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # type-check + production build
npm run preview  # preview production build
```

## Notes

- Design tokens live in [src/styles.css](src/styles.css) (`oklch()` color tokens, fonts, layout primitives).
- Bilingual content (ko/en) is in [src/i18n.ts](src/i18n.ts); Korean is primary.
- Theme is dark-only by default. Toggle to light by setting `data-theme="light"` on `<html>`.
- Tweaks panel and accent-hue tweak from the design prototype were intentionally dropped (per design handoff README).
- DAW logos are placeholder unicode glyphs — replace with proper SVGs after licensing review.
