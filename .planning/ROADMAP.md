# Roadmap — Feliz Cumpleaños Fernando Banos

**3 phases** | **22 requirements mapped** | All v1 requirements covered ✓

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|------------------|
| 1 | Foundation & Visuals | Working app with cake + hearts + theme | CAKE-01..03, BG-01..05, HEAD-01..03, LAYOUT-01..04, DEPLOY-01..02 | 3 |
| 2 | Content & Interaction | Phrases + photos cycling on button click | PHRASE-01..04, PHOTO-01..05, INT-01..02 | 3 |
| 3 | Polish & Deploy | Final styling, responsive, live on Vercel | All visual polish, mobile test, deploy | 3 |

---

### Phase 1: Foundation & Visuals

**Goal:** Scaffold the app and implement all visual elements — ASCII cake, floating hearts background, heading with Fernando's name — in blue/purple/black theme. App loads and looks complete visually.
**Mode:** mvp

**Requirements:** CAKE-01, CAKE-02, CAKE-03, BG-01, BG-02, BG-03, BG-04, BG-05, HEAD-01, HEAD-02, HEAD-03, LAYOUT-01, LAYOUT-02, LAYOUT-03, LAYOUT-04, DEPLOY-01, DEPLOY-02

**Success Criteria:**
1. `npm run dev` shows a page with animated ASCII cake, floating blue/purple hearts, and "Feliz Cumpleaños / Fernando Banos" heading
2. Hearts float upward infinitely, candles flicker — both animations run without errors
3. Page is centered, visually coherent in blue/purple/black; works on mobile (320px+)

---

### Phase 2: Content & Interaction

**Goal:** Add 20+ birthday phrases for men and local photos of Fernando. Single button cycles both phrase and photo simultaneously with no consecutive repeat.
**Mode:** mvp

**Requirements:** PHRASE-01, PHRASE-02, PHRASE-03, PHRASE-04, PHOTO-01, PHOTO-02, PHOTO-03, PHOTO-04, PHOTO-05, INT-01, INT-02

**Success Criteria:**
1. Button click changes phrase AND photo at the same time; no two consecutive items repeat
2. All 20+ phrases display correctly; all placeholder/real photos cycle without broken images
3. Button is visually prominent with hover state; labeled in Spanish

---

### Phase 3: Polish & Deploy

**Goal:** Final visual polish, mobile responsiveness verified, deploy to Vercel. Live URL accessible.
**Mode:** mvp

**Requirements:** All remaining polish on LAYOUT-03, LAYOUT-04, DEPLOY-02

**Success Criteria:**
1. `npm run build` produces zero errors; Vercel deploy succeeds
2. Page loads on mobile (tested at 375px) — cake, photo, phrase, button all visible without horizontal scroll
3. Live Vercel URL works and all animations run in production
