import React from "react";
import { Card, CardHeader } from "../ui/card";
import { IProjectCardProps } from "@/@types/Project.types";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Github, Link2Icon } from "lucide-react";
import { IEventCardProps } from "@/@types/Event.types";

const CommunityCard: React.FC<IEventCardProps> = ({ event }) => {
  const { img, title, date, description, link, event_name } = event;
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
          <Image
            src={img}
            // src={"/events/gccdkolextended.png"}
            width={350}
            height={350}
            alt={title}
            priority
            className="absolute bottom-0 shadow-2xl rounded-t-lg w-full h-full object-cover transition-all duration-200 group-hover:scale-105 group-hover:shadow-3xl "
          />
          {/* buttons */}
          <div className="flex gap-x-4">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={link as string}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Link2Icon />
            </Link>
            {/* <Link
              target="_blank"
              rel="noopener noreferrer"
              href={github}
              className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
            >
              <Github />
            </Link> */}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        {/* <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {category}
        </Badge> */}
        <h4 className="h4 mb-1">{title}</h4>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
    </Card>
  );
};

export default CommunityCard;
