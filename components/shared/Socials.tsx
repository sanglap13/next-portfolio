"use client";

import { SOCIAL_LINKS } from "@/constants/SocialLinks";
import Link from "next/link";
import React from "react";

const Socials = ({ containerStyles, iconStyles }: any) => {
  return (
    <div className={`${containerStyles}`}>
      {SOCIAL_LINKS.map((social, index) => {
        const { path, name, icon } = social;
        return (
          <Link href={path} key={index}>
            <div className={`${iconStyles}`}>{icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
