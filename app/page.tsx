//components
import About from "@/components/sections/About";

import Hero from "@/components/sections/Hero";
import TechTalks from "@/components/sections/TechTalks";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechTalks />
    </main>
  );
}
