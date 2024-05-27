"use client";

import { ISocialsProps } from "@/@types/Hero.types";
import { SOCIAL_LINKS } from "@/constants/SocialLinks";
import Link from "next/link";
import React from "react";

const Socials: React.FC<ISocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {SOCIAL_LINKS.map((social, index) => {
        const { path, name, icon } = social;
        return (
          <Link href={path} key={index} target="_blank">
            <div className={`${iconStyles}`}>{icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
