"use client";

import { IBadgeProps } from "@/@types/Hero.types";
import React from "react";
import CountUp from "react-countup";

const Badge: React.FC<IBadgeProps> = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles} `}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2 -ml-1">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} duration={4} delay={1} />
          {endCountText}
        </div>
        <div className="max-w-[80px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
