import type { Metadata } from "next";
import { CareersHero } from "./sections/CareersHero";
import { LifeAtMahindra } from "./sections/LifeAtMahindra";
import { JobSearchPortal } from "./sections/JobSearchPortal";
import { DiversityInclusion } from "./sections/DiversityInclusion";

export const metadata: Metadata = {
  title: "Careers & Global Talent Opportunities | Mahindra Group",
  description:
    "Explore career opportunities at Mahindra Group, Mahindra Accelerated Leadership Track (MALT), Mahindra Leadership University, and open positions across tech & auto.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <LifeAtMahindra />
      <JobSearchPortal />
      <DiversityInclusion />
    </>
  );
}
