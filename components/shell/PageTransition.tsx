"use client";

import { useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getReducedMotion } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = getReducedMotion();

  const handleExitComplete = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    }
  };

  if (reduced) {
    return <div key={pathname}>{children}</div>;
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <motion.div key={pathname} className="relative min-h-screen">
        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0.6, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
        >
          {children}
        </motion.div>

        {/* Transition Panel Wipe */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-[9995] bg-ink-900"
          initial={{ scaleY: 1, transformOrigin: "bottom" }}
          animate={{ scaleY: 0, transformOrigin: "top" }}
          exit={{ scaleY: 1, transformOrigin: "bottom" }}
          transition={{ duration: 0.55, ease: [0.77, 0, 0.175, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
