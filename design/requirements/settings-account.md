# Patient Portal — Account Settings

## Source

- Figma file: "Basic Healthcare Design" (fileKey `MtFODCLvM5tffZ2txAvdVL`)
- Page: "Page 1" (`0:1`)
- Frame: `screen-settings-account` (node id `24:353`), 1440 × 1408 px
- Figma URL: https://www.figma.com/design/MtFODCLvM5tffZ2txAvdVL/Basic-Healthcare-Design?node-id=24-353

## Overview

The patient portal's account settings screen ("Settings" active in sidebar), where a patient manages profile info, notification preferences, connected wearable/health devices, security settings, and views insurance information. Reuses the same app shell as the dashboard and medical records screens.

## Components

- **Sidebar** — identical to other portal screens; "Settings" shown active.
- **Page header** (`24:387`) — title "Account Settings" + subtext, with "Discard Changes" (secondary) and "Save All Changes" (primary) actions on the right.
- **Profile Information card** (`24:398`) — header with "Edit Profile" action; avatar + name + upload hint row; a 2-column form row (Email Address, Contact Phone) and a full-width row (Physical Address), each field shown as a labeled static-looking box with a value already filled in.
- **Notification Preferences card** (`24:422`) — 3 `pref-item` rows (Lab Results Alerts, Provider Messaging Notifications, Biometric Shift Anomalies), each with a title, description, and independent Email/SMS toggle switches showing mixed on/off states.
- **Connected Health Devices card** (`24:464`) — header with "Link New Device" action; 2 `device-item` rows (Withings ScanWatch Nova, Apple Health Integration), each with an icon, device name, sync-status description, and a "Sync Now" button.
- **Security & Privacy card** (`24:486`) — Two-Factor Authentication (2FA) row with description + toggle (on), and Update Password row with description + "Reset Password" button.
- **Insurance Information card** (`24:501`, right column) — a dark "insurance card" visual (plan name "Blue Shield of CA", "PPO" badge, Member ID, Group Number, Copays) plus a "Verify Coverage Status" button below it.

## Layout & spacing

- Same app-shell as other portal screens: 280px sidebar, `48px` main content padding.
- Two-column content grid: left column `700px` wide (Profile → Notifications → Devices → Security, stacked with visible card boundaries), right column `340px` wide (Insurance card only, does not stretch to match left column height).
- Card padding `24px`; internal row groups typically `16–24px` gaps.
- Form fields: label (`13px` uppercase, `6px` gap) above a value box (`p-[12px]`, `8px` radius, `#f8fafc` fill, `#e2e8f0` border).
- Notification/security rows: `justify-between` flex, label block capped at `400px` width, action controls (toggle/button) right-aligned; each row separated by a bottom border except the last in a group.
- Toggle switches are `44×24px` pill controls with a `20px` knob.
- Insurance card: dark inner panel (`#0f172a`, `12px` radius, `20px` padding) nested inside the white outer card.

## Typography & color

Same Outfit/Instrument Sans system and raw-hex palette as the other portal screens — no Figma variables defined.

| Use | Font | Weight | Size | Color |
|---|---|---|---|---|
| Page title "Account Settings" | Outfit (implied) | Bold | ~28px | `#0f172a` |
| Page subtext | Instrument Sans | Regular | 14px | `#475569` |
| Card section heading | Instrument Sans/Outfit | Bold | ~18px | `#0f172a` |
| Form field label (uppercase) | Instrument Sans | SemiBold | 13px, uppercase | `#64748b` |
| Form field value | Instrument Sans | Regular | 14px | `#0f172a` |
| Preference/security row title | Outfit | Bold | 15px | `#0f172a` |
| Preference/security row description | Instrument Sans | Regular | 13px, 1.4 line-height | `#475569` |
| Toggle sub-label ("Email"/"SMS") | Instrument Sans | Regular | 13px | `#64748b` |
| Device name | Instrument Sans/Outfit | SemiBold/Bold | ~15px | `#0f172a` |
| Device status description | Instrument Sans | Regular | ~13px | `#475569` |
| Insurance plan name | Outfit | ExtraBold | 18px | white |
| Insurance "PPO" badge | Instrument Sans | Bold | 10px | white, on `rgba(0,0,0,0.25)` chip over dark card |
| Insurance detail labels (MEMBER ID, etc.) | Instrument Sans | Regular | 11px | white at 50% opacity, on `#0f172a` |
| Insurance detail values | Instrument Sans | Bold | 12px | white, on `#0f172a` |
| "Verify Coverage Status" / secondary buttons | Instrument Sans | SemiBold | 14px | `#0f172a` on white/bordered background |
| "Save All Changes" primary button | Instrument Sans | SemiBold | ~14px | white on rose `#f43f5e` (consistent with landing-page primary CTA color) |

Toggle switches use the teal `#0d9488` (or similar) for the "on" state fill and a light gray for "off" — exact off-state hex not confirmed from code inspection; verify against the toggle SVG asset before implementing.

## Content/copy

- Page: "Account Settings" / "Manage your profile information, insurance verifications, connected platforms, and HIPAA compliance setups." · "Discard Changes" · "Save All Changes"
- Profile card: "Profile Information" / "Edit Profile"
  - "David Vance" — "Avatar fits standards. Max 5MB file limit."
  - "EMAIL ADDRESS": david.vance@inbox.com
  - "CONTACT PHONE": +1 (555) 302-8941
  - "PHYSICAL ADDRESS": 104 Redwood Ave, Apt 14B, Palo Alto, CA 94301
- Notifications card: "Notification Preferences"
  - "Lab Results Alerts" — "Notify immediately upon laboratory release diagnostics confirmation." — Email: on, SMS: on
  - "Provider Messaging Notifications" — "Alert when a care professional dispatches a secure reply." — Email: on, SMS: off
  - "Biometric Shift Anomalies" — "Flag vital variance levels tracked through dynamic wearable modules." — Email: off, SMS: on
- Devices card: "Connected Health Devices" / "Link New Device"
  - "Withings ScanWatch Nova" — "Heart rate monitoring & sleep telemetry tracking active." — "Sync Now"
  - "Apple Health Integration" — "Dynamic systemic blood vitals and steps metrics synced daily." — "Sync Now"
- Security card: "Security & Privacy"
  - "Two-Factor Authentication (2FA)" — "Enhance your secure login stack using robust verification codes." — toggle: on
  - "Update Password" — "Keep security fresh with frequent authorization resets." — "Reset Password"
- Insurance card: "INSURANCE INFORMATION" / "Blue Shield of CA" / "PPO" / MEMBER ID: BSC99388102 / GROUP NUMBER: 991A-20 / COPAYS: $20 Office / $40 Specialist / "Verify Coverage Status"

## States & interactions

- Notification toggles are shown in a **mix of on/off states** across the three rows (6 toggles total, 3 on / 3 off), giving both visual states for that control — useful reference for implementation.
- 2FA toggle is shown **on**; no "off" 2FA state is shown, and no confirmation/setup flow (e.g. entering a phone number, scanning a QR code) is designed for turning it on.
- Profile fields are displayed with real-looking values but no visible input chrome (no cursor, no focus ring, no edit-in-place affordance) beyond the box styling — combined with a separate "Edit Profile" button, it's ambiguous whether these fields are: (a) permanently read-only display until "Edit Profile" is clicked, at which point they become editable inputs, or (b) always-editable inputs that merely use this box styling at rest. See open questions.
- No hover/focus/disabled/error state is shown for any button, toggle, or field.
- No validation state (e.g. invalid email, invalid phone format) is shown.
- "Save All Changes" / "Discard Changes" have no confirmation, success toast, or error state designed.

## Responsive behavior

Single 1440px desktop frame only; no tablet/mobile layout exists for this screen.

## Accessibility notes

- **Form field labeling:** each field does have a visible uppercase label above it (good pattern to preserve — implement with real `<label for>` / `aria-labelledby` association, not just visual proximity).
- **Ambiguous field interactivity** (see States & interactions above) has an accessibility dimension too: if these are meant to be actual `<input>` elements, they need standard input semantics/focus styles; if they're read-only display until "Edit Profile" is pressed, the transition needs a clear focus-management story (e.g. focus should move into the first field once editing is enabled).
- **Toggle switches:** ensure each is implemented as a real checkbox/switch role with an accessible name derived from its row label plus channel ("Lab Results Alerts — Email", "Lab Results Alerts — SMS"), not just a colored pill — the design uses knob position (not color alone) to indicate on/off, which is good, but the accessible name for each of the 6 toggles isn't inferable from the visual design alone (e.g. whether "Email"/"SMS" text doubles as the accessible label or is a separate caption).
- **Sensitive data exposure:** this screen displays email, phone, full physical address, and full insurance member/group ID in plaintext with no masking or reveal-on-demand pattern, directly under a subtitle that name-checks "HIPAA compliance setups." Confirm with the product owner whether this level of unmasked PII/PHI display matches actual compliance requirements before treating the design literally — this is a policy question, not just a visual one.
- **Insurance card small text:** the 50%-opacity white labels ("MEMBER ID", "GROUP NUMBER", "COPAYS") at 11px on a dark navy background should be contrast-checked in final implementation; the design's use of low-opacity white for secondary text is a repeated pattern worth verifying (rough estimate is passing, but should be confirmed against final rendered values, not assumed).
- **"Sync Now" and icon-only actions:** ensure device sync actions and any icon-only controls have accessible names beyond the icon.

## Assets

Use `mcp__figma__download_assets` against fileKey `MtFODCLvM5tffZ2txAvdVL`:
- Avatar photo (raster): `24:404`
- Toggle switch graphic/component: reference node `24:432` (and repeated toggle instances) — confirm on/off asset variants before exporting
- Device icons (reused "activity" glyph): `24:596`, `24:599` — see review for note on whether this reuse is intentional
- File-text/PDF icon (insurance/profile context, if applicable): none additional beyond nav icons already listed in `patient-dashboard.md`

## Open questions

1. **Field edit mode** — is the Profile Information form always-editable, or does "Edit Profile" toggle it from read-only to editable? This changes the implementation approach significantly and isn't resolvable from the static design.
2. **2FA setup flow** — turning on 2FA typically requires a verification step (phone/authenticator enrollment); none is designed. Needs definition before build.
3. **Field validation rules** — no format constraints (phone format, address format, email validation messaging) are specified in the design.
4. **Data sensitivity/masking policy** — confirmed as an open compliance question above; needs a product decision, not a design-file answer.
5. **Toggle "off" color** — the off-state fill color wasn't confirmed via code inspection (only inferred from the screenshot as light gray); verify the exact value before implementation rather than guessing a gray token.
