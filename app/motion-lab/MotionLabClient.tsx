"use client";

import { Section, Container, Grid } from "@/components/layout";
import {
  RevealText,
  ScrubText,
  ImageReveal,
  Counter,
  HorizontalRail,
  StickyStack,
  Marquee,
  MagneticButton,
  AnimatedLink,
} from "@/components/motion";

export function MotionLabClient() {
  return (
    <div className="bg-ink-900 min-h-dvh pt-24">
      {/* Hero Header */}
      <Section noPadding className="pb-16 pt-12">
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(00) COMPONENT LIBRARY</p>
          <h1 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] mb-6">MOTION LAB</h1>
          <p className="font-body text-[clamp(20px,1.6vw,28px)] leading-tight text-bone-dim">
            Isolated showcase of the 8 core motion primitives driving the
            Mahindra Rise experience. Every component respects
            prefers-reduced-motion and includes standard fallbacks.
          </p>
        </Container>
      </Section>

      <div className="hairline" />

      {/* 1. RevealText */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(01) REVEAL TEXT</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone-dim mb-8">Masked Line/Word Reveal</h2>
          <div className="space-y-8 bg-ink-800 p-8 rounded-xl border border-line">
            <RevealText as="h2" split="lines" className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-bone">
              PURPOSE LED,
              <br />
              PERFORMANCE DRIVEN,
              <br />
              <span className="text-ember">FUTURE READY.</span>
            </RevealText>
          </div>
        </Container>
      </Section>

      <div className="hairline" />

      {/* 2. ScrubText */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(02) SCRUB TEXT</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone-dim mb-8">Scroll-Scrubbed Opacity</h2>
          <div className="bg-ink-800 p-8 rounded-xl border border-line">
            <ScrubText className="font-body text-[clamp(20px,1.6vw,28px)] leading-tight">
              We bring together diverse, future-facing industries and communities to
              co-create a positive world, where one enables the other to Rise.
            </ScrubText>
          </div>
        </Container>
      </Section>

      <div className="hairline" />

      {/* 3. ImageReveal */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(03) IMAGE REVEAL</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone-dim mb-8">Clip-Path &amp; Inner Scale</h2>
          <Grid cols={2}>
            <ImageReveal
              src="https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Automotive_.webp"
              alt="Automotive"
              aspectRatio="aspect-[4/3]"
              wrapperClassName="rounded-xl"
            />
            <ImageReveal
              src="https://www.mahindra.com/sites/default/files/2026-03/Mahindra_What%20We%20Do-Technology%20Services.webp"
              alt="Technology"
              aspectRatio="aspect-[4/3]"
              wrapperClassName="rounded-xl"
            />
          </Grid>
        </Container>
      </Section>

      <div className="hairline" />

      {/* 4. Counter */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(04) COUNTERS</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone-dim mb-8">Odometer Count-Up</h2>
          <Grid cols={4}>
            <div className="bg-ink-800 p-6 rounded-xl border border-line">
              <p className="font-mono text-xs uppercase tracking-wider font-medium mb-2">TURNOVER</p>
              <p className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-ember">
                <Counter to={30} prefix="$" suffix=" B+" />
              </p>
            </div>
            <div className="bg-ink-800 p-6 rounded-xl border border-line">
              <p className="font-mono text-xs uppercase tracking-wider font-medium mb-2">PEOPLE</p>
              <p className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-bone">
                <Counter to={327} suffix="K+" />
              </p>
            </div>
            <div className="bg-ink-800 p-6 rounded-xl border border-line">
              <p className="font-mono text-xs uppercase tracking-wider font-medium mb-2">GIRLS EDUCATED</p>
              <p className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-bone">
                <Counter to={940} suffix="K+" />
              </p>
            </div>
            <div className="bg-ink-800 p-6 rounded-xl border border-line">
              <p className="font-mono text-xs uppercase tracking-wider font-medium mb-2">HERITAGE</p>
              <p className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-gold">
                <Counter to={81} suffix=" YRS" />
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      <div className="hairline" />

      {/* 5. HorizontalRail */}
      <Section noPadding className="py-24">
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(05) HORIZONTAL RAIL</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone-dim mb-8">Pinned Velocity Skew Rail</h2>
        </Container>
        <HorizontalRail>
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="flex h-[380px] w-[300px] flex-col justify-between rounded-xl bg-ink-800 p-6 border border-line lg:w-[380px]"
            >
              <span className="font-mono text-xs uppercase tracking-wider font-medium text-ember">CARD 0{i + 1}</span>
              <div>
                <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone">VERTICAL {i + 1}</h3>
                <p className="font-body text-base leading-relaxed text-bone-dim mt-2 text-sm">
                  Mahindra Group sector representation and operational excellence.
                </p>
              </div>
            </div>
          ))}
        </HorizontalRail>
      </Section>

      <div className="hairline" />

      {/* 6. StickyStack */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(06) STICKY STACK</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone-dim mb-8">Overlapping Card Scale</h2>
          <StickyStack>
            <div className="flex h-[320px] items-center justify-center rounded-2xl bg-ink-800 border border-line p-8">
              <h3 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-bone">CARD 01 — BEST IN TALENT</h3>
            </div>
            <div className="flex h-[320px] items-center justify-center rounded-2xl bg-ink-700 border border-line p-8">
              <h3 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-ember">CARD 02 — LEADERS IN TECH</h3>
            </div>
            <div className="flex h-[320px] items-center justify-center rounded-2xl bg-ink-800 border border-line p-8">
              <h3 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-gold">CARD 03 — INCLUSIVE GROWTH</h3>
            </div>
          </StickyStack>
        </Container>
      </Section>

      <div className="hairline" />

      {/* 7. Marquee */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(07) MARQUEE</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone-dim mb-8">Velocity Speed Ticker</h2>
        </Container>
        <Marquee speed={1.2} className="py-6 bg-ink-800 border-y border-line">
          <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-bone">PURPOSE LED</span>
          <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-ember">·</span>
          <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-bone">PERFORMANCE DRIVEN</span>
          <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-ember">·</span>
          <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-gold">FUTURE READY</span>
          <span className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] text-ember">·</span>
        </Marquee>
      </Section>

      <div className="hairline" />

      {/* 8. Magnetic Buttons & Animated Links */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(08) INTERACTIVE CONTROLS</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone-dim mb-8">Magnetic &amp; Underline Controls</h2>
          <div className="flex flex-wrap items-center gap-8 bg-ink-800 p-8 rounded-xl border border-line">
            <MagneticButton variant="ember">Book Now</MagneticButton>
            <MagneticButton variant="ghost">Know More</MagneticButton>
            <MagneticButton variant="gold">80 Years</MagneticButton>
            <AnimatedLink href="/styleguide">Explore Styleguide →</AnimatedLink>
          </div>
        </Container>
      </Section>
    </div>
  );
}
