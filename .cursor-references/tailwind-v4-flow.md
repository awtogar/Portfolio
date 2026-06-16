# Tailwind v4 Token Flow — garr.dev

## Overview

This project uses a **3-layer token architecture** for styling. All design values originate from `tokens.css`, get mapped to Tailwind utility classes in `globals.css` via `@theme`, and are consumed in JSX as standard Tailwind classes.

---

## Layer 1 — `tokens.css` (raw CSS custom properties)

All design tokens are defined here as CSS custom properties on `:root`. These are plain CSS — no Tailwind involvement yet.

```css
:root {
  --display: clamp(2rem, 11vw, 14rem);
  --h500: clamp(1.25rem, 0.9743rem + 1.2255vw, 1.5625rem);
  --sans: 'General Sans', Inter, sans-serif;
  --accent: #ffe365;
  /* ... etc */
}
```

**Responsive overrides** are done here too — override the raw variable per breakpoint. The Tailwind class automatically picks up the new value everywhere it's used, no JSX changes needed:

```css
:root {
  --display: clamp(2rem, 11vw, 6rem);
}

@media screen and (min-width: 768px) {
  :root {
    --display: clamp(6rem, 10vw, 9rem);
  }
}

@media screen and (min-width: 1280px) {
  :root {
    --display: clamp(9rem, 11vw, 14rem);
  }
}
```

---

## Layer 2 — `globals.css` via `@theme` (Tailwind v4 mapping)

Tailwind v4 uses `@theme` to register custom utility classes from CSS variables. The naming convention is:

```
--{category}-{name}: var(--token-name)
```

This auto-generates the Tailwind class `{category}-{name}`.

```css
@theme {
  --text-display: var(--display);     /* → class: text-display */
  --text-h500: var(--h500);           /* → class: text-h500 */
  --font-sans: var(--sans);           /* → class: font-sans */
  --color-accent: var(--accent);      /* → class: text-accent, bg-accent */
  --spacing-s500: var(--s500);        /* → class: p-s500, m-s500, gap-s500 */
  /* ... etc */
}
```

**Custom utilities** and **component classes** go in `@layer utilities` inside `layouts.css`:

```css
@layer utilities {
  .section-padding-x {
    @apply px-2 md:px-6 lg:px-14;
  }
  .body-display {
    @apply tracking-[-0.01em] leading-[1.4] font-sans;
  }
}
```

---

## Layer 3 — JSX (consuming Tailwind classes)

Classes are used normally in JSX. They resolve through `@theme` → `tokens.css` at runtime.

```jsx
<h1 className="font-serif text-display tracking-[-0.02em]">
  Awaluddin Togar
</h1>

<span className="text-h500 body-display">
  Design without code is a mood board.
</span>
```

**Rules:**
- Never use inline `style={{}}` for values that have a token equivalent
- Custom component classes (e.g. `.body-display`, `.section-padding-x`) are defined in `layouts.css`, not inline
- Breakpoint-responsive sizing is handled in `tokens.css` via media queries on CSS variables, not via Tailwind responsive prefixes on font size classes

---

## Breakpoints

Defined in `@theme` in `globals.css`:

```css
@theme {
  --breakpoint-md: 46rem;   /* 736px */
  --breakpoint-lg: 60rem;   /* 960px */
  --breakpoint-xl: 80rem;   /* 1280px */
  --breakpoint-2xl: 90rem;  /* 1440px */
}
```

Used as standard Tailwind prefixes: `md:`, `lg:`, `xl:`, `2xl:`

---

## Typography Scale (tokens → classes)

| Token         | Class          | Value (fluid clamp)                              |
|---------------|----------------|--------------------------------------------------|
| `--display`   | `text-display` | responsive via media query overrides             |
| `--h100`      | `text-h100`    | `clamp(3.05rem, …, 3.81rem)`                    |
| `--h500`      | `text-h500`    | `clamp(1.25rem, …, 1.5625rem)`                  |
| `--h600`      | `text-h600`    | `clamp(1rem, …, 1.25rem)`                       |
| `--base`      | `text-base`    | `clamp(1rem, …, 1.25rem)`                       |

---

## Key Rule Summary

| Where to change | What to change |
|---|---|
| Token values (size, color, spacing) | `tokens.css` |
| Responsive font/spacing overrides | `tokens.css` media queries |
| New Tailwind utility class | `@theme` in `globals.css` |
| New component/layout class | `@layer utilities` in `layouts.css` |
| Usage | JSX className |
