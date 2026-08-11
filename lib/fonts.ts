import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

/**
 * Display font — Bebas Neue
 * Used for .t-hero, .t-h1, .t-h2
 * Only weight 400 available (the font is inherently bold)
 */
export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
  preload: true,
});

/**
 * Body font — Satoshi (self-hosted from Fontshare)
 * Downloaded to /public/fonts/satoshi/ for reliability
 * Weights: 400, 500, 700
 */
export const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

/**
 * Mono font — JetBrains Mono
 * Used for .t-label eyebrow text
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400"],
});
