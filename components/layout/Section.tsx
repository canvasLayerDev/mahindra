"use client";

import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Override default padding */
  noPadding?: boolean;
}

/**
 * Section — vertical rhythm wrapper.
 * Default: py-[200px] on desktop, py-24 on mobile.
 * Always renders as <section> for semantic correctness.
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, noPadding = false, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full",
          !noPadding && "py-24 lg:py-[200px]",
          className,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

export { Section };
