"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Section, Container } from "@/components/layout";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { useCursor } from "@/lib/hooks/useCursor";

const INSTITUTES = [
  {
    name: "Mahindra University",
    desc: "An Interdisciplinary Global Education institution in Hyderabad offering engineering, management, law and liberal arts.",
    src: "https://www.mahindra.com/sites/default/files/img/indtitute1.webp",
  },
  {
    name: "MUWCI (Mahindra United World College of India)",
    desc: "A prestigious International Baccalaureate residential college in Pune fostering global peace and sustainable future.",
    src: "https://www.mahindra.com/sites/default/files/img/muwci.webp",
  },
  {
    name: "Mahindra International School Pune",
    desc: "India's first IB World School nurturing curious minds and global citizenship.",
    src: "https://www.mahindra.com/sites/default/files/img/mis-pune.webp",
  },
  {
    name: "Mahindra Academy Mumbai",
    desc: "Empowering children with holistic education and value-based development in Malad, Mumbai.",
    src: "https://www.mahindra.com/sites/default/files/img/mahindra-academy-mum.webp",
  },
  {
    name: "JC Mahindra Memorial School Khopoli",
    desc: "Providing quality education and sports excellence to rural communities in Khopoli.",
    src: "https://www.mahindra.com/sites/default/files/img/jc-memorial.webp",
  },
  {
    name: "Mahindra Academy Zaheerabad",
    desc: "Nurturing agricultural and technical youth education near Mahindra manufacturing hubs.",
    src: "https://www.mahindra.com/sites/default/files/img/mahindra-academy-zaherabad.webp",
  },
  {
    name: "Mahindra World School Chennai",
    desc: "A CBSE institution inside Mahindra World City Chennai focusing on experiential learning.",
    src: "https://www.mahindra.com/sites/default/files/img/mws-chennai.webp",
  },
];

export function Education() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <Section className="bg-ink-900 border-t border-line">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wider font-medium text-gold mb-4">(08) EDUCATION INSTITUTES</p>
        <h2 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] mb-16">SEVEN INSTITUTES OF ACADEMIC EXCELLENCE</h2>

        <div className="border-t border-line">
          {INSTITUTES.map((inst, idx) => (
            <InstituteRow
              key={inst.name}
              institute={inst}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function InstituteRow({
  institute,
  isOpen,
  onToggle,
}: {
  institute: (typeof INSTITUTES)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { setVariant } = useCursor();
  const [imgError, setImgError] = useState(false);

  useGSAP(
    () => {
      const body = bodyRef.current;
      if (!body) return;

      if (isOpen) {
        gsap.to(body, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(body, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-8 text-left transition-all duration-300 hover:pl-4"
        onMouseEnter={() => setVariant("ring")}
        onMouseLeave={() => setVariant("default")}
      >
        <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone group-hover:text-gold transition-colors">
          {institute.name}
        </h3>
        <span className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-gold font-mono">{isOpen ? "−" : "+"}</span>
      </button>

      <div ref={bodyRef} className="h-0 overflow-hidden opacity-0">
        <div className="pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative h-[280px] overflow-hidden rounded-2xl bg-ink-800 border border-line">
            {!imgError && (
              <Image
                src={institute.src}
                alt={institute.name}
                fill
                sizes="600px"
                onError={() => setImgError(true)}
                className="object-cover"
              />
            )}
          </div>
          <div className="lg:col-span-5">
            <p className="font-body text-[clamp(20px,1.6vw,28px)] leading-tight text-bone-dim mb-6">{institute.desc}</p>
            <AnimatedLink href="/about" underlineColor="bg-gold">
              Learn More →
            </AnimatedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
