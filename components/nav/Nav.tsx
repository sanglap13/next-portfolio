import React from "react";
import Link from "next/link";

//nextHooks
import { usePathname } from "next/navigation";
//constants
import { NAVBAR_LINKS } from "@/constants/NavbarLinks";
//framerMotion
import { motion } from "framer-motion";
//types
import { INavProps } from "@/@types/Navbar.types";

const Nav: React.FC<INavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const paths = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {NAVBAR_LINKS.map((link, index) => {
        const { path, name } = link;
        return (
          <Link key={index} href={path} className={`capitalize ${linkStyles}`}>
            {path === paths && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
