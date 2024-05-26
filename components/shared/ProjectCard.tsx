import React from "react";
import { Card, CardHeader } from "../ui/card";
import { IProjectCardProps } from "@/@types/Project.types";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Github, Link2Icon } from "lucide-react";

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
  const { image, catergory, name, description, link, github } = project;
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            src={image}
            width={247}
            height={250}
            alt={name}
            priority
            className="absolute bottom-0 shadow-2xl"
          />
          {/* buttons */}
          <div className="flex gap-x-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={link}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {catergory}
        </Badge>
        <h4 className="h4 mb-1">{name}</h4>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
