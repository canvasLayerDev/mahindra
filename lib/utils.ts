import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names with clsx.
 * Tailwind v4 doesn't need tailwind-merge — @theme handles specificity.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
