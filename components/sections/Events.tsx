"use client";

//swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import { EVENTS_INFO } from "@/constants/EventsInfo";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const Events = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">My Events</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-fit"
        >
          {EVENTS_INFO.map((event, index) => {
            const { title, description, date, img } = event;
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <Image
                      src={img}
                      width={400}
                      height={400}
                      alt="img"
                      priority
                      rel="noopener noreferrer"
                    />
                    {/* name */}
                    <div className="flex flex-col">
                      <CardTitle>{title}</CardTitle>
                      <p>{date}</p>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {description}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
