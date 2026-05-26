# Phase 1: Foundation & Visuals - Context

**Gathered:** 2026-05-25
**Status:** Ready for planning

<domain>
## Phase Boundary

Scaffold React+TypeScript+Vite app and implement all visual elements: heading with name/badge, animated ASCII cake, floating hearts background in blue/purple/black theme. No button, phrases, or photo cycling yet — pure visual foundation.

</domain>

<decisions>
## Implementation Decisions

### Layout Structure
- **D-01:** Content lives in a centered card over the hearts background (same pattern as Feliz-Cum).
- **D-02:** Card style: semi-transparent dark — `rgba(10,10,30,0.85)` with `backdrop-filter: blur(12px)` — hearts visible behind the card.
- **D-03:** Heading on top of card, ASCII cake below it (title first, cake second).

### Heading Display
- **D-04:** Main heading: "¡Feliz Cumpleaños!" as large `h1`.
- **D-05:** Below h1: a small badge/tag reading "Esclavo Rebelde" (styled as a pill/label).
- **D-06:** Below badge: "Fernando Banos" as `h2` subtitle.
- **D-07:** Order in card: h1 → badge → h2 → ASCII cake.

### Color Palette
- **D-08:** Page background: near-black `#0a0a1a` (deep dark blue-black).
- **D-09:** Hearts color: blue electric (`#4a9eff`) and purple (`#9b59b6`) — semi-transparent (~35% opacity), same symbol variety as FB app (`<3`, `♥`, `♡`, `❤`, `❥`).
- **D-10:** Card background: `rgba(10,10,30,0.85)` with `backdrop-filter: blur(12px)`.
- **D-11:** Accent colors for text/borders: blue `#4a9eff`, purple `#9b59b6`, white for primary text.
- **D-12:** No pink/red anywhere — all hearts and accents stay in blue/purple range.

### Claude's Discretion
- Exact card width, border-radius, padding values
- Font family (monospace for cake, sans-serif for headings — Claude decides)
- Number of hearts on screen (similar density to FB app, ~28 elements)
- Exact animation durations for hearts (similar to FB: varying speeds/delays)
- Heart shadow glow color values within blue/purple range

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Source Repos (read to understand patterns to port)
- `https://raw.githubusercontent.com/ORYEPA/Feliz-Cum/main/src/components/ASCIICake.tsx` — ASCII cake 3-frame animation component (port this logic)
- `https://raw.githubusercontent.com/ORYEPA/FB/main/src/App.jsx` — Hearts background + floating animation pattern (port and adapt colors)
- `https://raw.githubusercontent.com/ORYEPA/FB/main/src/styles.css` — Hearts CSS: `floatHeart` keyframe, `.bg-hearts`, heart element styles (port and recolor to blue/purple)

### Project Planning
- `.planning/REQUIREMENTS.md` — Phase 1 REQ-IDs: CAKE-01..03, BG-01..05, HEAD-01..03, LAYOUT-01..04, DEPLOY-01..02
- `.planning/PROJECT.md` — Name, stack decisions, scope boundaries

No local specs — all implementation decisions captured above.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None yet — greenfield project, no existing code

### Established Patterns (from source repos)
- `ASCIICake.tsx`: `useEffect` + `setInterval` + `useState(frameIndex)` pattern; `String.raw` for ASCII art; `role="img"` + `aria-label` in Spanish; cleanup on unmount
- `styles.css` (FB): `@keyframes floatHeart` — `translateY(-120vh) rotate(10deg)`, `rgba` for opacity, `text-shadow` glow; hearts positioned `fixed bottom: -80px`; `pointer-events: none` on container
- FB phrase cycling: `useState` for phrase index, `useMemo` for phrases array, random pick with no-repeat logic

### Integration Points
- Phase 2 will add button + phrases + photos inside the same card — card must have space reserved below the cake

</code_context>

<specifics>
## Specific Ideas

- Visual reference: FB Valentine's app dark aesthetic but all red/pink → blue/purple. Same floating heart mechanic.
- Name display: "Esclavo Rebelde" is a nickname/inside joke — render it as a styled badge/pill (border, small font, accent color), not as a serious subtitle.
- The cake should feel like the highlight — it's the centerpiece that got this project started.

</specifics>

<deferred>
## Deferred Ideas

- Button interaction and phrase cycling → Phase 2
- Photo cycling → Phase 2
- Mobile fine-tuning and Vercel deploy → Phase 3

None from discussion — scope stayed clean.

</deferred>

---

*Phase: 1-foundation-and-visuals*
*Context gathered: 2026-05-25*
