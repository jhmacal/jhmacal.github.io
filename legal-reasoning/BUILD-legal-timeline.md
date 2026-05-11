# BUILD: Legal assets master timeline component

## What this is
Interactive 4-node timeline for the "AI and Legal Immortality" article (Article 3, category: Artificial Intelligence). Cover overlay reads "Intangible legal assets · the receipts / click through to explore". Click dismisses cover and reveals the Burford panel by default. Four timeline nodes (Burford, Legal finance, Tech ownership, aosphere) swap the detail panel.

## Where it goes
Inside the article page, in the section that introduces the asset-class thesis. Replace any placeholder with the component block below. The article URL when deployed will be at `/writing/legal-immortality/` or similar — coordinate with the article file when ready.

## Files
- `legal-assets-master-timeline.html` — standalone preview wrapped in a full HTML document. Open in a browser to verify behavior.

## Embedding into the article page

The component portion is bracketed in the standalone file by:

```
<!-- COMPONENT START -->
... component code ...
<!-- COMPONENT END -->
```

Copy everything between those markers into the article HTML at the desired position. The component is self-contained: includes its own `<style>` block, its own dark navy card, the timeline SVG, the swappable detail container, the cover overlay, and the `<script>` block.

## Dependencies
- Chart.js 4.4.1 via CDN. The component pulls it from `https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js`. If the article page already loads Chart.js elsewhere, remove the duplicate `<script src="...">` tag from the component to avoid loading it twice.
- Cormorant Garamond and Inter fonts. Already used elsewhere on the site, no extra load needed.

## IDs and classes used (for conflict awareness)

The component uses these IDs at the page level:
- `#legal-cover` — the click-to-reveal overlay
- `#legal-detail` — the swappable panel container

These IDs only exist while a specific panel is active (rendered dynamically on click):
- `#ao-counter`, `.ao-stat` (aosphere panel)
- `#year-slider`, `#year-display`, `#pct-display`, `#slider-fill` (adoption panel)
- `#b-counter`, `#b-chart` (burford panel)
- `#ft-detail`, `#ft-connections`, `.ft-firm`, `.ft-tech`, `.ft-conn` (firmtech panel)

Timeline classes always present:
- `.tnode`, `.tdot`, `.active`

If the article page uses any of these names, rename in the component to avoid collision.

## Behavior
- Cover state: dark card, two lines of centered text, click anywhere to dismiss.
- After dismiss: timeline at top, Burford panel renders with counter animating $0.0B to $7.5B and chart drawing in over 2.2 seconds.
- Click any timeline node to swap to that panel. Active node enlarges and turns gold.
- All panels use horizontal layouts (counter and description on left, viz on right) to keep the card horizontal in proportion.

## Notes
- The component does NOT include an article-section wrapper, headline, or paragraph. The article supplies those.
- The cover overlay only fires once. After the user clicks it, no way to bring it back without a page refresh. This is intentional.
- All four panels animate fresh each time you click into them (counter resets, chart redraws). Chart.js instance is destroyed on swap to prevent memory leaks.

## Verification checklist
- Open standalone file in browser, confirm cover renders correctly
- Click cover, confirm Burford panel renders with counter and chart animation
- Click each of the other three timeline nodes, confirm swap works
- Hover firms and tech in the firmtech panel, confirm dim/highlight behavior
- Drag the adoption slider, confirm year and percentage update
- Hover chart points in burford panel, confirm tooltip shows milestone text
- Confirm no console errors

## When the article is ready
Hand the article HTML and this component to Claude Code with the instruction to embed the component at the appropriate section. Verify the component renders within the article's column width (the SVG and grid layouts expect roughly 600-700px container width).
