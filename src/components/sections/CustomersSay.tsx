"use client";

import React from "react";
import { testimonialsData } from "@/models/testimonial-data";
import Testimonial from "../Testimonial";
import Image from "next/image";
import Slider from "react-slick";
// import "./CustomArrows.css";
import PrevArrow from "../PrevArrow";
import NextArrow from "../NextArrow";

export default function CustomersSay() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 testimonials on larger screens
    slidesToScroll: 2,
    centerMode: true,

    // variableWidth: true,
    initialSlide: 0,
    centerPadding: "10px",
    screenLeft: "450px",
    screenX: "450px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 testimonial on mobile screens
        },
      },
    ],
  };
  return (
    <section className="bg-[#F4F2FF] py-12 customers-say">
      <div className="w-[560px] ">
        <h2 className="font-bold text-5xl pl-[10vw] 2xl:pl-[15vw]">
          What our customers are saying
        </h2>
      </div>

      <div className="py-7">
        <Slider {...settings} className="flex justify-center">
          {testimonialsData.map((test, index) => (
            <div key={index} className="md:mx-[10vw] 2xl:mx-[15vw]">
              <Testimonial
                key={index}
                name={test.name}
                jobTitle={test.jobTitle}
                image={test.image}
                testimonial={test.testimonial}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
