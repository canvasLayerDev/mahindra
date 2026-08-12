import { Goldman, Bebas_Neue, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-goldman",
  display: "swap",
  preload: true,
});

/**
 * Display font — Bebas Neue
 * Used for .font-display text-[clamp(56px,9vw,200px)] uppercase tracking-[-0.02em] leading-[0.88], .font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95], .font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none
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
 * Used for .font-mono text-xs uppercase tracking-wider font-medium eyebrow text
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400"],
});
