import Link from "next/link";
import React from "react";

import { Download, Send } from "lucide-react";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import { Button } from "../ui/button";
//constants
import { NAVBAR_LINKS, PAGE_LINKS } from "@/constants/NavbarLinks";
//components
import Socials from "../shared/Socials";
import DevImg from "../shared/DevImg";
import Badge from "../shared/Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Sanglap Mridha</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={PAGE_LINKS.contact}>
                <Button className="gap-x-2">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>
              <Button variant={"secondaryMod"} className="gap-x-2">
                Resume
                <Download size={18} />
              </Button>
            </div>
            {/* social links */}
            <Socials
              containerStyles={"flex pl-2 gap-x-6 mx-auto xl:mx-0"}
              iconStyles={
                "text-foreground text-[22px] hover:text-primary transition-all cursor-pointer"
              }
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative ">
            {/* badge */}
            <Badge
              containerStyles="absolute top-[15%] -left-[5rem] "
              icon={<RiBriefcase4Fill />}
              endCountNum={6}
              badgeText="Months of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[66%] -left-[1rem] "
              icon={<RiTodoFill />}
              endCountNum={10}
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[50%] -right-10 "
              icon={<RiTeamFill />}
              endCountNum={3}
              badgeText="Community Leader"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2  "></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/smridha3.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
