import { Hero } from "./(home)/sections/Hero";
import { Manifesto } from "./(home)/sections/Manifesto";
import { WhatWeDo } from "./(home)/sections/WhatWeDo";
import { PurposeLed } from "./(home)/sections/PurposeLed";
import { PerformanceDriven } from "./(home)/sections/PerformanceDriven";
import { FutureReady } from "./(home)/sections/FutureReady";
import { LatestNews } from "./(home)/sections/LatestNews";
import { FAQ } from "./(home)/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <WhatWeDo />
      <PurposeLed />
      <PerformanceDriven />
      <FutureReady />
      <LatestNews />
      <FAQ />
    </>
  );
}
