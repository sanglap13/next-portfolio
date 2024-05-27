//components
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";

import Hero from "@/components/sections/Hero";
import TechTalks from "@/components/sections/TechTalks";
import Work from "@/components/sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechTalks />
      <Work />
      <Events />
    </main>
  );
}
