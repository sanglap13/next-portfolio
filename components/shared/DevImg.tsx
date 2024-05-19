import { IDevImgProps } from "@/@types/Hero.types";
import Image from "next/image";
import React from "react";

const DevImg: React.FC<IDevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="Sanglap Mridha" />
    </div>
  );
};

export default DevImg;
