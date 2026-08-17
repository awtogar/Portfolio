# Project Addition Guide

Follow this guide whenever adding a new project to the portfolio.

---

## 1. Directory Structure & File Placements

### A. Project Logo (SVG)
Place the vector SVG logo in:
```text
src/assets/images/project/<project-slug>.svg
```
*(Example: `src/assets/images/project/myproject.svg`)*

### B. Project Assets (Images / Videos / Reels)
Create a folder for the project under:
```text
public/assets/projects/<project-slug>/
```
> **Note:** There are no strict file naming rules for assets (use whatever names and formats you prefer: `.webp`, `.jpg`, `.png`, `.mp4`, etc.) as long as the exact paths are referenced in [`src/data/projects.js`](file:///Users/awtogar/DEVELOPMENT/Creative-Portfolios/v-3/src/data/projects.js).

---

## 2. Register Project Data

Open [`src/data/projects.js`](file:///Users/awtogar/DEVELOPMENT/Creative-Portfolios/v-3/src/data/projects.js) and complete the two steps below:

### Step 1: Import the Logo and Add to `logosBySlug`

```javascript
import myprojectLogo from '@/assets/images/project/myproject.svg';

const logosBySlug = {
  // ... existing logos
  myproject: myprojectLogo,
};
```

### Step 2: Add Project Object to `projects` Array

```javascript
{
  id: 7,                                    // Unique numeric ID
  slug: 'myproject',                        // Must match slug key in logosBySlug & folder name
  client: 'Project / Client Name',          // Display title
  type: 'Websites',                         // Category: 'Websites' | 'Branding' | 'Applications'
  year: '2026',                             // Year string
  description: 'A short description about what the project is and key highlights.',
  tags: ['UI/UX', 'Development'],          // Array of relevant skill/tech tags
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

## 3. Checklist for New Projects

- [ ] Placed SVG logo at `src/assets/images/project/<slug>.svg`
- [ ] Created directory `public/assets/projects/<slug>/` with images/videos
- [ ] Imported logo & mapped slug in `logosBySlug` in [`src/data/projects.js`](file:///Users/awtogar/DEVELOPMENT/Creative-Portfolios/v-3/src/data/projects.js)
- [ ] Added full project object into `projects` list
- [ ] Verified paths start with `/assets/projects/<slug>/...`
