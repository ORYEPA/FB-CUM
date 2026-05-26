# Walking Skeleton — Phase 1: Foundation & Visuals

## What the Skeleton Proves

This is a static frontend app (no database, no API). The walking skeleton proves the entire visual rendering stack works end-to-end:

1. React + TypeScript + Vite scaffold boots without errors
2. At least one animated component (ASCIICake) renders and cycles frames in the browser
3. The CSS pipeline (global styles, CSS custom properties, keyframe animations) is wired and functional
4. `npm run dev` produces a working dev server with zero console errors

## Thinnest Working Slice

Plan 01-01 (scaffold) + Plan 01-02 (visuals) together deliver the skeleton. After Wave 1 (scaffold):

- `npm run dev` launches
- App.tsx renders a placeholder heading
- Vite hot-reload works

After Wave 2 (visuals):

- ASCIICake candle flicker animation runs in browser
- FloatingHearts background floats upward infinitely
- Heading renders: h1 "¡Feliz Cumpleaños!" → badge "Esclavo Rebelde" → h2 "Fernando Banos"
- Blue/purple/black theme is visible — no pink or red

## Skeleton Success Check

```bash
npm run dev      # Dev server starts, no errors
npm run build    # Build produces dist/ with zero TypeScript/Vite errors
```

Visual check in browser at `http://localhost:5173`:
- Animated ASCII cake with flickering candles (i / * / ' symbols alternate at ~4fps)
- 28 hearts floating upward in blue (#4a9eff) and purple (#9b59b6)
- Card centered on near-black (#0a0a1a) background
- No pink/red anywhere

## Architectural Decisions Locked Here

| Concern | Decision |
|---------|----------|
| Framework | React 18 + TypeScript + Vite |
| Styling | Single `src/index.css` global stylesheet with CSS custom properties |
| Component model | Functional components only, hooks for animation state |
| ASCII art | `String.raw` template literals, `<pre>` with `font-family: monospace` |
| Hearts | 28 fixed-position `<span>` elements, CSS `@keyframes floatHeart` |
| No routing | Single `App.tsx`, no react-router |
| No state management | Local component state only (useState, useEffect) |
| Deploy target | Vercel — `npm run build` must produce clean dist/ |
| Directory layout | `src/components/` for ASCIICake.tsx and FloatingHearts.tsx |

These decisions are final for all subsequent phases.
