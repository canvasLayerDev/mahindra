import type { Metadata } from "next";
import { AboutHero } from "./sections/AboutHero";
import { CorporateFilm } from "./sections/CorporateFilm";
import { KeyFacts } from "./sections/KeyFacts";
import { OurStory } from "./sections/OurStory";
import { Leaders } from "./sections/Leaders";
import { ESGFocus } from "./sections/ESGFocus";
import { CulturalMuseum } from "./sections/CulturalMuseum";
import { Education } from "./sections/Education";
import { GetInTouch } from "./sections/GetInTouch";

export const metadata: Metadata = {
  title: "The Group & Founders Tribute",
  description:
    "Paying tribute to visionary founders J. C. Mahindra & K. C. Mahindra. 81 years of Mahindra Group — $30B+ turnover, 327K+ people across 100+ countries.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CorporateFilm />
      <KeyFacts />
      <OurStory />
      <Leaders />
      <ESGFocus />
      <CulturalMuseum />
      <Education />
      <GetInTouch />
    </>
  );
}
