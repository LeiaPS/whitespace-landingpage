import { useState } from "react";
import { yorWorkItems, yourData } from "./tests";
import { ourSponsorsItems } from "./tests/mocks/ourSponsors";
import {
  Customise,
  Header,
  NavMenu,
  OurSponsors,
  Pricing,
  WorkManagement,
} from "./ui/components";
import { HeroSection } from "./ui/components/heroSection";
import { YourData } from "./ui/components/yourData";
import { YourWork } from "./ui/components/yourWork";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WorkManagement />
      <Customise />
      <Pricing />
      <YourWork itemsYourWork={yorWorkItems} />
     <YourData yourDataItems={yourData} />
     <OurSponsors ourSponsorsItems={ourSponsorsItems}  />
    </div>
  );
}

export default App;
