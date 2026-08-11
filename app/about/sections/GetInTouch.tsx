"use client";

import { Section, Container, Grid } from "@/components/layout";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function GetInTouch() {
  return (
    <Section className="bg-ink-900 border-t border-line">
      <Container>
        <p className="t-label text-gold mb-4">(09) GET IN TOUCH</p>
        <h2 className="t-hero mb-8">CONNECT WITH US</h2>

        <Grid cols={2} className="gap-12 items-start mb-16">
          <div>
            <p className="t-label text-bone-dim mb-2">MEDIA &amp; PRESS INQUIRIES</p>
            <p className="font-display text-4xl text-gold mb-4">
              communications@mahindra.com
            </p>
            <p className="t-body text-bone-dim">
              For corporate media, interviews, and official press releases.
            </p>
          </div>

          <div>
            <p className="t-label text-bone-dim mb-2">REGISTERED HEADQUARTERS</p>
            <p className="t-lead text-bone mb-4">
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
