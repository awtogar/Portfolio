# Project & Asset Guide

Follow this guide whenever adding a new project or preparing image/video media assets for the portfolio.

---

## 1. Quick Reference

| Asset | Component | Aspect Ratio | Recommended Size | Format | Max File Size | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Thumbnail | `AnimatedCard` | 4:3 / 3:2 | 1920 × 1440 px | WebP | < 300 KB | Account for top/bottom 10–15% parallax crop |
| Reels Video | `AnimatedCard` | 16:9 | 1920 × 1080 px | MP4 (H.264) | < 5 MB | Muted loop, fast-start enabled |
| Full-Width Image | `ProjectMedia` | 16:9 / 16:10 | 2560 × 1440 px | WebP | < 400 KB | Full container width on detail page |
| Half-Width Image | `ProjectMedia` | 4:5 / 3:4 | 1440 × 1800 px | WebP | < 300 KB | Vertical 2-column layout on detail page |
| Full-Width Video | `ProjectMedia` | 16:9 | 2560 × 1440 px | MP4 (H.264) | < 12 MB | Smart scroll visibility playing |
| Half-Width Video | `ProjectMedia` | 4:5 | 1440 × 1800 px | MP4 (H.264) | < 8 MB | Smart scroll visibility playing |
| Client Logo | `CardMeta` | 1:1 | Vector SVG | SVG | < 10 KB | Single-color SVG vector badge |

---

## 2. Directory Structure & File Placement

### 2.1 Project Logo (SVG)

Place the vector SVG logo in:

```text
src/assets/images/project/<project-slug>.svg
```

*(Example: `src/assets/images/project/myproject.svg`)*

### 2.2 Project Assets (Images / Videos / Reels)

Create a folder for the project under:

```text
public/assets/projects/<project-slug>/
```

### 2.3 Standard Asset Naming Conventions

| Asset | Filename |
| :--- | :--- |
| Card thumbnail | `thumbnail.webp` (or `thumbnail.jpg`) |
| Card hover reel | `reels.mp4` |
| Gallery images | Sequential numbering or descriptive names (e.g. `1.webp`, `2.webp`, `hero-detail.webp`) |
| Gallery videos | `{project-slug}-video.mp4` |
| Client logo | `logo.svg` (stored in `src/assets/images/project/{project-slug}.svg`) |

---

## 3. Image Specifications

### 3.1 Card Thumbnail (`thumbnail`)

- **Component:** `AnimatedCard` (`src/components/ui/AnimatedCard.jsx`)
- **Purpose:** Primary cover image for project cards on the Homepage (`SelectedWorks`) and Projects Grid page (`ProjectsPage`).
- **Aspect ratio:** 4:3 (or 3:2)
- **Artboard / recommended dimensions:** 1920 × 1440 px (or 1920 × 1280 px)
- **Minimum dimensions:** 1200 × 900 px
- **Safe area:** Center 70%
- **Format:** `.webp` (fallback: `.jpg`)
- **Target file size:** < 300 KB
- **Cropping / `object-fit` behavior:** `object-cover` inside a 120%-height wrapper with parallax vertical movement.
- **Notes:** Top and bottom ~10–15% will crop during parallax movement — keep subjects centered, and avoid placing important content near the top/bottom edges.

### 3.2 Full-Width Project Gallery Image

- **Component:** `ProjectMedia` (`src/components/sections/ProjectMedia.jsx`)
- **Purpose:** Showcase image in single-column slots (items 1 & 2 of every 4-asset block) on project detail pages.
- **Aspect ratio:** 16:9 (or 16:10)
- **Artboard / recommended dimensions:** 2560 × 1440 px (16:9) or 2560 × 1600 px (16:10)
- **Minimum dimensions:** 1920 × 1080 px
- **Format:** `.webp`, compressed at 80–85% quality
- **Target file size:** < 400 KB
- **Cropping / `object-fit` behavior:** `absolute inset-0 w-full h-full object-cover` inside a container that is `h-[200px]` on mobile and `h-[clamp(600px,57vw,1200px)]` on desktop.
- **Notes:** Keep important content toward the center — mobile uses `object-cover`.

### 3.3 Half-Width Project Gallery Image

- **Component:** `ProjectMedia` (`src/components/sections/ProjectMedia.jsx`)
- **Purpose:** Gallery images rendered in 2-column paired slots (items 3 & 4 of every 4-asset block) on project detail pages.
- **Aspect ratio:** 4:5, portrait/vertical (or 3:4)
- **Artboard / recommended dimensions:** 1440 × 1800 px (4:5) or 1440 × 1920 px (3:4)
- **Minimum dimensions:** 1000 × 1250 px
- **Format:** `.webp`
- **Target file size:** < 300 KB
- **Cropping / `object-fit` behavior:** `absolute inset-0 w-full h-full object-cover` inside a `w-1/2` container.
- **Notes:** Always use vertical assets — landscape artwork will be heavily cropped.

### 3.4 Client Logo Vector Asset (`logo`)

- **Component:** `CardMeta` (`src/components/ui/AnimatedCard.jsx`)
- **Purpose:** Client badge icon displayed in the upper metadata bar.
- **Aspect ratio:** 1:1 (square viewBox: `0 0 24 24` or `0 0 100 100`)
- **Format:** `.svg`
- **Target file size:** < 10 KB
- **Notes:** Use single-color paths (`fill="currentColor"`) compatible with light/dark surface themes.

---

## 4. Video Specifications

### 4.1 Card Reels Preview Video (`reels`)

- **Component:** `AnimatedCard` (`src/components/ui/AnimatedCard.jsx`)
- **Purpose:** Auto-playing hover preview clip overlaid on the card thumbnail when hovered.
- **Aspect ratio:** 16:9
- **Resolution:** 1920 × 1080 px (1080p) or 1280 × 720 px (720p)
- **Format / codec:** MP4 (H.264 / AAC)
- **Target file size:** < 3–5 MB
- **Duration / FPS:** 5–15 sec loop, 24–30 fps
- **Notes:** Fast-start enabled (MOOV atom at start), muted.

### 4.2 Full-Width Gallery Video

- **Component:** `ProjectVideoItem` (`src/components/sections/ProjectMedia.jsx`)
- **Purpose:** Video feature displayed in full-width gallery slots on project detail pages.
- **Aspect ratio:** 16:9
- **Resolution:** 2560 × 1440 px (1440p) or 1920 × 1080 px (1080p)
- **Format / codec:** MP4 (H.264 / AAC)
- **Target file size:** < 8–12 MB
- **FPS:** 24–30
- **Notes:** Uses an intersection observer for auto play/pause. Include a poster WebP image.

### 4.3 Half-Width Gallery Video

- **Component:** `ProjectVideoItem` (`src/components/sections/ProjectMedia.jsx`)
- **Purpose:** Vertical/square video clips placed in 2-column half-width gallery slots.
- **Aspect ratio:** 4:5, vertical (or 3:4)
- **Resolution:** 1440 × 1800 px (4:5)
- **Format / codec:** MP4 (H.264 / AAC)
- **Target file size:** < 5–8 MB
- **FPS:** 24–30

---

## 5. Asset Export & Preparation Workflow

### Image Export

1. Export at 2× standard display size for Retina/high-DPI clarity.
2. Convert PNG/JPG to **WebP** at 80–85% quality.
3. Export using the **sRGB** color space.
4. Compress before adding assets to the website.

### Video Export

1. Export as **MP4 (H.264 / AAC)**.
2. Enable Fast Start / web optimization.
3. Target 30 fps (or 24 fps).
4. Target bitrate: 3.5–5 Mbps for 1080p, 6–8 Mbps for 1440p.

### Photoshop Workflow Summary

| Asset | Artboard |
| :--- | ---: |
| AnimatedCard thumbnail | 1920 × 1440 px |
| Full-width media | 2560 × 1440 px |
| Half-width media | 1440 × 1800 px |

- Work at the recommended artboard size.
- Keep important visual elements inside the center/safe area.
- Export images as WebP.
- Convert the color profile to sRGB.
- Compress before adding assets to the website.

---

## 6. Registering New Project Data

Open [`src/data/projects.js`](file:///Users/awtogar/DEVELOPMENT/Creative-Portfolios/v-3/src/data/projects.js) and complete the two steps below.

### Step 1: Import Logo & Add to `logosBySlug`

```javascript
import myprojectLogo from '@/assets/images/project/myproject.svg';

const logosBySlug = {
  // ... existing logos
  myproject: myprojectLogo,
};
```

### Step 2: Add Project Object to the `projects` Array

```javascript
{
  id: 7,                                    // Unique numeric ID
  slug: 'myproject',                        // Must match slug key in logosBySlug & folder name
  client: 'Project / Client Name',          // Display title
  type: 'Websites',                         // Category: 'Websites' | 'Branding' | 'Applications'
  year: '2026',                             // Year string
  description: 'A short description about what the project is and key highlights.',
  tags: ['UI/UX', 'Development'],           // Array of relevant skill/tech tags
  date: { month: 'March', year: '2026' },   // Release/completion date
  selected: true,                           // true to feature on home/selected works, false otherwise
  thumbnail: '/assets/projects/myproject/thumbnail.webp', // or null
  reels: '/assets/projects/myproject/reels.mp4',          // or null
  assets: [
    { type: 'image', src: '/assets/projects/myproject/1.webp', alt: 'My Project Image 1' },
    { type: 'video', src: '/assets/projects/myproject/demo.mp4', alt: 'My Project Demo' },
  ],
},
```

---

## 7. Checklist for New Projects

- [ ] Prepared SVG logo at `src/assets/images/project/<slug>.svg` (`fill="currentColor"`)
- [ ] Created directory `public/assets/projects/<slug>/`
- [ ] Prepared thumbnail (1920×1440 WebP), reels (1080p MP4), and gallery media matching sizing specs
- [ ] Imported logo & mapped slug in `logosBySlug` in [`src/data/projects.js`](file:///Users/awtogar/DEVELOPMENT/Creative-Portfolios/v-3/src/data/projects.js)
- [ ] Added full project object into the `projects` array
- [ ] Verified all media asset paths start with `/assets/projects/<slug>/...`