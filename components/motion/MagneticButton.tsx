"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { useMagnetic } from "@/lib/hooks/useMagnetic";
import { useCursor } from "@/lib/hooks/useCursor";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ember" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  (
    {
      children,
      variant = "ember",
      size = "md",
      className,
      disabled = false,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const magneticRef = useMagnetic<HTMLButtonElement>({
      radius: 80,
      maxDistance: 12,
    });
    const { setVariant } = useCursor();

    const variants = {
      ember:
        "bg-ember text-bone hover:bg-ember-dim border-transparent shadow-lg shadow-ember/20",
      ghost:
        "bg-transparent text-bone border-line hover:border-ember hover:text-ember",
      gold:
        "bg-gold text-ink-900 font-bold hover:bg-gold/90 border-transparent shadow-lg shadow-gold/20",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-xs",
      md: "px-8 py-4 text-sm",
      lg: "px-10 py-5 text-base",
    };

    return (
      <button
        ref={(node) => {
          // Store in magneticRef
          (magneticRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        disabled={disabled}
        onMouseEnter={(e) => {
          setVariant("ring");
          if (onMouseEnter) onMouseEnter(e);
        }}
        onMouseLeave={(e) => {
          setVariant("default");
          if (onMouseLeave) onMouseLeave(e);
        }}
        className={cn(
          "inline-flex items-center justify-center border font-medium uppercase tracking-wider transition-colors duration-300 select-none will-change-transform",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";
