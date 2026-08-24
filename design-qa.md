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

---

# Contact Card Design QA

**Source visual truth**

- Path: `/var/folders/rz/09gg5km15qx9w11_2v_1m1wc0000gn/T/codex-clipboard-d23be6e0-4196-41d1-81b5-16c8b044a6ae.png`
- Source pixels: 928 x 514 at 1x density.
- State: light contact-information card with a white background, thin neutral border, rounded corners, generous padding, stacked details, and a prominent underlined email.
- User-directed content order: name, role, office, phone, and email.

**Implementation evidence**

- Desktop: `/Users/lawliet/Documents/Codex/2026-08-24/zheg/outputs/homepage-contact-section-desktop.jpg`, 1280 x 720 CSS px at 1x density.
- Focused card: `/Users/lawliet/Documents/Codex/2026-08-24/zheg/outputs/homepage-contact-card-focused.jpg`, 842 x 262 px at 1x density.
- Mobile: `/Users/lawliet/Documents/Codex/2026-08-24/zheg/outputs/homepage-contact-section-mobile.jpg`, 390 x 844 CSS px at 1x density.
- Dark theme: `/Users/lawliet/Documents/Codex/2026-08-24/zheg/outputs/homepage-contact-section-dark.jpg`, 1280 x 720 CSS px at 1x density.
- Combined comparison: `/Users/lawliet/Documents/Codex/2026-08-24/zheg/outputs/contact-card-design-qa-comparison.jpg`.
- Route/state: `http://127.0.0.1:8767/#contact`, Contact section aligned in the viewport after activating the sidebar link.

**Full-view comparison evidence**

- The reference defines only the card, so the existing homepage composition remains the product constraint.
- The implementation preserves the left sidebar, section hierarchy, light/dark tokens, and current Inter typography while introducing the requested card at the bottom of the homepage.
- The sidebar now shows Assistant Professor and the Oakland email, matching the card.

**Focused region comparison evidence**

- The reference and focused implementation were placed in one side-by-side comparison image.
- Both use a white card surface, thin pale-gray border, rounded corners, dark text, and an underlined email.
- The implementation is intentionally more compact because it contains five short lines rather than the reference's longer postal-address block.
- The email remains prominent but follows the user-provided order at the bottom instead of the reference's top position.

**Required fidelity surfaces**

- Fonts and typography: the existing Inter/system stack is retained; the name uses a strong display weight, the role uses muted medium text, and contact details use readable body sizing.
- Spacing and layout rhythm: desktop uses 2.1 rem by 2.35 rem card padding with a clear identity/details split; mobile reduces padding while preserving the hierarchy.
- Colors and visual tokens: the card uses the site's background, divider, text, and burgundy accent tokens; dark mode resolves to a near-black card with light text and a subtle border.
- Image quality and asset fidelity: the reference contains no image assets; no placeholders, custom drawings, or generated assets were needed.
- Copy and content: name, role, office, phone, and email match the user's supplied text exactly.

**Comparison history**

1. Initial implementation matched the card treatment but left the sidebar role as Robotics Researcher, creating a visible content inconsistency.
2. The sidebar role was updated to Assistant Professor, the site was rebuilt, and desktop, dark, and mobile captures confirmed consistent title and email content.

**Browser checks**

- Page identity: `Xinyi Wang` at `http://127.0.0.1:8767/#contact`.
- Contact activation changed the hash to `#contact` and brought the section into view.
- Phone target: `tel:12483702686`.
- Email target: encoded `mailto:xinyiwang@oakland.edu`.
- Mobile card width: 355 px in a 390 px viewport; horizontal overflow: false.
- Browser console errors/warnings: 0.

**Findings**

- No actionable P0, P1, or P2 differences remain.

**Open Questions**

- None.

**Implementation Checklist**

- [x] Keep Contact in the left sidebar.
- [x] Link Contact to the homepage card.
- [x] Add the supplied name, title, office, phone, and email.
- [x] Update the sidebar email and role for consistency.
- [x] Verify light, dark, desktop, and mobile rendering.

**Follow-up Polish**

- The card can be expanded later with a full mailing address if desired.

final result: passed
