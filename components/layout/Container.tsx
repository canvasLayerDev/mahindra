"use client";

import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Full-width mode — no max-width or padding */
  fluid?: boolean;
}

/**
 * Container — centered content wrapper.
 * Max-width 1440px, 120px horizontal padding desktop / 24px mobile.
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, fluid = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative mx-auto w-full",
          !fluid && "max-w-[1440px] px-6 lg:px-[120px]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";

export { Container };
