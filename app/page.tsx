import { Hero } from "./(home)/sections/Hero";

import { PurposeLed } from "./(home)/sections/PurposeLed";
import { PerformanceDriven } from "./(home)/sections/PerformanceDriven";
import { FutureReady } from "./(home)/sections/FutureReady";
import { LatestNews } from "./(home)/sections/LatestNews";
import { FAQ } from "./(home)/sections/FAQ";
import { WhatWeDo } from "./(home)/sections/WhatWeDo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />

      <PurposeLed />
      <PerformanceDriven />
      <FutureReady />
      <LatestNews />

    </>
  );
}
