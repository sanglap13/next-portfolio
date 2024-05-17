import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo1.png"
        alt="logo"
        width={65}
        height={65}
        priority
        className="cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
