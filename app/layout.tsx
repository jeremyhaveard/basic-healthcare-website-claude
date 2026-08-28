import type { Metadata } from "next";
import { Outfit, Instrument_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulse Health",
  description:
    "Pulse Health simplifies your medical journey — telehealth, prescription management, lab results, and care-team messaging in one secure patient portal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${instrumentSans.variable} font-body text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
