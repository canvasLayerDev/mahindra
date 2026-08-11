import type { Metadata } from "next";
import Link from "next/link";
import { Section, Container, Grid } from "@/components/layout";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "Credits & Tech Stack",
  description:
    "Tech stack, motion engineering specifications and disclaimer for the unofficial Mahindra Rise Awwwards concept redesign.",
};

export default function CreditsPage() {
  return (
    <Section className="bg-ink-900 pt-32 pb-24">
      <Container>
        <p className="t-label text-ember mb-4">(10) ACKNOWLEDGEMENTS &amp; TECH STACK</p>
        <h1 className="t-hero mb-6">PROJECT CREDITS</h1>
        <p className="t-lead text-bone-dim mb-16 max-w-[60ch]">
          Built as an Awwwards-grade digital experience redesign for the Mahindra Group.
          Translating six core motion signatures into a unified dark-mode enterprise identity.
        </p>

        {/* Tech Stack Grid */}
        <Grid cols={3} className="gap-8 mb-20">
          <div className="rounded-2xl bg-ink-800 p-8 border border-line">
            <span className="t-label text-ember mb-2 block">FRAMEWORK</span>
            <h3 className="t-h2 text-bone mb-3">NEXT.JS 14 APP ROUTER</h3>
            <p className="t-body text-bone-dim text-sm">
              React 19, TypeScript strict mode, Turbopack, route-level code splitting &amp; SSR optimization.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-800 p-8 border border-line">
            <span className="t-label text-ember mb-2 block">MOTION &amp; SCROLL</span>
            <h3 className="t-h2 text-bone mb-3">GSAP 3 + LENIS</h3>
            <p className="t-body text-bone-dim text-sm">
              ScrollTrigger, Lenis smooth scroll ticker sync, masked typography reveals &amp; velocity skewing.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-800 p-8 border border-line">
            <span className="t-label text-gold mb-2 block">3D GRAPHICS</span>
            <h3 className="t-h2 text-bone mb-3">THREE.JS (R3F)</h3>
            <p className="t-body text-bone-dim text-sm">
              React Three Fiber instanced ring scene, custom shader desaturation, and WebGL color configurator.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-800 p-8 border border-line">
            <span className="t-label text-ember mb-2 block">DESIGN SYSTEM</span>
            <h3 className="t-h2 text-bone mb-3">INK &amp; EMBER PALETTE</h3>
            <p className="t-body text-bone-dim text-sm">
              Tailwind CSS v4 inline theme, Bebas Neue display typography, self-hosted Satoshi &amp; JetBrains Mono.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-800 p-8 border border-line">
            <span className="t-label text-ember mb-2 block">PAGE TRANSITIONS</span>
            <h3 className="t-h2 text-bone mb-3">FRAMER MOTION</h3>
            <p className="t-body text-bone-dim text-sm">
              AnimatePresence mode=&quot;wait&quot;, curtain wipe exit/enter panels &amp; immediate Lenis scroll resets.
            </p>
          </div>

          <div className="rounded-2xl bg-ink-800 p-8 border border-line">
            <span className="t-label text-gold mb-2 block">REFERENCE MOTION</span>
            <h3 className="t-h2 text-bone mb-3">VINCENT &amp; DUSSAULT</h3>
            <p className="t-body text-bone-dim text-sm">
              Motion physics inspiration: silent cinematic hero, line reveals, magnetic elements &amp; marquee ticker.
            </p>
          </div>
        </Grid>

        {/* Legal Disclaimer Box */}
        <div className="rounded-3xl bg-ink-800 p-8 lg:p-12 border border-ember/40 mb-16">
          <p className="t-label text-ember mb-2">IMPORTANT LEGAL DISCLAIMER</p>
          <h3 className="t-h2 text-bone mb-4">UNOFFICIAL CONCEPT REDESIGN</h3>
          <p className="t-lead text-bone-dim text-base max-w-[68ch]">
            This website is an unofficial creative concept redesign built strictly for portfolio and educational purposes. All trademarks, logos, brand names, product photography, video footage, and copy belong to Mahindra &amp; Mahindra Ltd. and its affiliated group entities.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/">
            <MagneticButton variant="ember" size="lg">
              Return Home →
            </MagneticButton>
          </Link>
          <Link href="/styleguide">
            <MagneticButton variant="ghost" size="lg">
              View Styleguide
            </MagneticButton>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
