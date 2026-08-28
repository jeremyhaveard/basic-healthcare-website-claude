# Patient Portal — Dashboard

## Source

- Figma file: "Basic Healthcare Design" (fileKey `MtFODCLvM5tffZ2txAvdVL`)
- Page: "Page 1" (`0:1`) → frame `multi-canvas` (`8:9`)
- Frame: `screen-dashboard` (node id `8:198`), 1440 × 954 px
- Figma URL: https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=8-198

## Overview

The authenticated patient portal home screen ("Pulse Portal") for a logged-in patient (sample data: "David Vance", ID #994-01B). It surfaces at-a-glance vitals, upcoming appointments, active prescriptions, and a personalized health tip, with quick actions to start a teleconsultation or request a refill. This is the first screen a returning patient lands on after sign-in.

## Components

- **Sidebar** (`8:199`) — fixed-width (280px) left navigation: brand mark ("Pulse Portal"), a 6-item nav list (Dashboard, Appointments, Prescriptions, Clinical Labs, Messages, Settings) each with a leading icon, and a patient identity card pinned to the bottom (avatar, name, patient ID). "Dashboard" is shown in its active state.
- **Dashboard header** (`8:237`) — greeting ("Welcome back, David" + subtext) on the left; two quick-action buttons on the right ("Start Teleconsultation", "Request Refill").
- **Vitals row** (`8:250`) — 3 equal-width vital cards: Resting Heart Rate, Blood Pressure, Current Weight. Each card has an icon, a status badge (Normal/Optimal/Stable), the metric label, a large value + unit, and a sparkline trend chart.
- **Upcoming Appointments card** (`8:302`) — header with "Schedule New" link, list of 2 appointment rows, each with provider avatar, name, specialty/visit-type line, date/time, and a "Details" button.
- **Active Prescriptions card** (`8:327`) — header with "View Full History" link, a 2-row table: drug name + dosage instructions, prescriber, status badge ("Active Refill Ready"), and an "Order Refill" action button per row.
- **Plan Advisory panel** (`8:354`) — dark teal callout card (right column) with a star icon, "Personalized Health Tip" heading, advisory paragraph, and a "View My Care Plan" link with trailing arrow.

## Layout & spacing

- Two-column app shell: sidebar fixed at 280px, main content area fills the remaining 1160px.
- Sidebar internal padding `28px`, nav items full-width with `12px/16px` padding and `8px` gap between items, `48px` gap between brand block and nav list.
- Main content padding `48px` from the top/left of the content area; content sections stacked with consistent vertical gaps (header at y=48, vitals row at y=153, appointments/prescriptions/advisory at y=402 relative to main content).
- Vitals row: 3 cards at 341px wide with implied ~18px gaps, each `217px` tall, internal padding `24px`.
- Console split: left column (appointments + prescriptions stacked, `720px` wide) and right column (plan advisory, `320px` wide) with a gap between.
- Card border radius `16px`; icon wrap squares `36px`/`40px` with `8–12px` radius; status/action badges `6–8px` radius.
- Card surface treatment matches the landing page pattern: white-to-`#f0fdfa` gradient, `#e2e8f0` border, two-layer soft shadow.

## Typography & color

Same two-typeface system as the landing page: **Outfit** (headings/values/numerals) and **Instrument Sans** (body/labels/buttons). No Figma variables are defined for this file — all values are raw hex read from layers.

| Use | Font | Weight | Size | Color |
|---|---|---|---|---|
| Sidebar brand | Outfit | Bold | 20px | `#0f172a` |
| Nav item (active) | Instrument Sans | SemiBold | 15px | `#0f766e`, on `#f0fdfa` pill background |
| Nav item (inactive) | Instrument Sans | Medium | 15px | `#475569`, transparent background |
| Patient name (sidebar card) | Outfit | Bold | 14px | `#0f172a` |
| Patient ID (sidebar card) | Instrument Sans | Regular | 12px | `#475569` |
| Page greeting H1 | Outfit (implied, consistent with other H1/H2 usage) | Bold | ~28px (35px box height) | `#0f172a` |
| Greeting subtext | Instrument Sans | Regular | ~14px | `#475569` |
| Vital label | Instrument Sans | Regular | 14px | `#475569` |
| Vital value | Outfit | Bold | 32px, unit suffix Medium 14px | `#0f172a` value / `#475569` unit |
| Status badge text (Normal/Optimal/Stable) | Instrument Sans | Bold | 11px | `#10b981` on `#ecfdf5` ⚠ contrast, see review |
| Card section heading (e.g. "Upcoming Appointments") | Outfit or Instrument Sans SemiBold (verify) | Bold | ~18px (23px box height) | `#0f172a` |
| Card header link (e.g. "Schedule New", "View Full History") | Instrument Sans | SemiBold | ~14px | `#0d9488` ⚠ contrast |
| Appointment provider name | Outfit | Bold | ~16px (19px box) | `#0f172a` |
| Appointment meta line | Instrument Sans | Regular | 14px | `#475569`, with an embedded teal-colored segment (e.g. "Telehealth Visit") |
| Prescription drug name | Outfit | Bold | 15px | `#0f172a` |
| Prescription instructions | Instrument Sans | Regular | 13px | `#475569` |
| Prescription status badge | Instrument Sans | SemiBold | 12px | `#10b981` on `#ecfdf5` ⚠ contrast |
| "Order Refill" button | Instrument Sans | SemiBold | 12px | white on `#0d9488` ⚠ contrast |
| Plan advisory heading | Outfit (white) | Bold | ~18px | white on `#0d9488`/dark teal card |
| Plan advisory body | Instrument Sans | Regular | ~14px | white ~85–90% opacity on dark teal |

Color palette matches the landing page (see `landing-page.md`): primary teal `#0d9488`, accessible teal `#0f766e`, teal tint `#f0fdfa`, ink `#0f172a`, body `#475569`, border `#e2e8f0`, success green `#10b981` on tint `#ecfdf5`.

Sparkline charts are rendered as raw colored line strokes (teal for heart rate, blue for blood pressure, red/rose for weight) with no axis labels, gridlines, or data point markers — treat as decorative trend indicators only, not a precise data visualization.

## Content/copy

- Sidebar: "Pulse Portal" · Dashboard · Appointments · Prescriptions · Clinical Labs · Messages · Settings · "David Vance" · "ID: #994-01B"
- Header: "Welcome back, David" / "All your synchronized patient files are secure and up to date." · "Start Teleconsultation" · "Request Refill"
- Vitals:
  - "Resting Heart Rate" — "68 bpm" — badge "Normal"
  - "Blood Pressure" — "118/76 mmHg" — badge "Optimal"
  - "Current Weight" — "172 lbs" — badge "Stable"
- Appointments card: "Upcoming Appointments" / "Schedule New"
  - "Dr. Amanda Ross" — "Lead Cardiologist • Telehealth Visit" — "Oct 24, 09:30 AM" — "Details"
  - "Pulse Labs Diagnostic" — "Routine Metabolic • Clinical Lab Bloodwork" — "Nov 02, 02:00 PM" — "Details"
- Prescriptions card: "Active Prescriptions" / "View Full History"
  - "Lisinopril 10mg" — "Take 1 tablet daily by mouth" — "Dr. Ross" — "Active Refill Ready" — "Order Refill"
  - "Atorvastatin 20mg" — "Take 1 tablet nightly by mouth" — "Dr. Ross" — "Active Refill Ready" — "Order Refill"
- Plan advisory: "Personalized Health Tip" — "Your heart rate variance (HRV) has shown solid improvements this week. Consider maintaining your mild aerobic routine for at least 25 minutes daily to compound these cardiovascular gains." — "View My Care Plan"

## States & interactions

- Sidebar shows only one state combination: "Dashboard" active, all others inactive. No hover/focus/pressed states for nav items, buttons, or badges are present anywhere in this frame.
- No loading, empty, or error state is shown for any card (e.g. what the Appointments card looks like with zero upcoming appointments is undefined).
- No confirmation/feedback state is shown for "Order Refill" or "Start Teleconsultation" (e.g. toast, modal, redirect) — these are click targets only in the static design.
- Status badges (Normal/Optimal/Stable/Active Refill Ready) appear to be a fixed enum-style component but only "positive" values are shown here — a "Flagged"/warning variant exists elsewhere in the file (see `medical-records.md`) and should be reused for out-of-range vitals, though no dashboard-specific example of a flagged vital is shown.

## Responsive behavior

Only a single 1440px desktop frame exists for this screen. No tablet/mobile layout, and no defined behavior for how the fixed 280px sidebar and 3-column vitals row collapse on smaller viewports, is present in the file.

## Accessibility notes

- **Status badge contrast:** `#10b981` green text on `#ecfdf5` background computes to roughly **2.4:1**, well below WCAG AA's 4.5:1 minimum for the 11–12px badge text used for "Normal," "Optimal," "Stable," and "Active Refill Ready." This pattern repeats across all three vital cards and both prescription rows — treat as a systemic issue, not a one-off. See the review doc for the consolidated recommendation.
- **"Order Refill" button:** white text on `#0d9488` at 12px SemiBold computes to ~3.7:1, below AA for normal text.
- **Health data sensitivity:** this screen surfaces PHI (heart rate, blood pressure, weight, medication names/dosages, prescribing physician) directly on the dashboard with no apparent masking, "who can see this" indicator, or session-timeout/lock affordance visible in the design. Given the HIPAA-compliance claims made elsewhere in the product copy, confirm with the product owner whether any privacy-preserving UI pattern (e.g. auto-lock, blur-on-inactivity) is expected — it is not shown here and should not be assumed.
- **Sparkline charts** are purely visual (colored line, no labels) — ensure the equivalent numeric trend data is available to screen reader users via text (e.g. an `aria-label` summarizing the trend), since the chart itself conveys no accessible information.
- **Icon-only nav items** — sidebar nav icons are paired with visible text labels (good), but confirm the active-state pill (background-color change) is not the *only* differentiator needed for programmatic state (i.e. use `aria-current="page"` in implementation, not rely on visual color alone).

## Assets

Use `mcp__figma__download_assets` against fileKey `MtFODCLvM5tffZ2txAvdVL`:
- Sidebar icons (18px): activity `8:429`/`8:432`, video `8:435`, clipboard `8:438`, file-text `8:441`, users `8:444`, settings `8:447`
- Header quick-action icons (16px): video `8:450`, calendar `8:453`
- Vital card icons (18px): activity `8:456` (heart rate), activity `8:459` (blood pressure — reused glyph, see review), users `8:462` (weight — reused glyph, see review)
- Sparkline chart graphics (raster/SVG, decorative): `8:262`, `8:279`, `8:295`
- Plan advisory star icon: `8:465`; arrow-right icon: `8:468`
- Avatar photos (raster): sidebar patient `8:232`, appointment provider avatars `8:309`, `8:319`

## Open questions

1. **Vital status thresholds** — the design shows only "good" statuses (Normal/Optimal/Stable). What triggers a warning/flagged state for a vital card, and what does it look like (color, copy)? A flagged variant exists for lab results (see `medical-records.md`) but isn't shown applied to a vital card.
2. **Reused icon glyphs** — Blood Pressure and Current Weight vital cards reuse the "activity" (heartbeat) and "users" icon glyphs respectively rather than more literal icons (e.g. a droplet/cuff icon for blood pressure, a scale icon for weight). Confirm whether this is intentional icon-system simplification or a placeholder that needs real icons before build.
3. **"Details" and "Order Refill" destinations** — not specified whether these open a modal, navigate to a detail page, or something else.
4. **Session/privacy handling** — no lock, timeout, or data-masking behavior is shown for this PHI-heavy screen; needs a decision before implementation given HIPAA claims made in the product's own marketing copy.
