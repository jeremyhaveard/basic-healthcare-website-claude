# Patient Portal — My Health Records

## Source

- Figma file: "Basic Healthcare Design" (fileKey `MtFODCLvM5tffZ2txAvdVL`)
- Page: "Page 1" (`0:1`)
- Frame: `screen-medical-records` (node id `24:190`), 1440 × 1196 px
- Figma URL: https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=24-190

## Overview

The "Clinical Labs" section of the patient portal (sidebar nav item "Clinical Labs" is active, page title is "My Health Records"), where a patient reviews diagnostic test results, visit history, and downloads clinician-prepared PDF summaries. Reuses the same sidebar/app-shell as the dashboard.

## Components

- **Sidebar** — identical to the dashboard sidebar (`8:199`), same nav items, same patient identity card; "Clinical Labs" shown active instead of "Dashboard".
- **Page header** (`24:224`) — title "My Health Records" + subtext, with two actions on the right: "Upload Record" (secondary, with upload icon) and "Request Referral" (primary).
- **Tabs** (`24:234`) — 4-item tab bar: Lab Results (active, teal underline), Visit History, Prescriptions, Immunizations. Only the Lab Results tab's content is shown.
- **Recent Diagnostic Tests card** (`24:245`) — header with "Export All (PDF)" action; a 5-row results table with columns Date, Test Type, Observed Value, Status (badge), Report (download icon).
- **Recent Visit Timeline card** (`24:303`) — vertical timeline with 2 entries, each showing a marker dot/connector line, provider name + specialty, visit date, and a notes plate with the visit summary text.
- **Downloadable Reports sidebar panel** (`24:329`) — 2 `report-card`s, each with a PDF icon, file size, report title, description, and a "Download PDF Report" link with a download icon.

## Layout & spacing

- Same app-shell pattern as dashboard: 280px sidebar + fluid main content, `48px` outer content padding.
- Page header at content top (`y=48`), tabs directly below (`y=157`) separated by a bottom border, main content grid starts at `y=231`.
- Content is a 2-column split: left column `720px` wide (diagnostic tests card stacked above visit timeline card, `24px` gap), right column `320px` wide (downloadable reports).
- Table rows: `16px` padding, bottom border divider between rows; column widths roughly Date 120px, Test Type flexible, Observed Value 160px, Status 140px, Report 100px (right-aligned).
- Timeline items: `132px` row height, left marker column `16px` wide (dot + connecting line), content offset `32px` from marker.
- Report cards: `186px` tall, `20px` internal padding, stacked with no visible gap shown between the two (verify against screenshot — appears to be a soft divider/adjacent cards).
- Card radius `16px`, matching other portal cards; status badges `6px` radius.

## Typography & color

Same two-typeface system (Outfit for headings/values, Instrument Sans for body/labels) and the same raw-hex palette as the dashboard and landing page — no Figma variables defined in this file.

| Use | Font | Weight | Size | Color |
|---|---|---|---|---|
| Page title "My Health Records" | Outfit (implied) | Bold | ~28px | `#0f172a` |
| Page subtext | Instrument Sans | Regular | 14px | `#475569` |
| Active tab label | Instrument Sans | SemiBold | 15px | `#0d9488` ⚠ contrast, with `2px` solid `#0d9488` bottom border |
| Inactive tab label | Instrument Sans | Medium | 15px | `#475569` |
| Table column headers | Instrument Sans (implied) | uppercase, small | ~11–12px | muted (verify exact color; consistent with `#94a3b8`/`#64748b` pattern elsewhere) |
| Test type (row) | Outfit | Bold | 15px | `#0f172a` |
| Date / observed value | Instrument Sans | Regular/SemiBold | 14px | `#475569` / `#0f172a` |
| Status badge — "Optimal" | Instrument Sans | Bold | 11px | `#10b981` on `#ecfdf5` ⚠ contrast |
| Status badge — "Flagged High" | Instrument Sans | Bold | 11px | `#f43f5e` on `#fff1f2` ⚠ contrast |
| Timeline provider name | Outfit | Bold | ~16px | `#0f172a` |
| Timeline specialty | Instrument Sans | Regular | ~13px | `#475569` |
| Timeline notes plate | Instrument Sans | Regular | ~14px | `#475569`, on a light plate background |
| Report card title | Instrument Sans/Outfit (verify) | SemiBold/Bold | ~16px | `#0f172a` |
| Report card description | Instrument Sans | Regular | ~13px | `#475569` |
| "Download PDF Report" link | Instrument Sans | SemiBold | ~13px | `#0d9488` ⚠ contrast |

Status badge colors are the same success-green (`#10b981`/`#ecfdf5`) and a **new rose/red pairing** (`#f43f5e` text on `#fff1f2` background) for the "Flagged High" result — establishing (at minimum) a 2-value status system: optimal/normal (green) vs. flagged/abnormal (red). No "pending"/"in progress" or neutral status variant is shown.

## Content/copy

- Page: "My Health Records" / "Access your diagnostics transcripts, laboratory syncs, clinical files and visit history." · "Upload Record" · "Request Referral"
- Tabs: Lab Results · Visit History · Prescriptions · Immunizations
- Diagnostic tests card: "Recent Diagnostic Tests" / "Export All (PDF)"
  - Columns: DATE · TEST TYPE · OBSERVED VALUE · STATUS · REPORT
  - Oct 18, 2026 — Lipid Panel (Cholesterol) — Total: 180 mg/dL — Optimal
  - Oct 18, 2026 — Hemoglobin A1c (HbA1c) — 5.4% of total Hb — Optimal
  - Sep 04, 2026 — Basic Metabolic Panel — Glucose: 108 mg/dL — Flagged High
  - Sep 04, 2026 — Thyroid Stimulating Hormone (TSH) — 2.1 uIU/mL — Optimal
  - Aug 12, 2026 — Complete Blood Count (CBC) — WBC: 6.2 x10^3/uL — Optimal
- Visit timeline: "Recent Visit Timeline"
  - Dr. Amanda Ross — Cardiology Specialist — October 12, 2026 — "Follow-up visit for mild hypertension check. Advised lower sodium intake, maintaining light daily cardio, and consistent resting heart rate mapping via connected wearable health monitor."
  - Dr. Samuel Vance — Primary Health Practitioner — August 24, 2026 — "Annual wellness checkup and preventative biometric screening. Recommended dynamic blood glucose review alongside standard metabolic monitoring protocols."
- Reports sidebar: "Downloadable Reports"
  - "Q3 Comprehensive Health Index" (4.2 MB) — "Aggregated health evaluation and lab metadata review." — "Download PDF Report"
  - "Cardio Health Advisory Summary" (2.8 MB) — "Detailed heart metric log compiled from active wearables." — "Download PDF Report"

## States & interactions

- Only the "Lab Results" tab's content is designed; **Visit History, Prescriptions, and Immunizations tabs have no corresponding content shown** — their layouts are undefined.
- One "Flagged High" result exists among five rows, giving a single example of the abnormal-status treatment; no "pending lab" or "cancelled test" state is shown.
- No hover/focus/pressed state for tabs, table rows, download icons, or buttons.
- No empty state (e.g. patient with zero lab results or zero visit history) is designed.
- Download and export actions ("Report" column icon, "Export All (PDF)", "Download PDF Report") have no confirmation, progress, or error state shown.

## Responsive behavior

Single 1440px desktop frame only; no tablet/mobile layout. The 5-column results table in particular will need an explicit responsive/stacking strategy for narrow viewports that isn't informed by this design.

## Accessibility notes

- **Status badge contrast:** both badge variants fail WCAG AA at their current sizes/colors — "Optimal" (`#10b981` on `#ecfdf5`) computes to ~2.4:1, and "Flagged High" (`#f43f5e` on `#fff1f2`) computes to ~3.4:1, both below the 4.5:1 minimum for the 11px bold text used. Because "Flagged High" specifically communicates a clinically meaningful abnormal result, this is a higher-stakes instance of the contrast issue than elsewhere in the file.
- **Status conveyed by more than color:** to its credit, the design pairs each status with distinct text ("Optimal" vs. "Flagged High"), so meaning isn't conveyed by color alone — good practice to preserve in implementation (don't reduce this to a color swatch without a text label).
- **Download icon-only affordances:** the "Report" column and "Download PDF Report" link both rely on a bare download icon; ensure implementation gives each an accessible name (e.g. "Download report for Lipid Panel (Cholesterol), Oct 18 2026") rather than a generic "Download".
- **Table semantics:** ensure the results table is implemented as a real `<table>` (or ARIA grid) with associated headers (`DATE`, `TEST TYPE`, etc.) programmatically tied to cells — the design shows a visual table only.
- **Sensitive clinical data:** this screen displays diagnostic results (including an abnormal/flagged result) with no access-gating or masking shown in the static design; treat this the same as the dashboard's PHI note — confirm expected privacy/session behavior before build.

## Assets

Use `mcp__figma__download_assets` against fileKey `MtFODCLvM5tffZ2txAvdVL`:
- Page header icons: upload `24:542`
- Table action icons: file-text (export) `24:545`, download `24:548`/`24:551`/`24:554`/`24:557`/`24:560`
- Report card icons: file-text (PDF) `24:563`/`24:569`, download `24:566`/`24:572`
- Timeline marker graphics: ellipse/line nodes `24:308`, `24:320` (decorative, likely fine as CSS rather than exported assets)

## Open questions

1. **Missing tab content** — Visit History, Prescriptions, and Immunizations tabs are present in the nav but have no designed content. These need separate design work before they can be built, or should be explicitly scoped out of this iteration.
2. **Status enum** — only "Optimal" and "Flagged High" are shown. Is there a "Flagged Low," "Pending," or "Inconclusive" state needed for a real lab-results system? Not specified.
3. **"Request Referral" and "Upload Record" flows** — no destination/modal is designed for either action.
4. **Report card divider/spacing** — the two report cards in the sidebar appear directly adjacent in the metadata coordinates; confirm from the screenshot whether a visible gap or divider is intended between them before implementing.
