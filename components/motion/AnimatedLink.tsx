"use client";

import Link, { type LinkProps } from "next/link";
import { useCursor } from "@/lib/hooks/useCursor";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface AnimatedLinkProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
  children: ReactNode;
  underlineColor?: string;
  className?: string;
}

export function AnimatedLink({
  children,
  href,
  underlineColor = "bg-ember",
  className,
  onMouseEnter,
  onMouseLeave,
  ...props
}: AnimatedLinkProps) {
  const { setVariant } = useCursor();

  return (
    <Link
      href={href}
      onMouseEnter={(e) => {
        setVariant("ring");
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setVariant("default");
        if (onMouseLeave) onMouseLeave(e);
      }}
      className={cn(
        "group relative inline-block text-sm font-medium uppercase tracking-wider text-bone transition-colors hover:text-ember",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100",
          underlineColor
        )}
      />
    </Link>
  );
}
