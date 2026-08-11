import type { Metadata } from "next";
import { MotionLabClient } from "./MotionLabClient";

export const metadata: Metadata = {
  title: "Motion Lab",
  description:
    "Interactive laboratory showcasing all 8 reusable GSAP & Lenis motion components for Mahindra Rise.",
};

export default function MotionLabPage() {
  return <MotionLabClient />;
}
