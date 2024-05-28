"use client";

import { IProjectProps } from "@/@types/Project.types";
import CommunityCard from "@/components/shared/CommunityCard";
import ProjectCard from "@/components/shared/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EVENTS_INFO } from "@/constants/EventsInfo";
import { PROJECT_INFO } from "@/constants/ProjectInfo";
import React, { useState } from "react";

//categories
const uniqueCategories = [
  "all projects",
  // ...Array.from(new Set(PROJECT_INFO.map((project) => project.category))),
  ...new Set(EVENTS_INFO.map((project) => project.event_name)),
];
console.log(uniqueCategories);

const Community = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = EVENTS_INFO.filter((project) => {
    return category === "all projects"
      ? project
      : project.event_name === category;
  });
  console.log(filteredProjects);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Community Experience
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          {/* <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList> */}
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <CommunityCard event={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Community;
