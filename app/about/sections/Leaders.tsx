"use client";

import { useState } from "react";
import Image from "next/image";
import { Section, Container, Grid } from "@/components/layout";
import { useCursor } from "@/lib/hooks/useCursor";

const BOARD_DIRECTORS = [
  { name: "Anand Mahindra", title: "Chairman, Mahindra Group", src: "https://www.mahindra.com/sites/default/files/2022-10/Anand%20Mahindra%20desktop.jpg" },
  { name: "Dr. Anish Shah", title: "Managing Director & CEO", src: "https://www.mahindra.com/sites/default/files/2025-05/Dr%20Anish%20Shah_Thumbmail.webp" },
  { name: "Rajesh Jejurikar", title: "Executive Director, Auto & Farm", src: "https://www.mahindra.com/sites/default/files/2025-12/Mahindra%20Rise%20Rajesh%20Image%20413%20%C3%97%20430%20px.webp" },
  { name: "Shikha Sharma", title: "Independent Director", src: "https://www.mahindra.com/sites/default/files/2022-10/shikha-sharma%20desktop.jpg" },
  { name: "Nisaba Godrej", title: "Independent Director", src: "https://www.mahindra.com/sites/default/files/2022-10/Nisaba-Godrej%20desktop.jpg" },
  { name: "Muthiah Murugappan", title: "Independent Director", src: "https://www.mahindra.com/sites/default/files/2022-10/MUTHIAH-413-X-430.jpg" },
  { name: "Padmasree Warrior", title: "Independent Director", src: "https://www.mahindra.com/sites/default/files/2024-09/Ms-Padmashree-Warrior-Thumbnail.webp" },
  { name: "Ranjan Pant", title: "Independent Director", src: "https://www.mahindra.com/sites/default/files/2024-05/Pant-413-x-430_0.jpg" },
];

const EXECUTIVE_BOARD = [
  { name: "Amarjyoti Barua", title: "Group CFO", src: "https://www.mahindra.com/sites/default/files/2025-03/Amarjyoti-Barua_413x430_0.webp" },
  { name: "Mohit Joshi", title: "MD & CEO, Tech Mahindra", src: "https://www.mahindra.com/sites/default/files/2024-04/Thumbnail_413x430_Mohit-Joshi.jpg" },
  { name: "Mohit Kapoor", title: "Group CTO", src: "https://www.mahindra.com/sites/default/files/2024-08/Thumbnail_413x430_mohit-kapoor_1.webp" },
  { name: "Raul Rebello", title: "MD & CEO, Mahindra Finance", src: "https://www.mahindra.com/sites/default/files/2025-03/Raul-Rebello_413x430.webp" },
  { name: "Veejay Ram Nakra", title: "President, Automotive Sector", src: "https://www.mahindra.com/sites/default/files/2025-03/Veejay-Ram-Nakra_413x430_0.webp" },
  { name: "Velusamy R", title: "President, Automotive Technology", src: "https://www.mahindra.com/sites/default/files/2025-09/Velu%20413%20%C3%97%20430%20px%201.webp" },
  { name: "Vinod Sahay", title: "President, Truck & Bus", src: "https://www.mahindra.com/sites/default/files/2025-03/Vinod%20Sahay_thumbail.jpg" },
  { name: "Hemant Sikka", title: "President, Farm Equipment", src: "https://www.mahindra.com/sites/default/files/2022-10/HEMANT-SIKKA-413-X-430.jpg" },
  { name: "Amit Kumar Sinha", title: "MD & CEO, Mahindra Lifespaces", src: "https://www.mahindra.com/sites/default/files/2022-10/AMIT-SINHA-413-X-430.jpg" },
  { name: "Abanti Sankaranarayanan", title: "Chief Group Affairs Officer", src: "https://www.mahindra.com/sites/default/files/2024-08/Abanti_Thumbnail_0.webp" },
];

export function Leaders() {
  return (
    <Section className="bg-ink-900 border-t border-line">
      <Container>
        <p className="font-mono text-xs uppercase tracking-wider font-medium text-gold mb-4">(05) LEADERSHIP</p>
        <h2 className="font-display text-[clamp(30px,5.5vw,45px)] uppercase leading-[0.95] mb-16">MEET OUR LEADERS</h2>

        {/* Group 1: Board of Directors */}
        <div className="mb-20">
          <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-gold mb-8">BOARD OF DIRECTORS</h3>
          <Grid cols={4} className="gap-6">
            {BOARD_DIRECTORS.map((person) => (
              <LeaderCard key={person.name} person={person} />
            ))}
          </Grid>
        </div>

        {/* Group 2: Executive Board */}
        <div>
          <h3 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone-dim mb-8">GROUP EXECUTIVE BOARD</h3>
          <Grid cols={4} className="gap-6">
            {EXECUTIVE_BOARD.map((person) => (
              <LeaderCard key={person.name} person={person} />
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

function LeaderCard({
  person,
}: {
  person: { name: string; title: string; src: string };
}) {
  const { setVariant, setCursorText } = useCursor();
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group relative flex h-[340px] flex-col justify-end overflow-hidden rounded-2xl bg-ink-800 border border-line transition-all duration-500 hover:border-gold hover:shadow-2xl"
      onMouseEnter={() => {
        setVariant("view");
        setCursorText("PROFILE");
      }}
      onMouseLeave={() => {
        setVariant("default");
        setCursorText("");
      }}
    >
      {/* Portrait */}
      {imgError ? (
        <div className="absolute inset-0 bg-ink-800 flex items-center justify-center p-4 text-gold">
          <span className="font-mono text-xs uppercase tracking-wider font-medium font-bold text-center">{person.name}</span>
        </div>
      ) : (
        <Image
          src={person.src}
          alt={person.name}
          fill
          sizes="280px"
          onError={() => setImgError(true)}
          className="object-cover grayscale opacity-60 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
        />
      )}

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />

      {/* Info Slide Up */}
      <div className="relative z-20 p-6 transition-transform duration-300 group-hover:-translate-y-2">
        <h4 className="font-display text-[clamp(28px,3.4vw,56px)] uppercase leading-none text-bone text-xl group-hover:text-gold transition-colors">
          {person.name}
        </h4>
        <p className="font-mono text-xs uppercase tracking-wider font-medium text-bone-dim mt-1 text-[11px]">{person.title}</p>
      </div>
    </div>
  );
}
