import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Approach from "../components/home/Approach";
import Capabilities from "../components/home/Capabilities";
import WhoWeWorkWith from "../components/home/WhoWeWorkWith";
import Team from "../components/home/Team";
import PartnerProgram from "../components/home/PartnerProgram";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Capabilities />
      <WhoWeWorkWith />
      <Team />
      <PartnerProgram />
      <FAQ />
      <Contact />
    </main>
  );
}
