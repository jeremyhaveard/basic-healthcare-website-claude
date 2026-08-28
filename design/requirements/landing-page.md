# Landing Page (Pulse Health Marketing Site)

## Source

- Figma file: "Basic Healthcare Design" (fileKey `MtFODCLvM5tffZ2txAvdVL`)
- Page: "Page 1" (`0:1`) → frame `multi-canvas` (`8:9`)
- Frame: `screen-landing-page` (node id `8:10`), 1440 × 5443 px, single desktop-width artboard
- Figma URL: https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=8-10

## Overview

The marketing homepage for "Pulse Health," a patient-facing healthcare platform offering telehealth, prescription management, lab results, and care-team messaging. The page is a long-scroll, single-column marketing layout: header/nav, hero, trust bar, services grid, "how it works" steps, testimonials, benefits, FAQ, stats, newsletter signup, and footer. Its purpose is to build trust with prospective patients and drive two conversions: "Book Appointment" and "Join Pulse" (account creation).

## Components

- **Header** (`8:11`) — sticky-looking top bar (not confirmed sticky in design): logo mark + "Pulse Health" wordmark, horizontal nav links (Home, Services, How It Works, Testimonials, Contact), "Sign In" text link, and a "Join Pulse" primary button.
- **Hero section** (`8:27`) — two-column: left card contains an eyebrow badge, H1 + supporting paragraph, two CTA buttons ("Book Appointment" with trailing arrow icon, "Explore Services"), and a trust-indicator row (3 overlapping avatar circles + "4.9/5 Patients Rating" + review count). Right side is a single large rounded hero photo of a clinic interior.
- **Trust bar** (`8:51`) — "Featured & Trusted In" label plus 5 insurer/partner wordmarks (Aetna, BlueCross, UnitedHealthcare, Cigna, Humana) rendered as styled text, not logo images.
- **Services section** (`8:58`) — section header (eyebrow "What We Offer" + H2) above a 4-up grid of `service-card`s: Telehealth Visits, Prescription Sync, Lab Results Hub, Care Team Direct. Each card = icon in a tinted square, title, description, "Learn more" link with chevron.
- **How it works** (`8:107`) — section header (eyebrow "Simplified Journey" + H2) above 3 `step-card`s, each with a large numeral (01/02/03), title, and description.
- **Testimonials** (`8:127`) — section header (eyebrow "Patient Voices" + H2) above 2 `review-card`s, each with a 5-star row, italic quote, divider line, and reviewer (avatar, name, role).
- **Why Choose Pulse Health** (`24:603`) — section header above 3 `benefit-card`s: 24/7 Access, HIPAA Compliant, Insurance Integration — same visual pattern as service cards (icon, title, description, "Learn more").
- **FAQ** (`24:647`) — section header ("Frequently Asked Questions") above a 5-item accordion list (`faq-item`). Only the first item is shown expanded with an answer; items 2–5 show only the question row and a chevron-down icon.
- **By the numbers** (`24:683`) — section header ("By the Numbers") above a 4-up stat row: 10,000+ / 500+ / 98% / 4.9, each with a supporting caption.
- **Newsletter strip** (`24:700`) — single-row band: copy on the left, email input + "Subscribe" button on the right.
- **Footer** (`8:170`) — dark band with brand block (logo + wordmark + tagline), two link columns ("Solutions": Telehealth, Clinical Labs, Pharmacy, Enterprise Options; "Company": About S&A, Clinicians Team, Security Compliance, Legal Notice), a divider, and a bottom row with copyright + tagline.

## Layout & spacing

- Overall canvas width 1440px; content sections use consistent horizontal padding of **80px** on both sides (`px-[80px]`), except the hero card and cards which use internal padding of 24–40px.
- Section vertical rhythm: most sections use ~100px top padding before the section header and ~193px before the content grid starts (header height 133px + gap), e.g. services section header at y=100, grid at y=293 (relative to section).
- Header bar: 82px tall, `justify-between` flex, `px-[80px] py-[20px]`.
- Hero section: 723px tall, `flex gap-[60px] p-[80px]`, left content card is flexible width with `rounded-[24px]` and internal `p-[24px] gap-[28px]`; right media block fixed `560×480px`, `rounded-[24px]`.
- Card grids (services, benefits, testimonials, stats) use fixed-width cards in a row with **24–32px gaps** between cards (e.g. services cards are 302px wide with 24px gaps in a 1280px-wide row of 4).
- Card internal padding: service/benefit cards `p-[32px]`, testimonial/step cards `p-[40px]`, FAQ items `p-[24px]`.
- Border radius scale in use: 8px (buttons, badges), 12–16px (icon containers, benefit/service cards), 16–20px (step/review/FAQ cards), 20–24px (hero card, hero media, stat cards).
- Footer: `pt-[80px] pb-[40px] px-[80px]`, `gap-[60px]` between brand block and bottom row, with a divider line between.
- No breakpoint variants are present in the file — see "Responsive behavior" below.

## Typography & color

No Figma variables/styles were defined for this file (`get_variable_defs` returned an empty set) — all values below are raw values read directly off layers. **There is no existing token system in this codebase yet** (repo currently has no application source, only the agent pipeline scaffolding), so these values should become the first source of design tokens rather than being reconciled against something pre-existing.

Font families: **Outfit** (headings, numerals, stat figures — weights Bold/ExtraBold/Medium) and **Instrument Sans** (body copy, nav, buttons, labels — weights Regular/Medium/SemiBold/Bold/Italic). Both are Google Fonts; neither is currently loaded in this codebase.

Type scale observed:
| Use | Font | Weight | Size | Line-height | Color |
|---|---|---|---|---|---|
| Logo wordmark | Outfit | Bold | 22px | normal | `#0f172a` |
| Nav links (inactive) | Instrument Sans | Medium | 15px | normal | `#475569` |
| Nav link (active — "Home") | Instrument Sans | SemiBold | 15px | normal | `#0d9488` ⚠ contrast, see review |
| Button label (primary/secondary) | Instrument Sans | SemiBold | 15px | normal | white / `#0f172a` |
| H1 (hero) | Outfit | Bold | 56px | 1.15 | `#0f172a`, with accent span in `#0d9488` |
| Hero body paragraph | Instrument Sans | Regular | 18px | 1.6 | `#475569` |
| Eyebrow/overline (section headers, badges) | Instrument Sans | Bold/SemiBold | 13–14px, uppercase | normal | `#0d9488` / `#0f766e` |
| H2 (section headers) | Outfit | Bold | 40px, centered, max-width 640px | normal | `#0f172a` |
| Card title | Outfit | Bold | 20px | normal | `#0f172a` |
| Card body copy | Instrument Sans | Regular | 15px | 1.5 | `#475569` |
| "Learn more" link | Instrument Sans | SemiBold | 14px | normal | `#0d9488` ⚠ contrast |
| Testimonial quote | Instrument Sans | Italic | 16px | 1.6 | `#475569` |
| Reviewer name | Outfit | Bold | 16px | normal | `#0f172a` |
| Reviewer role | Instrument Sans | Regular | 13px | normal | `#94a3b8` |
| Step numeral (01/02/03) | Outfit | ExtraBold | 48px | normal | `#b2dfdb` |
| Stat figure | Outfit | ExtraBold | 40px | normal | `#0f172a` |
| Trust bar partner names | Outfit | ExtraBold | 20px, 70% opacity | normal | `#94a3b8` |
| Footer heading | Outfit | Bold | 14px, uppercase | normal | white |
| Footer link/body | Instrument Sans | Regular | 14px | 1.5 (tagline) | `#94a3b8` |

Color palette (raw hex, no token names defined in Figma):
- Primary teal: `#0d9488` (logo mark, primary buttons/backgrounds, badge/eyebrow text) — **note:** used for both backgrounds (fine) and standalone text-on-white (fails contrast, see review).
- Darker teal (accessible): `#0f766e` (used inconsistently for the same "active/emphasis" role as `#0d9488`).
- Teal tint: `#f0fdfa` (icon container backgrounds, badges, gradient card end-color).
- Accent rose/red: `#f43f5e` (primary CTA button in header/hero, "Flagged High" badge text).
- Ink/heading text: `#0f172a`.
- Body text: `#475569`.
- Muted/tertiary text: `#94a3b8`, `#64748b`.
- Borders: `#e2e8f0`.
- Section alt background: `#f8fafc`.
- Success green: `#10b981` on `#ecfdf5` (status badges — also used on portal screens).
- White: `#ffffff`.
- Footer/dark surfaces: `#0f172a`.

Card surfaces throughout the page use a subtle diagonal gradient from `white` to `#f0fdfa` (`bg-gradient-to-r ... from-white ... to-[#f0fdfa]`) plus a two-layer drop shadow combining a teal-tinted shadow and a neutral shadow (e.g. `0px_2px_10px_0px_rgba(13,148,136,0.04),0px_10px_24px_0px_rgba(0,0,0,0.03)`).

## Content/copy

All copy verbatim, in page order:

**Header:** `Pulse Health` · Home · Services · How It Works · Testimonials · Contact · Sign In · Join Pulse

**Hero:**
- Badge: "✨ Trusted by 10,000+ Active Patients"
- H1: "Clinical excellence meets everyday accessibility" (with "everyday accessibility" in teal)
- Body: "Pulse Health simplifies your medical journey. Access top-tier doctors, coordinate prescriptions, review real-time lab results, and stream telemedicine consultations from the comfort of home."
- Buttons: "Book Appointment", "Explore Services"
- Trust indicator: "4.9/5 Patients Rating" / "From over 2,500 verified reviews"

**Trust bar:** "Featured & Trusted In" · Aetna · BlueCross · UnitedHealthcare · Cigna · Humana

**Services section:**
- Eyebrow: "What We Offer"
- H2: "Comprehensive medical services, engineered around you"
- Card 1: "Telehealth Visits" — "Connect instantly with certified physicians via secure, high-definition video consultations."
- Card 2: "Prescription Sync" — "Manage and refill your medication stack directly within our seamless digital pharmacy integrations."
- Card 3: "Lab Results Hub" — "Access clean, expert-interpreted lab diagnostics directly in your portal in under 48 hours."
- Card 4: "Care Team Direct" — "Direct secure messaging access to your personalized healthcare professionals."
- Each card footer: "Learn more"

**How it works:**
- Eyebrow: "Simplified Journey"
- H2: "Your health coordinated in three steps"
- 01 "Create Your Profile" — "Build your HIPAA-compliant digital secure health record in minutes."
- 02 "Book Instant Visit" — "Match immediately with a specialized practitioner based on your clinical needs."
- 03 "Thrive In Good Health" — "Coordinate ongoing wellness plans, prescriptions, and followups smoothly."

**Testimonials:**
- Eyebrow: "Patient Voices"
- H2: "Loved by medical providers and patients alike"
- Review 1: "\"The dashboard design and speed are exemplary. Coordinating complex prescriptions and lab releases directly to patients has cut our clinic admin overhead in half.\"" — Dr. Aris Thorne, Critical Care Specialist
- Review 2: "\"Pulse Telehealth literally saved my family hours in the waiting room. Virtual triage was swift, prescriptions were synced instantly, and my doctor felt deeply personal.\"" — Julianna Mercer, Active Patient

**Why Choose Pulse Health:**
- Eyebrow: "Why Choose Pulse Health"
- H2: "Built for modern care, trusted by patients and providers"
- "24/7 Access" — "Book visits, message your care team, and review lab results anytime from your secure portal."
- "HIPAA Compliant" — "Your health data is protected with enterprise-grade encryption and strict access controls."
- "Insurance Integration" — "We support major carriers and help you understand coverage and billing in one place."

**FAQ:**
- Eyebrow: "Frequently Asked Questions"
- H2: "Answers to common questions about Pulse Health"
- Q1 (expanded): "How do I book a telehealth visit?" — "Search for a provider, select a time, and confirm your appointment. You'll receive a secure link to join your visit from your portal."
- Q2 (collapsed): "Is Pulse Health HIPAA compliant?"
- Q3 (collapsed): "Can I message my care team directly?"
- Q4 (collapsed): "How do I request a prescription refill?"
- Q5 (collapsed): "Do you accept my insurance?"

**By the numbers:**
- Eyebrow: "By the Numbers"
- H2: "A platform built for scale and trust"
- "10,000+" — "Active patients using Pulse Health today"
- "500+" — "Board-certified providers in our network"
- "98%" — "Patient satisfaction with visit experience"
- "4.9" — "Average rating from verified patient reviews"

**Newsletter:** "Get updates on new services and provider availability" / "Join our newsletter for product announcements, care tips, and clinic news." · placeholder "you@example.com" · button "Subscribe"

**Footer:**
- Brand tagline: "Advancing accessible clinical care through thoughtful design and secure modern healthcare infrastructure."
- "SOLUTIONS": Telehealth, Clinical Labs, Pharmacy, Enterprise Options
- "COMPANY": About S&A, Clinicians Team, Security Compliance, Legal Notice
- Bottom row: "© 2026 Pulse Health System. HIPAA Compliant." / "Designed with Clinical Care Excellence"

## States & interactions

- **FAQ accordion:** only the first item's expanded (answer-visible) state is shown; items 2–5 are shown collapsed. No expanded state for items 2–5, and no explicit collapsed state for item 1, is present in the file — the toggle interaction and animation must be inferred/implemented, not copied from a second design state.
- **Nav "Home" link** is shown in the active/current-page color (`#0d9488`); no hover/focus states for any link or button are shown anywhere in the file.
- **Buttons** (primary rose, primary teal, secondary white/bordered) are shown only in their default/resting state — no hover, active, focus-visible, disabled, or loading states are present in the design.
- **Newsletter email input** shows placeholder-styled text ("you@example.com") only — no filled, error, or success state is shown.
- No empty states, loading states, or error states appear anywhere on this page.

## Responsive behavior

Only a single 1440px-wide desktop frame exists in the file for this page. No tablet or mobile frame, and no breakpoint annotations, are present. Implementers will need to design the responsive collapse (e.g. hamburger nav, stacked hero, single-column card grids) themselves — this is not specified by Figma and should be flagged to design before mobile implementation, or built against a documented in-house responsive convention if one exists.

## Accessibility notes

- **Color-only interactive cues:** the active nav link and "Learn more" card links are signaled primarily through color (`#0d9488` teal text) with no underline; the "Learn more" links do pair the color with a chevron icon, which helps, but the nav "Home" link has no non-color indicator (no underline, no icon, no bold-weight difference from other 15px items beyond weight SemiBold vs Medium, which is a legitimate secondary cue).
- **Text contrast:** the teal `#0d9488` used as text-on-white (nav active link, "Learn more" links, tab-style accents where reused elsewhere) computes to roughly **3.7:1 against white**, below the WCAG AA 4.5:1 threshold for normal-size text. This should be swapped for the darker `#0f766e` (used elsewhere in the same file for the same semantic role and passing ~5.5:1) or a further-darkened value. See the standalone review doc for the full analysis.
- **Primary CTA buttons:** white text on `#0d9488` teal and on `#f43f5e` rose backgrounds compute to ~3.7:1 and ~3.7:1 respectively — both below AA 4.5:1 for the 15px SemiBold button label size used. Needs a darker button fill or a different text treatment.
- **Heading hierarchy:** confirm implementation uses a single H1 (hero headline) followed by H2s per section (all "section-header" H2 text) rather than resetting heading levels per section — the design implies this hierarchy but doesn't encode it explicitly.
- **Insurer/partner logos** in the trust bar are rendered as plain styled text, not actual logo marks — decide whether real logo assets (with alt text) are needed, or whether stylized wordmarks are the intended final treatment.
- **FAQ accordion** must be built with proper `button`/`aria-expanded`/region association since only static visual states are shown; keyboard operability isn't verifiable from the design file.
- **Star ratings** (testimonials) are rendered as 5 icon graphics with no visible numeric/text equivalent alongside them beyond the surrounding quote — ensure an accessible text alternative (e.g. "5 out of 5 stars") is added, since the icons alone would not be conveyed to screen reader users.

## Assets

Use `mcp__figma__download_assets` (or `get_design_context` per node) against fileKey `MtFODCLvM5tffZ2txAvdVL` for the following, keyed by node id:
- Logo/brand icon "activity" glyph: `8:366` (header), `8:426` (footer)
- Icons (24px unless noted): video `8:372`, activity `8:378`, file-text `8:384`, users `8:390`, chevron-right `8:375`/`8:381`/`8:387`/`8:393`, chevron-down `24:656` (+ 4 sibling FAQ items), star `8:396` (×5, repeated per review), arrow-right `8:369`, clock `24:611`, shield `24:624`, credit-card `24:637`
- Hero clinic photo (raster): node `8:50` (`hero-image`, 560×480)
- Trust-indicator avatar circles (raster, 3 overlapping): nodes `8:43`, `8:44`, `8:45`
- Reviewer avatar photos (raster): nodes `8:147` (Dr. Aris Thorne), `8:166` (Julianna Mercer)

## Open questions

1. **FAQ accordion interaction** — only one expanded state (item 1) is shown; confirm whether multiple items can be open simultaneously or if it's single-open (accordion) behavior, and what the collapse/expand transition should be.
2. **Insurer logos** — are "Aetna," "BlueCross," etc. meant to ship as real brand logo assets (which would need licensing/usage sign-off) or remain as styled text as designed?
3. **Header behavior on scroll** — not specified whether the header is sticky/fixed; no scrolled-state variant is shown.
4. **Newsletter form validation** — no error/success/duplicate-email state is designed; needs definition before build.
5. **Nav "Sign In" vs "Join Pulse"** — destinations aren't specified (e.g. does "Sign In" route to the patient portal shown in the other three frames? The portal screens have no visible login flow in this file).
6. **Responsive breakpoints** — no tablet/mobile frames exist; layout collapse behavior needs to be defined by whoever owns responsive strategy for this codebase before implementation.
