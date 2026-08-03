# News List Design QA

**Source visual truth**

- Path: conversation inline screenshot (271 x 74 px; no filesystem path)
- State: two-row, light-theme news list with `YYYY-MM` dates

**Implementation evidence**

- Full page: `/private/tmp/lawliet-news-final.png` (1920 x 2063 px)
- Focused News region: `/private/tmp/lawliet-news-final-focus.png` (900 x 159 px)
- Normalized comparison crop: `/private/tmp/lawliet-news-final-271x74.png` (271 x 74 px)
- Browser viewport: 1920 x 934 CSS px
- Browser device pixel ratio: 2; captured files were normalized to CSS-pixel dimensions
- State: homepage, light theme, three current news entries

**Full-view comparison evidence**

- The list integrates with the existing homepage width and typography without a card, border, radius, shadow, or row separators.
- Long real publication titles wrap naturally; the shorter placeholder copy in the source does not. This is an expected content-length difference rather than layout drift.

**Focused region comparison evidence**

- The focused capture uses a 76 px date column, 12 px column gap, approximately 33 px single-line row rhythm, slate dates, and regular dark body text.
- A 271 x 74 px implementation crop was inspected against the source at equal pixel dimensions. Dates and text share the source alignment and visual hierarchy.

**Required fidelity surfaces**

- Fonts and typography: existing Inter/system stack retained; dates are 12.8 px/400 and body copy is 14.4 px/400 with normal style.
- Spacing and layout rhythm: borderless two-column layout, 76 px date track, 12 px gap, and 5.6 px vertical cell padding match the reference proportions.
- Colors and visual tokens: dates use the existing light-text token (`rgb(100, 116, 139)`); content uses the existing text token (`rgb(30, 41, 59)`); background is transparent.
- Image quality and asset fidelity: no images, icons, or generated assets are present in this component.
- Copy and content: current site news is preserved; dates now render as `YYYY-MM` as shown in the reference.

**Comparison history**

1. Initial capture found a P2 typography mismatch: Markdown-emphasized publication titles rendered in italics and body text used weight 300.
2. Fixed the News-scoped styles to render body copy and emphasis at normal style and weight 400.
3. Post-fix capture confirms normal body text, unchanged date hierarchy, and no card or divider styling.

**Browser checks**

- News heading link opened `/news/` and returned to the homepage successfully.
- Browser console errors: 0.
- No new interactive controls were introduced.

**Findings**

- No actionable P0, P1, or P2 differences remain.

**Open Questions**

- None.

**Implementation Checklist**

- [x] Format dates as `YYYY-MM`.
- [x] Remove the card border, background, radius, row dividers, and hover fill from News only.
- [x] Match the two-column spacing and regular text treatment.
- [x] Verify the homepage and dedicated News page build output.
- [x] Verify the rendered component and News navigation in the browser.

**Follow-up Polish**

- None required.

final result: passed
