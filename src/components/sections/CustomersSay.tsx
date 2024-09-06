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
        breakpoint: 1024, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 testimonial on mobile screens
        },
      },

      {
        breakpoint: 768, // For tablet screens
        settings: {
          slidesToShow: 1, // Show 1 testimonial on tablet screens
        },
      },

      {
        breakpoint: 480, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 testimonial on mobile screens
        },
      },
    ],
  };
  return (
    <section className="bg-[#F4F2FF] w-screen !overflow-hidden py-12 customers-say">
      <div className="w-full md:max-w-[560px] ">
        <h2 className="font-bold text-3xl md:text-5xl pl-5 md:pl-[10vw] 2xl:pl-[15vw]">
          What our customers are saying
        </h2>
      </div>

      {/* <div className="py-7">
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
      </div> */}
      <div className="max-w-5xl md:max-w-7xl 2xl:max-w-[75vw] mx-auto py-7">
        <Slider {...settings}>
          {testimonialsData.map((test, index) => (
            <div key={index} className="mx-24 2xl:mx-16 flex justify-center">
              <Testimonial
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
