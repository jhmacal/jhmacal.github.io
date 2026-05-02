# BUILD: Replace first article on the Writing page

You are updating jhmacal.com. The first article currently on the Writing page is at `/writing/global-mobility-2026/` and is displayed on the index as:

```
Analysis
The Global Mobility Inflection, 2026
Why the $100K H-1B surcharge, heightened enforcement, and rising LCA exposure
have created a structural window for in-house immigration counsel.
```

This article is being replaced with a new one.

## What to do

### 0. Do NOT touch these (preserve)

- `/writing/the-constraint/` — leave entirely untouched, including all files in that directory
- `/quant-study/` — leave entirely untouched (existing live presentation)
- Any other article on the Writing page that is not `/writing/global-mobility-2026/`

The only article being removed is `/writing/global-mobility-2026/`. Everything else on the Writing page stays.

### 1. Remove the old article

Delete the entire directory `/writing/global-mobility-2026/` from the repo. Do not delete or modify any other article directory.

### 2. Create the new article

Create `/writing/the-steepening/index.html` using the article content provided in `article.md` (this folder).

The article contains three placeholder markers:

- `[INDUSTRY_CHART]` — replace with the contents of `industry-chart.html`
- `[INTERACTIVE_COMPARISON_CHART]` — replace with the contents of `comparison-chart.html`
- `[STAT_CARDS]` — replace with the contents of `stat-cards.html`

Each visual file is self-contained: HTML markup + inline styling + (for the two charts) a script that loads Chart.js from cdnjs and instantiates the chart. Drop them in at the marked positions.

If multiple `<script src=".../Chart.js/...">` tags appear on the page after embedding, consolidate to one in the `<head>`.

### 3. Update the Writing index

Open `/writing/index.html`. Find the entry that links to `/writing/global-mobility-2026/`. Replace **only that entry** with a new entry linking to `/writing/the-steepening/`, using:

- Genre tag: **Analysis**
- Title: **AI is Built by International Talent**
- Subtitle: **A sector analysis across frontier AI**

Place this new entry in the same position the old one occupied (most-recent / first).

Do not modify any other entry on the index. The Constraint No One Owns and any other articles listed must remain exactly as they are, in their existing positions relative to each other.

### 4. Visual system

The article page must follow the existing site visual system:

- Background: `#0a1628`
- Text: `#f0e6d2`
- Accent: `#c9a961`
- Headers: Cormorant Garamond (italic for emphasis)
- Body: Inter
- No em dashes anywhere

The visual files already use this palette inline. No adjustment needed.

### 5. Page structure

The article page should match the structure of the existing `/writing/the-constraint/` page (or whichever Writing page you previously built as the canonical template). Same nav, same footer, same content width.

Title (h1): "AI is Built by International Talent"
Subtitle (h2 or styled p): "A sector analysis across frontier AI"
Byline: "By Julio Macedo"
Body: rendered from `article.md`
Footnotes: rendered with proper anchor links from the `[^1]` `[^2]` markers

### 6. Deploy

```
git add -A
git commit -m "feat: replace global-mobility-2026 article with the-steepening"
git push origin main
```

### 7. Confirm at the end

- `https://www.jhmacal.com/writing/the-steepening/` renders cleanly
- Industry chart renders and tooltips work on hover
- Comparison chart renders and the toggle button switches between Workers and Frontier share views
- Stat cards render in a 3-column responsive grid (collapses to 1 column on mobile)
- `https://www.jhmacal.com/writing/` shows the new article in the first position
- `https://www.jhmacal.com/writing/global-mobility-2026/` returns 404
- `https://www.jhmacal.com/writing/the-constraint/` still renders exactly as before (preserved)
- `https://www.jhmacal.com/quant-study/` still renders exactly as before (preserved)
- All footnote links work

## Files in this folder

- `article.md` — full article content with placeholder markers
- `industry-chart.html` — bar chart for FY2015 to Q1 FY2026 industry-wide AI workers (35,434 total)
- `comparison-chart.html` — interactive chart with Workers / Frontier share toggle
- `stat-cards.html` — three stat cards (58%, 49%, 3,560)
