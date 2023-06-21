import Hero from "./Hero";
import BriefAboutUs from "./BriefAboutUs";
import BriefServices from "./BriefServices";
import BriefProducts from "./BriefProducts";
import Partners from "./Partners";

export default function Home() {
  return (
    <div >
      <Hero />
      <BriefAboutUs />
      <BriefServices />
      <BriefProducts />
      <Partners />
    </div>
  );
}
