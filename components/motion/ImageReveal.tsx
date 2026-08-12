"use client";

import { useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, EASE, getReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageRevealProps extends Omit<ImageProps, "onError"> {
  wrapperClassName?: string;
  disabled?: boolean;
  aspectRatio?: string;
}

export function ImageReveal({
  src,
  alt,
  className,
  wrapperClassName,
  disabled = false,
  aspectRatio = "aspect-[16/9]",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useGSAP(
    () => {
      const container = containerRef.current;
      const imgWrap = imageWrapperRef.current;
      if (!container || !imgWrap || disabled || getReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Reveal container clip-path
      tl.fromTo(
        container,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: DUR.hero,
          ease: EASE.out,
        }
      );

      // Inner image scale down
      tl.fromTo(
        imgWrap,
        { scale: 1.25 },
        {
          scale: 1,
          duration: 1.6,
          ease: EASE.out,
        },
        "<"
      );
    },
    { scope: containerRef, dependencies: [src, disabled] }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-ink-800",
        aspectRatio,
        wrapperClassName
      )}
      style={{ clipPath: getReducedMotion() ? "inset(0 0 0% 0)" : undefined }}
    >
      <div ref={imageWrapperRef} className="relative h-full w-full">
        {hasError ? (
          <div className="flex h-full w-full items-center justify-center bg-ink-800 text-ember p-6">
            <span className="font-mono text-xs uppercase tracking-wider font-medium font-bold text-center">
              MAHINDRA · {alt || "MEDIA ASSET"}
            </span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            quality={90}
            sizes={sizes}
            onError={() => setHasError(true)}
            className={cn("object-cover", className)}
            {...props}
          />
        )}
      </div>
    </div>
  );
}
