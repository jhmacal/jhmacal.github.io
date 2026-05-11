# jhmacal.com Website Structure & Navigation Guide

## Quick Overview
**Current URL Structure:**
- `/` — Homepage
- `/writing/` — Articles landing page
- `/studies/` — Case Studies landing page
- `/ai/` — AI Portfolio landing page
- `/resume/` — Resume page
- `/contact/` — Contact page

**Current Navigation Menu Items:**
1. Articles (`/writing/`)
2. Case Studies (`/studies/`)
3. AI Portfolio (`/ai/`)
4. Resume (`/resume/`)

---

## Directory Structure

```
/Users/macal/Documents/1. Project 2026/webpage/repo/
├── index.html                          # Homepage
├── style.css                           # Global stylesheet (shared across all pages)
├── sitemap.xml                         # SEO sitemap
├── writing/
│   ├── index.html                      # Articles landing page
│   ├── legal-reasoning/
│   │   └── index.html
│   ├── the-constraint/
│   │   └── index.html
│   └── the-steepening/
│       ├── index.html
│       ├── stat-cards.html
│       ├── industry-chart.html
│       └── comparison-chart.html
├── studies/
│   └── index.html                      # Case Studies landing page
├── ai/
│   └── index.html                      # AI Portfolio landing page
├── resume/
│   └── index.html                      # Resume page
├── contact/
│   └── index.html                      # Contact/form page
├── quant-study/
│   └── index.html                      # Interactive quantitative finance presentation
├── legora/
│   └── index.html
├── legal-reasoning/
│   └── legal-assets-master-timeline.html
└── js/
    ├── nav.js                          # Navigation toggle functionality
    └── animations.js                   # Page animations
```

---

## Navigation Menu System

### Where Navigation is Defined

**Location 1: HTML Navigation Bar (appears on ALL pages)**
- **File:** Every `.html` file in the repo
- **Pattern:** Identical `<nav>` block at the top of the `<body>` tag

```html
<nav class="nav" id="nav">
  <div class="nav__inner">
    <a href="/" class="nav__monogram">Home</a>
    <ul class="nav__links">
      <li><a href="/writing/">Articles</a></li>
      <li><a href="/studies/">Case Studies</a></li>
      <li><a href="/ai/">AI Portfolio</a></li>
      <li><a href="/resume/">Resume</a></li>
    </ul>
    <button class="nav__toggle" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

**Files that contain this nav block:**
- `/index.html` (homepage)
- `/writing/index.html`
- `/studies/index.html`
- `/ai/index.html`
- `/resume/index.html`
- `/contact/index.html`

**Location 2: Sitemap XML (SEO)**
- **File:** `/sitemap.xml`
- **Purpose:** Tells search engines which pages exist and how often to crawl them

---

## All HTML Files & Their Purpose

### Main Pages (Part of Navigation)
| File | URL | Purpose |
|------|-----|---------|
| `/index.html` | `/` | Homepage with hero, credentials, differentiators, practice areas |
| `/writing/index.html` | `/writing/` | Articles landing page with writing list |
| `/studies/index.html` | `/studies/` | Case Studies landing with quant finance study card |
| `/ai/index.html` | `/ai/` | AI Portfolio with tool cards and project showcase |
| `/resume/index.html` | `/resume/` | Detailed resume/credentials page |
| `/contact/index.html` | `/contact/` | Contact form page with mailto handler |

### Article/Content Pages (Not in main nav, but linked from articles)
| File | URL | Purpose |
|------|-----|---------|
| `/writing/legal-reasoning/index.html` | `/writing/legal-reasoning/` | "Legal Reasoning as a Strategic Asset" article |
| `/writing/the-constraint/index.html` | `/writing/the-constraint/` | "When Immigration Breaks Hiring" article |
| `/writing/the-steepening/index.html` | `/writing/the-steepening/` | "AI is Built by International Talent" article |

### Interactive/Data Pages
| File | URL | Purpose |
|------|-----|---------|
| `/quant-study/index.html` | `/quant-study` | Interactive quantitative finance presentation (bar charts, maps, toggles) |
| `/writing/the-steepening/stat-cards.html` | N/A | Embedded component (stat cards) |
| `/writing/the-steepening/industry-chart.html` | N/A | Embedded component (industry chart) |
| `/writing/the-steepening/comparison-chart.html` | N/A | Embedded component (comparison chart) |

### Other Pages
| File | URL | Purpose |
|------|-----|---------|
| `/legora/index.html` | `/legora/` | Special presentation page |
| `/legal-reasoning/legal-assets-master-timeline.html` | N/A | Timeline component |

---

## Current Navigation Menu Items & Links

```
Home (/)
│
├─ Articles (/writing/)
├─ Case Studies (/studies/)
├─ AI Portfolio (/ai/)
└─ Resume (/resume/)
```

---

## How to Add a NEW Menu Section

### Step 1: Create the new directory and HTML file
```bash
mkdir -p /new-section/
touch /new-section/index.html
```

### Step 2: Create the HTML file with nav
Copy this template and fill in your content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Section | Julio Macedo</title>
  <meta name="description" content="Description here">
  <meta property="og:title" content="New Section | Julio Macedo">
  <meta property="og:description" content="Description here">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://www.jhmacal.com/new-section/">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/style.css">
</head>
<body>

  <!-- NAV: Copy this block exactly, update the "active" class -->
  <nav class="nav" id="nav">
    <div class="nav__inner">
      <a href="/" class="nav__monogram">Home</a>
      <ul class="nav__links">
        <li><a href="/writing/">Articles</a></li>
        <li><a href="/studies/">Case Studies</a></li>
        <li><a href="/ai/">AI Portfolio</a></li>
        <li><a href="/resume/">Resume</a></li>
        <li><a href="/new-section/" class="active">New Section</a></li>
      </ul>
      <button class="nav__toggle" aria-label="Toggle navigation">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <!-- Your content here -->
  <main class="main">
    <div class="container">
      <!-- Add your content -->
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <p class="footer__copy">Julio Macedo &copy; 2026 &middot; New York</p>
        <ul class="footer__links">
          <li><a href="https://www.linkedin.com/in/juliomacedoesq" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <script src="/js/nav.js"></script>
  <script src="/js/animations.js"></script>
</body>
</html>
```

### Step 3: Update ALL existing nav blocks
Edit the `<ul class="nav__links">` in these files:
1. `/index.html`
2. `/writing/index.html`
3. `/studies/index.html`
4. `/ai/index.html`
5. `/resume/index.html`
6. `/contact/index.html`

**Change this:**
```html
<li><a href="/resume/">Resume</a></li>
```

**To this:**
```html
<li><a href="/resume/">Resume</a></li>
<li><a href="/new-section/">New Section</a></li>
```

### Step 4: Update sitemap.xml
Add this block to `/sitemap.xml` before the closing `</urlset>` tag:

```xml
  <url>
    <loc>https://www.jhmacal.com/new-section/</loc>
    <lastmod>2026-05-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
```

### Step 5: Verify (manual checklist)
- [ ] New directory created: `/new-section/`
- [ ] New HTML file created: `/new-section/index.html`
- [ ] Nav block added to new HTML with `class="active"` on your new link
- [ ] Navigation updated in **6 existing files**: index.html, writing/index.html, studies/index.html, ai/index.html, resume/index.html, contact/index.html
- [ ] New URL added to `sitemap.xml`
- [ ] Tested locally to confirm nav appears on all pages
- [ ] Tested that clicking menu item highlights current page with `class="active"`

---

## Color System (from style.css)

Global CSS variables used across all pages:
```css
--gold: #c9a961
--navy: #0a1628
--cream: #f4ede0
```

Navigation styling:
- Active nav item: Green border/highlight (see `/js/nav.js`)
- Hover states: Gold accents

---

## Key Scripts

**`/js/nav.js`**
- Handles mobile menu toggle
- Manages active state highlighting
- Controls responsive nav behavior

**`/js/animations.js`**
- Fade-in animations on page load
- Scroll indicator behavior
- Stagger animations on elements with `fade-in` class

---

## How to Deploy Changes

```bash
cd /Users/macal/Documents/1. Project 2026/webpage/repo/
git add .
git commit -m "Add new navigation section: [Name]"
git push origin main
```

---

## Common Tasks

### To edit a menu item's label:
1. Find the text in `<a href="/path/">Text Here</a>`
2. Update all 6 files where it appears
3. Optionally update `sitemap.xml` if URL path changes

### To change the menu order:
1. Reorder the `<li>` items in `<ul class="nav__links">` 
2. Do this in all 6 files
3. Update `sitemap.xml` priority values if needed

### To remove a menu item:
1. Delete the entire `<li>` block from all 6 files
2. Remove the entry from `sitemap.xml`

### To link to an external page:
```html
<li><a href="https://external-site.com" target="_blank" rel="noopener">External Link</a></li>
```

---

## File Sizes & Load Order

All pages share:
- `style.css` — Global styles
- `/js/nav.js` — Navigation functionality
- `/js/animations.js` — Page animations
- Google Fonts: Cormorant Garamond (display) + Inter (body)

---

## Notes for Future Claude Conversations

When adding a new menu section, you'll need to:
1. **Create:** 1 new HTML file (`/new-section/index.html`)
2. **Edit:** 6 existing HTML files (all nav bars)
3. **Edit:** 1 XML file (`sitemap.xml`)

**Total edits needed:** 8 files

Always ensure `class="active"` is only on the current page's nav link.
