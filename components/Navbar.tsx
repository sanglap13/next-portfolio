"use client";

import React from "react";
//components
import ThemeToggler from "./theme/ThemeToggler";
import Logo from "./Logo";
import Nav from "./nav/Nav";
import MobileNav from "./nav/MobileNav";

const Navbar = () => {
  return (
    <header>
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
