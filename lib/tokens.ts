/**
 * Central design-token source. `tailwind.config.ts` imports these values
 * directly so Tailwind utility classes and any TS code that needs a raw
 * value (e.g. inline SVG strokes for sparklines) stay in sync with one
 * definition instead of duplicated hex literals.
 *
 * Colors below are the *accessible* values selected in the design review
 * (`design/requirements/pulse-healthcare-review.md`) — the raw Figma hex
 * values that failed WCAG AA contrast (`#0d9488` as text, `#f43f5e` as
 * button fill, `#10b981` as badge text) are intentionally not exposed as
 * tokens here so no component can accidentally reach for a failing color.
 */

export const colors = {
  ink: "#0f172a",
  body: "#475569",
  muted: "#94a3b8",
  "muted-dark": "#64748b",
  border: "#e2e8f0",
  "surface-alt": "#f8fafc",

  // Teal: `teal` is the accessible text/interactive value (~5.5:1 on white).
  // `teal-surface` is the original brand teal, valid only as a background fill.
  teal: "#0f766e",
  "teal-surface": "#0d9488",
  "teal-tint": "#f0fdfa",

  // Rose: `rose` is darkened for use under white button text (~4.6:1+).
  // `rose-decorative` is the original brand rose, for non-text decorative use only.
  rose: "#e11d48",
  "rose-decorative": "#f43f5e",

  success: "#047857",
  "success-bg": "#ecfdf5",
  danger: "#be123c",
  "danger-bg": "#fff1f2",
} as const;

export const radius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
} as const;

export const layout = {
  sidebarWidth: "280px",
  heroMediaWidth: "560px",
  heroMediaHeight: "480px",
  serviceCardWidth: "302px",
  vitalCardWidth: "341px",
  portalPrimaryColumn: "720px",
  portalSecondaryColumn: "320px",
  settingsPrimaryColumn: "700px",
  settingsSecondaryColumn: "340px",
} as const;

export const shadow = {
  card: "0px 2px 10px 0px rgba(13,148,136,0.04), 0px 10px 24px 0px rgba(0,0,0,0.03)",
} as const;
