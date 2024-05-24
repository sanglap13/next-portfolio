//components
import About from "@/components/sections/About";
import Community from "@/components/sections/Community";
import Hero from "@/components/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Community />
    </main>
  );
}
