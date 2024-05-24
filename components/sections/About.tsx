import Image from "next/image";
import React from "react";
import DevImg from "../shared/DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  ABOUT_COMMUNITY,
  ABOUT_INFO,
  ABOUT_QUALIFICATION,
  ABOUT_SKILLS,
} from "@/constants/AboutInfo";
import { Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  // const getData = (arr, item) => {
  //   return arr.find((item) => item.title === title)
  // }
  return (
    <section className="xl:h-[860px] pb-12 px-2 xl:py-24 xl:px-24">
      <div className="conatiner mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              // imgSrc="/about/developer.png"
              imgSrc="/about/sanglapmridha.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[126px] xl:w-auto" value={"personal"}>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[126px] xl:w-auto"
                  value={"qualifications"}
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[126px] xl:w-auto" value={"skills"}>
                  Skill
                </TabsTrigger>
                <TabsTrigger
                  className="w-[126px] xl:w-auto"
                  value={"communities"}
                >
                  Communities
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}

                <TabsContent value={"personal"}>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality 1- years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and enaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {ABOUT_INFO.map((item, index) => {
                        const { icon, text } = item;
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{icon}</div>
                            <div>{text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Profiency</div>
                      <div className="border-b border-border"></div>
                      <div>English, Bengali, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value={"qualifications"}>
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awsome Journey
                    </h3>
                    {/* experience n education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8 pl-10 sm:pl-6 md:pl-0">
                      {/* experience */}

                      <div className="flex gap-x-4  text-[22px] ">
                        <Briefcase className="text-primary" />
                        {ABOUT_QUALIFICATION.map((item, index) => {
                          const { title, data } = item;
                          if (title === "experience") {
                            return (
                              <div key={index}>
                                <div className="capitalize font-medium text-primary mb-2">
                                  {title}
                                </div>
                                <div className="flex flex-col gap-y-6">
                                  {data.map((item, index) => {
                                    const {
                                      organization,
                                      degree_or_role,
                                      years,
                                    } = item;
                                    return (
                                      <div
                                        className="flex gap-x-6 group "
                                        key={index}
                                      >
                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                          <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                        </div>
                                        <div>
                                          <div className="font-semibold text-xl leading-none mb-2">
                                            {organization}
                                          </div>
                                          <div className="text-lg leading-none text-muted-foreground mb-1">
                                            {degree_or_role}
                                          </div>
                                          <div className="text-base font-medium">
                                            {years}
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>

                      {/* education */}

                      <div className="flex gap-x-4  text-[22px] ">
                        <GraduationCap size={28} className="text-primary" />
                        {ABOUT_QUALIFICATION.map((item, index) => {
                          const { title, data } = item;
                          if (title === "education") {
                            return (
                              <div key={index}>
                                <div className="capitalize font-medium text-primary mb-2">
                                  {title}
                                </div>
                                <div className="flex flex-col gap-y-6">
                                  {data.map((item, index) => {
                                    const {
                                      organization,
                                      degree_or_role,
                                      years,
                                    } = item;
                                    return (
                                      <div
                                        className="flex gap-x-6 group "
                                        key={index}
                                      >
                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                          <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                        </div>
                                        <div>
                                          <div className="font-semibold text-xl leading-none mb-2">
                                            {organization}
                                          </div>
                                          <div className="text-lg leading-none text-muted-foreground mb-1">
                                            {degree_or_role}
                                          </div>
                                          <div className="text-base font-medium">
                                            {years}
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value={"skills"}>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I use Everyday</h3>
                    <div className="text-left mb-8">
                      <h4 className="text-xl font-semibold mb-2 text-center xl:text-left">
                        Skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div className="xl:-ml-[33%]">
                        {ABOUT_SKILLS.map((item, index) => {
                          const { title, data } = item;
                          return (
                            <div
                              // className=" xl:-ml-52"
                              key={index}
                            >
                              {data.map((item, index) => {
                                if (title === "skills") {
                                  const { name_or_img } = item;
                                  return (
                                    <div
                                      className="w-2/4 text-center xl:text-left mx-auto"
                                      key={index}
                                    >
                                      <div className="font-medium">
                                        {name_or_img}
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div>
                        {ABOUT_SKILLS.map((item, index) => {
                          const { title, data } = item;
                          return (
                            <div
                              className="flex gap-x-8 justify-center xl:justify-start"
                              key={index}
                            >
                              {data.map((item, index) => {
                                if (title === "tools") {
                                  const { name_or_img } = item;
                                  return (
                                    <div
                                      // className="w-2/4 text-center xl:text-left mx-auto"
                                      key={index}
                                    >
                                      <Image
                                        src={name_or_img}
                                        alt="tool"
                                        width={48}
                                        height={48}
                                        priority
                                      />
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value={"communities"}>
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Position of Responsibilities
                    </h3>
                    {/* communitites */}
                    {/* <div className="grid md:grid-cols-2 gap-y-8 pl-10 sm:pl-6 md:pl-0"> */}
                    <div className="flex flex-col gap-x-4  text-[22px] pl-[10%]  sm:px-[20%] md:px-[30%] semi-xl:px-[35%] xl:px-0">
                      {ABOUT_COMMUNITY.map((item, index) => {
                        const { organization, position, years } = item;
                        return (
                          <div className="flex mb-4 gap-x-6 group " key={index}>
                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                              <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                            </div>
                            <div>
                              <div className="font-semibold text-xl leading-none mb-2 text-primary">
                                {organization}
                              </div>
                              <div className="text-lg leading-none font-semibold  mb-1">
                                {position}
                              </div>
                              <div className="text-base text-muted-foreground font-medium">
                                {years}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* </div> */}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
