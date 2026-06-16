# Codebase Pattern Analysis — Portfolio v3

>summary of animation, Tailwind, global state, and repetitive patterns.

---

## 1. Animation Patterns

### Library Stack

| Library | Version | Role |
|---|---|---|
| **GSAP** | 3.13 | Complex sequences, scroll-scrub, DOM splits |
| **Motion/React** (Framer v12) | 12 | Declarative, variant-driven UI transitions |
| **Lenis** | 1.3 | Smooth scroll driver (RAF-based, via Context) |
| **CSS Keyframes** | — | Simple utility animations in `globals.css` |

The two JS animation libraries are deliberately split by role and are not interchangeable.

---

### GSAP — Where & How

| Component / Hook | Pattern |
|---|---|
| `TextReveal.jsx` | `SplitText` per-line mask reveal + `ScrollTrigger` for scroll-gated play |
| `useLetterScroll.js` | Scrub-based per-letter parallax with custom wave stagger delays |
| `AboutTimelineSection.jsx` | Horizontal scroll, pinned section via `ScrollTrigger` |
| `HomeRecentProject.jsx` | FLIP-like expand: thumbnail → fullscreen via absolute coordinates |
| `useFadeUp.js` / `useFadeIn.js` | Simple fade-up hooks (legacy — see Repetitive Patterns §4D) |
| `CursorProvider.jsx` | `gsap.quickTo` for magnetic cursor elastic follow |

**Core GSAP config:**
```js
// TextReveal — line reveal
gsap.fromTo(splitRef.current.lines, { yPercent: 100 }, {
  yPercent: 0, duration: 1, ease: 'power3.out', stagger: staggerDelay
});

// FLIP expand (HomeRecentProject)
gsap.set(imgWrapRef.current, { x: rect.left, y: rect.top, width: rect.width, height: rect.height });
gsap.timeline()
  .to(imgWrapRef.current, { x: 0, y: 0, width: '100vw', height: '72vh', ease: 'expo.inOut' })
  .to(titleRef.current, { y: '0%', duration: 0.9 }, 0.55);
```

⚠️ **Known gap:** `ScrollTrigger` is not wired to Lenis (no `lenis.on('scroll', ScrollTrigger.update)`). This can cause jank on scroll-scrub animations because ScrollTrigger reads native scroll position while Lenis overrides it.

---

### Motion/React — Where & How

| Component | Pattern |
|---|---|
| `Reveal.jsx` | Generic wrapper — `useInView` + variant `hidden → visible` |
| `PageTransition.jsx` | Curtain wipe — two layered `motion.div` panels by `phase` |
| `AnimatedCard.jsx` | `useScroll` + `useTransform` parallax; `clipPath` reveal on hover |
| `Footer.jsx` | Multi-column parallax via `useScroll` + `useTransform` |
| `HoverRotate.jsx` | Text-swap hover (two spans slide in/out) |
| `CreativeButton.jsx` | Same text-swap hover (duplicated — see §4A) |
| `Preloader.jsx` | SVG curve morph on exit via `motion.path` variants |
| `Curve.jsx` | Sidebar SVG path morph |
| `CircularText.jsx` | `useAnimation` rotation, spring/linear on hover |
| `CustomCursor.jsx` | `useMotionValue` + `useSpring` for smooth cursor track |
| `Header.jsx` | Hide on scroll — `translateY` gated by scroll direction |
| `Sidebar.jsx` | Slide-in via `menuSlideLeft` variants |

**Preset variants centralised in `src/data/anim/presets.js`:**
```js
export const revealPresets = {
  fadeUp:    { initial: { opacity: 0, y: 40 },         animate: { opacity: 1, y: 0 } },
  fadeIn:    { initial: { opacity: 0 },                animate: { opacity: 1 } },
  scaleUp:   { initial: { opacity: 0, scale: 0.95 },   animate: { opacity: 1, scale: 1 } },
  slideLeft: { initial: { opacity: 0, x: 60 },         animate: { opacity: 1, x: 0 } },
  slideRight:{ initial: { opacity: 0, x: -60 },        animate: { opacity: 1, x: 0 } },
  clipUp:    { initial: { clipPath: 'inset(100% 0 0 0)' }, animate: { clipPath: 'inset(0% 0 0 0)' } },
};
export const defaultEase = [0.33, 1, 0.68, 1];
```

---

### CSS Keyframes (globals.css)

```css
@keyframes scroll-x    { 0% → translateX(0)     100% → translateX(-50%) }   /* marquee */
@keyframes slideInDown { from → translateY(-100%) opacity:0  to → 0 1 }
@keyframes slideOutDown{ from → 0 opacity:1  to → translateY(100%) 0 }
@keyframes fadeUp      { to → opacity:1 translateY(0) }
```

Used via `animate-slide-in-down`, `animate-slide-out-down`, `animate-scroll-x` classes.

---

## 2. Tailwind Patterns

### Version: Tailwind v4 (CSS-first, no `tailwind.config.js`)

Config lives entirely in `globals.css` via `@theme {}`. No config file — everything is CSS.

---

### Token Architecture

**Two-layer design system:**
```
tokens.css  →  raw CSS custom properties (:root)
globals.css →  @theme { } maps them into Tailwind
```

**`tokens.css` structure:**
- Fonts: `--sans`, `--serif`, `--mono`
- Colors: semantic scale (`--primary`, `--secondary`, `--brand-*`) + neutrals
- Dark mode: full override on `[data-theme~="dark"]`
- Fluid typography: `clamp()` from `--display` down to `--base-xs` (11 steps)
- Fluid spacing: `--s100` → `--s900` + layout vars (`--section-padding`, `--container-padding`)
- Animation: `--animation-fast/primary/smooth/slow` all `cubic-bezier(0.7, 0, 0.3, 1)`
- Responsive breakpoints for `--display` and padding at 768px / 1280px

**`@theme` mapping in `globals.css`:**
```css
--color-primary: var(--primary);          /* → text-primary, bg-primary */
--text-display:  var(--display);          /* → text-display */
--text-h100:     var(--h100);             /* → text-h100 ... text-h600 */
--spacing-s400:  var(--s400);             /* → gap-s400, p-s400, etc. */
--duration-fast: 300ms;                   /* → duration-fast */
```

---

### Dark Mode

Strategy: `data-theme` attribute on `<html>`, NOT the `class` strategy.

```css
@custom-variant dark (&:where([data-theme~="dark"], [data-theme~="dark"] *));
```

Toggle uses native `document.startViewTransition(applyTheme)` for the cross-fade.

---

### Custom Layout Utilities (layouts.css)

```css
.section-padding-x    { @apply px-2 md:px-6 lg:px-14; }
.section-padding-y    { @apply pt-[4rem] pb-[2rem]; }
.section-padding-xy   { @apply px-2 pt-[4rem] pb-[2rem] md:px-8 lg:px-14; }
.section-padding-hero { @apply px-4 pt-[12rem] pb-[4rem] md:pt-[8rem] ... }
.heading-display      { @apply tracking-[-0.02em] leading-[0.92] font-serif; }
.body-display         { @apply tracking-[-0.01em] leading-[1.4] font-sans; }
.body-mono            { @apply tracking-[0.01em] leading-[1.75] font-mono; }
```

---

### Recurring Utility Patterns in JSX

```jsx
// GPU-promotion on anything animated
className="will-change-transform translate-z-0 antialiased"

// Inline clamp (inconsistency — should use token classes)
className="text-[clamp(48px,14vw,250px)]"
className="text-[clamp(3rem,10vw,4.5rem)]"

// Token-based spacing (correct usage)
className="gap-s400 mb-s700 pt-s300 pb-s600"

// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_420px]"
className="md:grid md:grid-cols-12 gap-s200 md:gap-s500"

// Header inverts colors over any background
className="fixed w-full z-[9998] mix-blend-difference"
```

---

## 3. Global State Patterns

No external state library. All state is **React Context API** only.

### Provider Tree (`AppProviders.jsx`)

```
LenisProvider           → smooth scroll instance
  CursorProvider        → cursor variant + magnetic state
    PageFlowProvider    → page lifecycle & transition orchestration
      OverlayProvider   → expand overlay open/close + animated-close callback
```

---

### `PageFlowContext` — Central Lifecycle State

The most critical context. Every animation in the app gates on it.

```
isInitialLoading  → Preloader shown
isReady           → preloader exit done, content can animate
phase             → 'idle' | 'exit' | 'wait-for-ready' | 'enter'
canRevealContent  → isReady && phase !== 'exit'   ← animation gate
revealEpoch       → increments on each navigation ← resets per-page animations
navigateTo(path)  → triggers: exit → navigate → enter sequence
```

**How components use it:**
```js
const { canRevealContent, revealEpoch } = usePageFlow();
// TextReveal, Reveal, etc. all gate on canRevealContent
// replayOnNavigate components also watch revealEpoch
```

---

### `LenisContext`

```js
{ lenis, stopScroll, startScroll, scrollTo }
// lenis instance also attached to window.lenis for debugging
```

Context value is `useMemo`-d to prevent re-renders.

---

### `CursorContext`

Two parallel interaction patterns (both active):
1. **Data-attribute** — global `mouseover` listener reads `data-cursor`, `data-cursor-magnetic` etc.
2. **`useCursorInteraction` hook** — programmatic `mouseenter`/`mouseleave` on a ref

---

### `OverlayContext`

```js
registerAnimatedClose(fn)  // component registers its own close animation
closeOverlay()             // calls the registered fn
onOverlayClosed()          // resets state after animation completes
```

---

### Dead Code

`LoadingProvider.jsx` — exact duplicate of `PageFlowContext.jsx`. Same state shape, same logic, different file. Not exported from `context/index.js`. Safe to delete.

---

## 4. Repetitive Animation Patterns

### 4A — Text-Swap Hover (3 copies)

The sliding text-swap hover (span slides up, replacement slides in from below, background fill rises) is copy-pasted across three files. `HoverRotate.jsx` is the intended abstraction but `CreativeButton` re-implements it fully inline.

| File | State | Span 1 y | Span 2 y | BG div |
|---|---|---|---|---|
| `HoverRotate.jsx` | `isHovering` | `-100%` / `0%` | `0%` / `100%` | `0%` / `125%` |
| `CreativeButton.jsx` | `isHovering` | `-100%` / `0%` | `0%` / `100%` | `0%` / `125%` |
| `NavigationLink.jsx` | `isHovering` | `-100%` / `0` | `-100%` / `100%` | — |

**Fix:** `CreativeButton` should compose `HoverRotate` rather than re-implement it. `NavigationLink` uses a simplified variant — could be unified or intentionally kept separate.

---

### 4B — Hero Word Cycling (2 copies, identical logic)

`HomeHeroSection.jsx` and `AboutHeroSection.jsx` share the exact same interval-driven word-cycler:

```js
// Identical in both files
const [activeIndex, setActiveIndex] = useState(0);
const [prevIndex, setPrevIndex] = useState(-1);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex(prev => { setPrevIndex(prev); return (prev + 1) % 2; });
  }, 1550);
  return () => clearInterval(interval);
}, []);

const getWordClass = wordIndex => {
  const base = '[grid-area:1/1] flex items-center whitespace-nowrap';
  if (wordIndex === activeIndex) return `${base} animate-slide-in-down`;
  if (wordIndex === prevIndex)   return `${base} animate-slide-out-down`;
  if (wordIndex === 0 && prevIndex === -1) return `${base} opacity-100 translate-y-0`;
  return `${base} opacity-0 translate-y-full`;
};
```

Only the `words` array differs. 

**Fix:** Extract into `<WordCycler words={[...]} interval={1550} />`.

---

### 4C — Parallax Column Images (Footer re-implements CardParallax)

`Footer.jsx` defines two local inline components (`MobileParallaxImage`, `Column`) both using `useScroll` + `useTransform`. `CardParallax.jsx` already exists as a reusable parallax abstraction that does the same thing.

**Fix:** Replace inline footer parallax with `<CardParallax>` or a shared `useParallax` hook.

---

### 4D — Two Parallel Fade-Up Systems (GSAP vs Motion)

Same "fade up on scroll" effect has two separate implementations:

| System | Files | Used in pages? |
|---|---|---|
| GSAP | `useFadeUp.js`, `useFadeIn.js` | ❌ No (legacy, unused) |
| Motion | `useScrollReveal.js` → `<Reveal>` | ✅ Yes (current standard) |

**Fix:** Delete `useFadeUp.js` and `useFadeIn.js`. `<Reveal preset="fadeUp">` is the correct path.

---

### 4E — Magnetic Cursor Logic (2 copies)

`gsap.quickTo` magnetic follow is implemented identically in:

1. `CursorProvider.jsx` (data-attribute driven, global listener)
2. `useCursorInteraction.js` (programmatic hook per-ref)

```js
// Identical in both
xTo = gsap.quickTo(el, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
yTo = gsap.quickTo(el, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });
handleMouseMove = e => { xTo(x * 0.35); yTo(y * 0.35); };
```

Both can activate on the same element simultaneously.

**Fix:** Extract shared magnetic logic into a `createMagneticEffect(el)` utility. Both implementations consume it.

---

## Consolidation Priorities

| Priority | Issue | Action |
|---|---|---|
| 🔴 High | `LoadingProvider.jsx` dead duplicate | Delete the file |
| 🔴 High | `useFadeUp.js` / `useFadeIn.js` unused GSAP hooks | Delete both files |
| 🟡 Medium | Word cycling duplicated in 2 hero sections | Extract `<WordCycler>` component |
| 🟡 Medium | Text-swap hover in `CreativeButton` vs `HoverRotate` | Make `CreativeButton` compose `HoverRotate` |
| 🟡 Medium | Two magnetic cursor implementations | Extract `createMagneticEffect(el)` util |
| 🟢 Low | Footer parallax vs `CardParallax` | Reuse `CardParallax` in Footer |
| 🟢 Low | Inline `clamp()` in JSX | Replace with token classes (`text-h400`, etc.) |
| 🟢 Low | ScrollTrigger not wired to Lenis | Add `lenis.on('scroll', ScrollTrigger.update)` |
