# Requirements — Feliz Cumpleaños Fernando Banos

## v1 Requirements

### Visual — Cake

- [ ] **CAKE-01**: Page displays animated ASCII art birthday cake with flickering candles (3-frame animation, ~4-5 fps)
- [ ] **CAKE-02**: Cake animation cycles through frames using setInterval and cleans up on unmount
- [ ] **CAKE-03**: Cake renders in a monospace font and is accessible (role="img", aria-label)

### Visual — Background

- [ ] **BG-01**: Page has animated floating hearts background (infinite, blue/purple tones)
- [ ] **BG-02**: Hearts cycle through symbols: `<3`, `♥`, `♡`, `❤`, `❥`
- [ ] **BG-03**: Hearts spawn at bottom, float upward, fade at top (same mechanic as FB Valentine's app)
- [ ] **BG-04**: Background uses blue/purple/black color palette (not pink/red)
- [ ] **BG-05**: Hearts layer is non-interactive (pointer-events: none)

### Content — Heading

- [ ] **HEAD-01**: Page displays "Feliz Cumpleaños" heading
- [ ] **HEAD-02**: Page displays "Fernando Banos" (or "Esclavo Rebelde - Fernando Banos") as subtitle/label
- [ ] **HEAD-03**: Heading area uses blue/purple/black styling consistent with theme

### Content — Phrases

- [ ] **PHRASE-01**: App has 20+ hardcoded birthday phrases dedicated to a man
- [ ] **PHRASE-02**: Phrases mix: "Feliz cumpleaños" openers + affectionate/funny dedications
- [ ] **PHRASE-03**: Clicking button shows a new random phrase (no consecutive repeat)
- [ ] **PHRASE-04**: Button label in Spanish (e.g., "¡Nueva frase!" or similar)

### Content — Photos

- [ ] **PHOTO-01**: App has a set of local photos (Fernando's photos bundled as assets)
- [ ] **PHOTO-02**: Photos are stored in `src/assets/photos/` directory
- [ ] **PHOTO-03**: Each button click cycles to next photo in sync with phrase change
- [ ] **PHOTO-04**: Photo displays in a styled card/frame with rounded corners
- [ ] **PHOTO-05**: Photo cycling avoids repeating consecutive image (same shuffle logic as phrases)

### Interaction

- [ ] **INT-01**: Single button triggers both phrase change AND photo change simultaneously
- [ ] **INT-02**: Button is visually prominent (blue/purple gradient, hover state)

### Layout & Responsiveness

- [ ] **LAYOUT-01**: Single page, no routing
- [ ] **LAYOUT-02**: Centered content card over the hearts background
- [ ] **LAYOUT-03**: Mobile responsive (works on phone screens)
- [ ] **LAYOUT-04**: ASCII cake, photo, and phrase visible without scrolling on desktop

### Deployment

- [ ] **DEPLOY-01**: Project scaffolded with React + TypeScript + Vite
- [ ] **DEPLOY-02**: Deployable to Vercel with `npm run build`

## v2 Requirements (Deferred)

- Dynamic name via URL param (?nombre=...)
- Sound effect on button click
- Share button to copy URL
- Multiple language support

## Out of Scope

- Image upload by user — photos are pre-loaded at build time
- ChatGPT / OpenAI API — hardcoded phrases
- Cloudinary — no cloud image storage needed
- User authentication — no auth
- Multiple pages / routing — single page

## Traceability

| REQ-ID | Phase | Status |
|--------|-------|--------|
| CAKE-01..03 | Phase 1 | Pending |
| BG-01..05 | Phase 1 | Pending |
| HEAD-01..03 | Phase 1 | Pending |
| PHRASE-01..04 | Phase 2 | Pending |
| PHOTO-01..05 | Phase 2 | Pending |
| INT-01..02 | Phase 2 | Pending |
| LAYOUT-01..04 | Phase 1 | Pending |
| DEPLOY-01..02 | Phase 1 | Pending |
