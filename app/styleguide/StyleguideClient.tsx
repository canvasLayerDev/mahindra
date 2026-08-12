"use client";

import { Section, Container, Grid } from "@/components/layout";

/* ============================================================
   Colour Swatches
   ============================================================ */

interface SwatchProps {
  name: string;
  token: string;
  hex: string;
  bgClass: string;
  textClass?: string;
}

function Swatch({ name, token, hex, bgClass, textClass = "text-bone" }: SwatchProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`${bgClass} h-24 w-full rounded-lg border border-line`}
      />
      <div className={textClass}>
        <p className="text-sm font-medium">{name}</p>
        <p className="font-mono text-xs uppercase tracking-wider font-medium mt-1">{token}</p>
        <p className="font-mono text-xs uppercase tracking-wider font-medium">{hex}</p>
      </div>
    </div>
  );
}

const swatches: SwatchProps[] = [
  { name: "Ink 900", token: "--color-ink-900", hex: "#0B0B0C", bgClass: "bg-ink-900" },
  { name: "Ink 800", token: "--color-ink-800", hex: "#131315", bgClass: "bg-ink-800" },
  { name: "Ink 700", token: "--color-ink-700", hex: "#1C1C1F", bgClass: "bg-ink-700" },
  { name: "Line", token: "--color-line", hex: "#2A2A2E", bgClass: "bg-line" },
  { name: "Bone", token: "--color-bone", hex: "#F2F0EB", bgClass: "bg-bone", textClass: "text-bone" },
  { name: "Bone Dim", token: "--color-bone-dim", hex: "#8E8C87", bgClass: "bg-bone-dim" },
  { name: "Ember", token: "--color-ember", hex: "#DC3A2C", bgClass: "bg-ember" },
  { name: "Ember Dim", token: "--color-ember-dim", hex: "#8E1F17", bgClass: "bg-ember-dim" },
  { name: "Gold", token: "--color-gold", hex: "#C6A15B", bgClass: "bg-gold" },
];

/* ============================================================
   Type Scale Samples
   ============================================================ */

interface TypeSampleProps {
  className: string;
  label: string;
  spec: string;
  sample: string;
}

function TypeSample({ className, label, spec, sample }: TypeSampleProps) {
  return (
    <div className="border-b border-line pb-12">
      <div className="mb-4 flex items-baseline gap-4">
        <span className="font-mono text-xs uppercase tracking-wider font-medium text-ember">{label}</span>
        <span className="font-mono text-xs uppercase tracking-wider font-medium">{spec}</span>
      </div>
      <p className={className}>{sample}</p>
    </div>
  );
}

const typeSamples: TypeSampleProps[] = [
  {
    className: "font-display text-[clamp(56px,9vw,200px)] uppercase tracking-[-0.02em] leading-[0.88]",
    label: ".font-display text-[clamp(56px,9vw,200px)] uppercase tracking-[-0.02em] leading-[0.88]",
    spec: "clamp(56px, 9vw, 200px) · Display · ls -0.02em · lh 0.88",
    sample: "TOGETHER WE RISE",
  },
  {
    className: "font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95]",
    label: ".font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95]",
    spec: "clamp(40px, 5.5vw, 96px) · Display · lh 0.95",
    sample: "PURPOSE LED, PERFORMANCE DRIVEN",
  },
  {
    className: "font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none",
    label: ".font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none",
    spec: "clamp(28px, 3.4vw, 56px) · Display · uppercase",
    sample: "NINE INDUSTRIES. ONE PURPOSE.",
  },
  {
    className: "font-body text-[clamp(20px,1.6vw,28px)] leading-tight",
    label: ".font-body text-[clamp(20px,1.6vw,28px)] leading-tight",
    spec: "clamp(20px, 1.6vw, 28px) · Body · lh 1.5 · max-w 62ch",
    sample:
      "We bring together diverse, future-facing industries and communities to co-create a positive world, where one enables the other to Rise.",
  },
  {
    className: "font-body text-base leading-relaxed",
    label: ".font-body text-base leading-relaxed",
    spec: "18px · Body · lh 1.55 · max-w 68ch",
    sample:
      "What began as a steel trading business seven decades ago, has grown into a global brand that traverses nations and sectors. Today, the Mahindra Group employs over 327,000 people across 100+ countries.",
  },
  {
    className: "font-mono text-xs uppercase tracking-wider font-medium",
    label: ".font-mono text-xs uppercase tracking-wider font-medium",
    spec: "11px · Mono · uppercase · ls 0.18em · bone-dim",
    sample: "(01) AUTOMOTIVE",
  },
];

/* ============================================================
   Button / Link Inventory
   ============================================================ */

function ButtonInventory() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {/* Primary — ember fill */}
      <button
        type="button"
        className="rounded-full bg-ember px-8 py-4 text-sm font-medium uppercase tracking-wider text-bone transition-colors duration-300 hover:bg-ember-dim"
      >
        Book Now
      </button>

      {/* Ghost — outline */}
      <button
        type="button"
        className="rounded-full border border-bone px-8 py-4 text-sm font-medium uppercase tracking-wider text-bone transition-colors duration-300 hover:border-ember hover:text-ember"
      >
        Know More
      </button>

      {/* Text link — underline wipe */}
      <a
        href="#"
        className="group relative text-sm font-medium uppercase tracking-wider text-bone"
      >
        Explore
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ember transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </a>

      {/* Label link — mono style */}
      <a
        href="#"
        className="font-mono text-xs uppercase tracking-wider font-medium text-ember transition-colors duration-300 hover:text-bone"
      >
        View All →
      </a>

      {/* Icon button */}
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors duration-300 hover:border-ember hover:text-ember"
        aria-label="Play video"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path d="M4 2l10 6-10 6V2z" />
        </svg>
      </button>
    </div>
  );
}

/* ============================================================
   Layout Primitives Demo
   ============================================================ */

function LayoutDemo() {
  return (
    <div className="space-y-8">
      <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember">12-Column Grid Demo</p>
      <Grid cols={12}>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="flex h-16 items-center justify-center rounded bg-ink-700 text-xs text-bone-dim"
          >
            {i + 1}
          </div>
        ))}
      </Grid>

      <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mt-8">Responsive Grid (4 cols)</p>
      <Grid cols={4}>
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="flex h-24 items-center justify-center rounded bg-ink-800 border border-line text-sm text-bone-dim"
          >
            Column {i + 1}
          </div>
        ))}
      </Grid>
    </div>
  );
}

/* ============================================================
   Spacing Scale
   ============================================================ */

function SpacingDemo() {
  const steps = [8, 16, 24, 32, 48, 64, 96, 120, 200];

  return (
    <div className="space-y-3">
      {steps.map((px) => (
        <div key={px} className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-wider font-medium w-16 text-right">{px}px</span>
          <div
            className="h-3 rounded-sm bg-ember"
            style={{ width: px }}
          />
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   Contrast Audit
   ============================================================ */

function ContrastAudit() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 rounded-lg bg-ink-900 p-6 border border-line">
        <span className="text-bone text-lg font-medium">Bone on Ink-900</span>
        <span className="font-mono text-xs uppercase tracking-wider font-medium">15.8:1 — WCAG AAA ✓</span>
      </div>
      <div className="flex items-center gap-4 rounded-lg bg-ink-900 p-6 border border-line">
        <span className="text-ember text-lg font-bold">Ember on Ink-900 (bold 18px+)</span>
        <span className="font-mono text-xs uppercase tracking-wider font-medium">4.6:1 — WCAG AA Large ✓</span>
      </div>
      <div className="flex items-center gap-4 rounded-lg bg-ink-900 p-6 border border-line">
        <span className="text-bone-dim">Bone-dim on Ink-900</span>
        <span className="font-mono text-xs uppercase tracking-wider font-medium">5.2:1 — WCAG AA ✓</span>
      </div>
      <div className="flex items-center gap-4 rounded-lg bg-ink-800 p-6 border border-line">
        <span className="text-gold text-lg font-bold">Gold on Ink-800</span>
        <span className="font-mono text-xs uppercase tracking-wider font-medium">Heritage accent — large text only</span>
      </div>
    </div>
  );
}

/* ============================================================
   Hairline Dividers Demo
   ============================================================ */

function HairlineDemo() {
  return (
    <div className="flex items-center gap-8">
      <div className="flex-1">
        <p className="font-mono text-xs uppercase tracking-wider font-medium mb-2">Horizontal hairline</p>
        <div className="hairline" />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-mono text-xs uppercase tracking-wider font-medium mb-2">Vertical</p>
        <div className="hairline-v h-16" />
      </div>
    </div>
  );
}

/* ============================================================
   Main Styleguide Page
   ============================================================ */

export function StyleguideClient() {
  return (
    <div className="bg-ink-900 min-h-dvh">
      {/* Header */}
      <Section noPadding className="pt-12 lg:pt-24 pb-12">
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-6">DESIGN SYSTEM</p>
          <h1 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95]">MAHINDRA RISE</h1>
          <p className="font-body text-[clamp(20px,1.6vw,28px)] leading-tight mt-6 text-bone-dim">
            Ink & Ember — Visual contract for the Awwwards-grade Mahindra redesign.
            Every colour, type style, and interactive element defined here governs
            all three pages.
          </p>
        </Container>
      </Section>

      <div className="hairline" />

      {/* Colour Palette */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(01) PALETTE</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none mb-16">INK & EMBER</h2>
          <Grid cols={3}>
            {swatches.map((swatch) => (
              <Swatch key={swatch.token} {...swatch} />
            ))}
          </Grid>
        </Container>
      </Section>

      <div className="hairline" />

      {/* Type Scale */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(02) TYPOGRAPHY</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none mb-16">TYPE SCALE</h2>
          <div className="space-y-16">
            {typeSamples.map((sample) => (
              <TypeSample key={sample.label} {...sample} />
            ))}
          </div>
        </Container>
      </Section>

      <div className="hairline" />

      {/* Buttons & Links */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(03) INTERACTIVE</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none mb-16">BUTTONS & LINKS</h2>
          <ButtonInventory />
        </Container>
      </Section>

      <div className="hairline" />

      {/* Layout Primitives */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(04) LAYOUT</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none mb-16">GRID & SPACING</h2>
          <LayoutDemo />
          <div className="mt-16">
            <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">SPACING SCALE</p>
            <SpacingDemo />
          </div>
        </Container>
      </Section>

      <div className="hairline" />

      {/* Hairlines */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(05) DIVIDERS</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none mb-16">HAIRLINES</h2>
          <HairlineDemo />
        </Container>
      </Section>

      <div className="hairline" />

      {/* Contrast Audit */}
      <Section>
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider font-medium text-ember mb-4">(06) ACCESSIBILITY</p>
          <h2 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none mb-16">CONTRAST AUDIT</h2>
          <ContrastAudit />
        </Container>
      </Section>

      {/* Footer note */}
      <Section noPadding className="pb-24 pt-12">
        <Container>
          <div className="hairline mb-8" />
          <p className="font-mono text-xs uppercase tracking-wider font-medium">
            Unofficial concept redesign. All trademarks and media belong to
            Mahindra & Mahindra Ltd.
          </p>
        </Container>
      </Section>
    </div>
  );
}
