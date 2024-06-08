import React, { useState } from "react";
//components
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "../shared/Logo";
import Nav from "./Nav";
import Socials from "../shared/Socials";

const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavClick = () => {
    setIsDrawerOpen(false);
  };
  return (
    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <div onClick={handleNavClick}>
              <Nav
                containerStyles="flex flex-col items-center gap-y-6 "
                linkStyles="text-2xl"
              />
            </div>
            <Socials containerStyles="flex gap-x-4" iconStyles="tex-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
