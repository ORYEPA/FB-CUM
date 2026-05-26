# Feliz Cumpleaños — Fernando Banos

## What This Is

Birthday greeting single-page app for Fernando Banos ("Esclavo Rebelde"). Combines animated ASCII cake, floating hearts background (blue/purple/black theme), photos of the birthday person that cycle on button click, and hardcoded birthday phrases for men that cycle with each click.

## Core Value

Press a button → photo changes + phrase changes → full personalized birthday experience.

## Who It's For

Fernando Banos (one specific person). Single-use, sharable page.

## Context

Continuation of two prior projects:
- **Feliz-Cum** (https://github.com/ORYEPA/Feliz-Cum) — source of the animated ASCII cake component
- **FB** (https://github.com/ORYEPA/FB) — source of the floating hearts background and phrase-cycling pattern

New project inherits visual patterns and adapts them:
- Color scheme: blue / purple / black (vs red/pink of originals)
- Phrases: birthday dedications for men (not Valentine's)
- Images: local photos of Fernando, cycle on click (not uploaded by user)

## Stack

- React + TypeScript + Vite
- No backend
- Deploy to Vercel
- No external APIs (no ChatGPT, no Cloudinary)

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Animated ASCII cake component with candle flicker
- [ ] Floating hearts background (blue/purple tones, not pink)
- [ ] Hardcoded birthday phrases for men (20+), cycle randomly on button click
- [ ] Local photos of Fernando cycle in sync with phrase on button click
- [ ] Fixed name: "Fernando Banos / Esclavo Rebelde" shown in heading
- [ ] Color scheme: blue, purple, black
- [ ] Single page, no routing
- [ ] Mobile responsive
- [ ] Deploy to Vercel

### Out of Scope

- Image upload by user — not needed, photos are pre-loaded
- ChatGPT / OpenAI — hardcoded phrases instead
- Cloudinary — photos are local assets
- Multiple pages / routing — single page only
- User login / auth — no auth

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Hardcoded phrases instead of AI | Simpler, faster, no API cost, same UX feel as FB Valentine's app | ✓ Decided |
| Local photos instead of Cloudinary | Single-person app, photos bundled at build time | ✓ Decided |
| Blue/purple/black theme | User specified, differentiates from pink Valentine's and standard birthday red | ✓ Decided |
| React + TypeScript + Vite | Same stack as both source repos, minimal friction | ✓ Decided |
| Same button cycles both phrase AND photo | Unified interaction — simpler than two separate buttons | ✓ Decided |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

---
*Last updated: 2026-05-25 after initialization*
