/**
 * Global motion constants — locked across all phases.
 * Never improvise easing/duration per-section; always reference these.
 *
 * All GSAP code must use useGSAP() with a scope ref,
 * and be wrapped in gsap.matchMedia() for responsive + reduced-motion support.
 */

/** Easing presets */
export const EASE = {
  out: "expo.out",
  inOut: "power4.inOut",
  soft: "power2.out",
  elastic: "elastic.out(1,0.4)",
} as const;

/** Duration presets (seconds) */
export const DUR = {
  micro: 0.3,
  base: 0.8,
  hero: 1.4,
  page: 1.1,
} as const;

/** Stagger presets (seconds) */
export const STAG = {
  tight: 0.04,
  line: 0.08,
  card: 0.12,
} as const;

/**
 * Reduced-motion detection.
 * Safe for SSR — defaults to false on the server.
 */
export function getReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Device capability checks for WebGL fallbacks.
 */
export function shouldDisableWebGL(): boolean {
  if (typeof navigator === "undefined") return false;

  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean };
  }).connection;

  const deviceMemory = (navigator as Navigator & {
    deviceMemory?: number;
  }).deviceMemory;

  if (connection?.saveData) return true;
  if (deviceMemory !== undefined && deviceMemory < 4) return true;
  if (typeof window !== "undefined" && window.innerWidth < 1024) return true;

  return false;
}
