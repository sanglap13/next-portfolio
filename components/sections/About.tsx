import Image from "next/image";
import React from "react";
import DevImg from "../shared/DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const About = () => {
  // const getData = (arr, item) => {
  //   return arr.find((item) => item.title === title)
  // }
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
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
              imgSrc="/hero/smridha3.png"
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
                <TabsContent value={"personal"}>personal</TabsContent>
                <TabsContent value={"qualifications"}>
                  qualifications
                </TabsContent>
                <TabsContent value={"skills"}>skills</TabsContent>
                <TabsContent value={"communities"}>communities</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
