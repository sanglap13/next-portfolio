//components
import About from "@/components/sections/About";
import ContactMe from "@/components/sections/ContactMe";
import Events from "@/components/sections/Events";
import Hero from "@/components/sections/Hero";
import TechTalks from "@/components/sections/TechTalks";
import Work from "@/components/sections/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechTalks />
      <Work />
      <Events />
      <ContactMe />
    </main>
  );
}
