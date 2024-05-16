import React from "react";
import Link from "next/link";

//nextHooks
import { usePathname } from "next/navigation";
//constants
import { NAVBAR_LINKS } from "@/constants/NavbarLinks";

const Nav = ({ containerStyles, linkStyles }: any) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {NAVBAR_LINKS.map((link, index) => {
        const { path, name } = link;
        return (
          <Link key={index} href={path} className={`capitalize ${linkStyles}`}>
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
