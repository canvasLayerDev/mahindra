"use client";

import { Section, Container, Grid } from "@/components/layout";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function GetInTouch() {
  return (
    <Section className="bg-ink-900 border-t border-line">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wider font-medium text-gold mb-4">(09) GET IN TOUCH</p>
        <h2 className="font-display text-[clamp(56px,9vw,200px)] uppercase tracking-[-0.02em] leading-[0.88] mb-8">CONNECT WITH US</h2>

        <Grid cols={2} className="gap-12 items-start mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider font-medium text-bone-dim mb-2">MEDIA &amp; PRESS INQUIRIES</p>
            <p className="font-display text-4xl text-gold mb-4">
              communications@mahindra.com
            </p>
            <p className="font-body text-base leading-relaxed text-bone-dim">
              For corporate media, interviews, and official press releases.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider font-medium text-bone-dim mb-2">REGISTERED HEADQUARTERS</p>
            <p className="font-body text-[clamp(20px,1.6vw,28px)] leading-tight text-bone mb-4">
              Mahindra Towers, Dr. G.M. Bhosale Marg, P.K. Kurne Chowk, Worli, Mumbai
              400018, Maharashtra, India.
            </p>
          </div>
        </Grid>

        <div className="flex items-center gap-6">
          <MagneticButton variant="gold" size="lg">
            Contact Us
          </MagneticButton>
        </div>
      </Container>
    </Section>
  );
}
