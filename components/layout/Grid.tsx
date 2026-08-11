"use client";

import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Number of columns (default 12) */
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
}

const colsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 md:grid-cols-6 lg:grid-cols-12",
};

/**
 * Grid — 12-column CSS grid layout.
 * Responsive from 1 col (mobile) to 12 col (desktop).
 */
const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, className, cols = 12, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid gap-6 lg:gap-8",
          colsMap[cols],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Grid.displayName = "Grid";

export { Grid };
