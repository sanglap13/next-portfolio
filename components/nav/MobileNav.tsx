import React from "react";
//components
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "../shared/Logo";
import Nav from "./Nav";
import Socials from "../shared/Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6 "
              linkStyles="text-2xl"
              underlineStyles=""
            />
            <Socials containerStyles="flex gap-x-4" iconStyles="tex-2xl" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
