import { TECH_TALKS_INFO } from "@/constants/TechtalksInfo";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const TechTalks = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Tech Talks
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {TECH_TALKS_INFO.map((talk, index) => {
            const { icon, description, title, imgPath, redirection_link } =
              talk;
            return (
              <Card
                className="w-full max-w-[424px] h-fit  flex flex-col pb-5  justify-center items-center relative"
                key={index}
              >
                <a
                  href={redirection_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full mb-6 group"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      className="w-full transform transition duration-300 ease-in-out group-hover:scale-110"
                      src={imgPath}
                      width={400}
                      height={400}
                      alt="img"
                    />
                    <div className="absolute inset-0 semi-xl:bg-primary opacity-20 transition-opacity duration-300 ease-in-out group-hover:opacity-0 rounded-t-lg semi-xl:backdrop-blur-xl"></div>
                    {/* <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-xl font-bold opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0 shadow-md">
                      Click me
                    </div> */}
                  </div>
                </a>

                <CardContent className="text-center">
                  <CardTitle className="mb-4 text-primary">{title}</CardTitle>
                  <CardDescription className="text-lg">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechTalks;
