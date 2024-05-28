"use client";

import { IProjectProps } from "@/@types/Project.types";
import CommunityCard from "@/components/shared/CommunityCard";
import ProjectCard from "@/components/shared/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EVENTS_INFO } from "@/constants/EventsInfo";
import { PROJECT_INFO } from "@/constants/ProjectInfo";
import React, { useState } from "react";

//eventNames
const uniqueEvents = [
  "all projects",
  // ...Array.from(new Set(PROJECT_INFO.map((project) => project.eventName))),
  ...new Set(EVENTS_INFO.map((event) => event.event_name)),
];
console.log(uniqueEvents);

const Community = () => {
  const [eventNames, setEventNames] = useState(uniqueEvents);
  const [eventName, setEventName] = useState("all projects");

  const filteredEvents = EVENTS_INFO.filter((event) => {
    return eventName === "all projects"
      ? event
      : event.event_name === eventName;
  });
  console.log(filteredEvents);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Community Experience
        </h2>
        {/* tabs */}
        <Tabs defaultValue={eventName} className="mb-24 xl:mb-48">
          {/* <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {eventNames.map((eventName, index) => {
              return (
                <TabsTrigger
                  onClick={() => setEventName(eventName)}
                  value={eventName}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {eventName}
                </TabsTrigger>
              );
            })}
          </TabsList> */}
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredEvents.map((event, index) => {
              return (
                <TabsContent value={eventName} key={index}>
                  <CommunityCard event={event} />
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
