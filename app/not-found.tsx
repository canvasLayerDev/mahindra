"use client";

import Link from "next/link";
import { Section, Container } from "@/components/layout";
import { MagneticButton } from "@/components/motion/MagneticButton";

export default function NotFound() {
  return (
    <Section className="relative flex min-h-dvh items-center justify-center bg-ink-900 overflow-hidden text-center">
      {/* Background Radial Ember Glow */}
      <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-ember/10 blur-[150px]" />

      <Container className="relative z-10">
        <p className="t-label text-ember mb-4">(404) PAGE NOT FOUND</p>
        <h1 className="font-display text-[clamp(100px,22vw,320px)] font-extrabold text-bone leading-none select-none">
          LOST?
        </h1>
        <p className="t-lead mx-auto mb-12 text-bone-dim max-w-[45ch]">
          The route you are looking for does not exist or has moved. Return to the home
          experience to continue exploring Mahindra Group.
        </p>
        <Link href="/">
          <MagneticButton variant="ember" size="lg">
            RETURN HOME →
          </MagneticButton>
        </Link>
      </Container>
    </Section>
  );
}
