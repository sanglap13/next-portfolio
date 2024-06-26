"use client";

import React, { useEffect, useState } from "react";
//components
import ThemeToggler from "./theme/ThemeToggler";
import Logo from "./shared/Logo";
import Nav from "./nav/Nav";
import MobileNav from "./nav/MobileNav";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [header, setHeader] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    //remove event listener
    return () => window.removeEventListener("scroll", scrollYPos as any);
  });
  return (
    <header
      className={`${
        header
          ? " py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#eff5ff]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] w-full bg-primary "
            />
            <ThemeToggler />
            {/* MobileNav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
