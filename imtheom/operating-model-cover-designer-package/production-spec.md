# Production Spec

## Format

Primary size: US Letter, 8.5 x 11 inches.

Secondary size: A4 adaptation, 210 x 297 mm.

Orientation: portrait.

Color mode: RGB for web PDF export, CMYK-safe palette if the designer prepares print files.

Resolution for raster assets: 300 DPI minimum at final size.

## Required Deliverables

1. Editable source file.
2. Exported PDF cover.
3. PNG preview, 1600 px wide minimum.
4. Annex cover variants for Annex A, Annex B, and Annex C.
5. Font names and license notes.
6. Hex palette used.

## Safe Area

Keep all live text at least 0.45 inches from page edges.

Keep author block and disclaimer at least 0.35 inches above the bottom edge.

## Web Integration Notes

The website currently generates a print-only cover in CSS. The designer cover can replace that CSS cover later if delivered as:

1. A static image background plus live HTML text, or
2. A PDF cover page inserted before the generated document, or
3. A rebuilt HTML/CSS cover using the same layout.

Preferred implementation: live HTML/CSS cover so the company, sector, posture, and markets stay configurable.

## Current Brand Values

Navy: `#0a1628`

Ink: `#1c2834`

Cream: `#f4ede0`

Paper: `#fbfaf6`

Gold: `#c9a961`

Deep gold: `#a6822c`

Muted grey: `#65707b`

## Quality Bar

The cover should pass this test: if printed and placed on a conference table in front of a general counsel, chief risk officer, privacy lead, or AI governance committee, it should feel credible before anyone reads the first paragraph.
