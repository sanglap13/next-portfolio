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
import Link from "next/link";
import { Button } from "../ui/button";

const Events = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6 text-center mx-auto">My Events</h2>
          <p className="subtitle mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link href="/community">
            <Button>All Events</Button>
          </Link>
        </div>
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
                  <CardHeader className="p-0 mb-6">
                    <Image
                      src={img}
                      width={400}
                      height={400}
                      alt="img"
                      priority
                      rel="noopener noreferrer"
                      className="rounded-lg shadow-xl mb-4"
                    />
                    {/* name */}
                    <div className="flex flex-col gap-1">
                      <CardTitle className="text-primary">{title}</CardTitle>
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
