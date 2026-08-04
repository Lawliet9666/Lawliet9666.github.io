# News Row Design QA

**Source visual truth**

- Path: conversation inline screenshot (1349 x 829 px; no filesystem path)
- State: dark-theme academic News list with compact rows, colored venue badges, and month/year dates
- User-directed deviation: place the date first and the conference/journal badge second, followed by the news content

**Implementation evidence**

- Desktop: Browser-rendered inline screenshot at 1349 x 829 CSS px (no filesystem path)
- Mobile: Browser-rendered inline screenshot at 390 x 844 CSS px (no filesystem path)
- Route/state: `http://127.0.0.1:4002/#news`, dark theme, News section aligned to the top of the viewport
- Density normalization: source and desktop implementation were compared at the same 1349 x 829 viewport; no device frame or browser chrome was included

**Full-view comparison evidence**

- The implementation preserves the homepage sidebar and section hierarchy while adopting the reference's compact, borderless News rows.
- Each row now reads left-to-right as date, colored venue badge, and announcement text, matching the user's requested information order.
- Venue colors follow the reference's restrained dark-theme palette rather than introducing saturated status colors.
- The implementation contains four real News entries rather than duplicating rows to match the reference's longer list.

**Focused region comparison evidence**

- The News region was inspected at the same desktop viewport as the reference.
- Date columns, badge widths, row rhythm, text wrapping, and alignment were readable without a separate crop.
- Mobile was additionally checked at 390 x 844: the three-column order remains intact, all text stays readable, and document width remains exactly 390 px.

**Required fidelity surfaces**

- Fonts and typography: the existing Inter/system stack is retained; dates use a compact 0.8 rem medium weight, badges use a 0.76 rem semibold label, and news text uses the site's 0.9 rem body scale.
- Spacing and layout rhythm: rows use compact vertical padding; date and venue columns have stable widths so content aligns consistently across rows.
- Colors and visual tokens: T-ASE is green, IROS orange, L4DC purple, and ICRA blue, using muted backgrounds and light foregrounds suited to the current dark theme.
- Image quality and asset fidelity: the reference region contains no image assets; no placeholders, custom SVGs, or generated assets were introduced.
- Copy and content: all existing dates and complete announcement text are preserved; only the date presentation changes to `Mon. YYYY`, and venue acronyms are added from each News item's front matter.

**Comparison history**

1. First implementation pass matched the requested date-first information order and reference badge treatment. No actionable P0, P1, or P2 mismatch was found.
2. Responsive verification confirmed no horizontal overflow and no News scrollbar at 390 x 844.

**Browser checks**

- Page identity: `Xinyi Wang` at `http://127.0.0.1:4002/#news`.
- DOM exposed four rows in the order `date -> venue -> content`.
- Venue labels present: T-ASE, IROS, L4DC, and ICRA.
- News navigation scrolled the section to 31.9 px from the mobile viewport top.
- Desktop and mobile News scrollbar: false.
- Mobile document width: 390 px at a 390 px viewport.
- Browser console errors/warnings: 0.

**Findings**

- No actionable P0, P1, or P2 differences remain.

**Open Questions**

- None.

**Implementation Checklist**

- [x] Put month/year first in every News row.
- [x] Add a colored conference/journal badge before the announcement.
- [x] Preserve complete News content and chronological ordering.
- [x] Keep the list borderless and free of an internal scrollbar.
- [x] Verify desktop and mobile rendering, News navigation, overflow, and console state.

**Follow-up Polish**

- Future News entries can opt into the same visual treatment by adding a `venue:` value to their front matter.

final result: passed
