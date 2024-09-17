"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

export default function AssuranceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='bg-[url("/texture.png")] relative min-h-[760px] bg-[#111111] w-screen overflow-hidden p-12'>
      <div className="flex  md:flex-row flex-col justify-between">
        <div className="space-y-5 md:w-full ">
          <div className="w-full ">
            <h3
              // className=" text-white bg-red-500 w-[600px]"
              className="text-white  w-full max-w-[70vw] text-center md:text-left text-xl md:text-5xl font-medium md:leading-15">
              {`"Be rest assured, your business will soar alongside the elite when
              you choose the unparalleled safety of PayCode for your payments".`}
            </h3>
          </div>

          <div className="hidden md:flex">
            <Image
              src="/cards-1.png"
              alt="logo"
              width={762}
              height={752}
              className="hidden md:block absolute bottom-0"
            />
          </div>
        </div>

        <div className="w-full md:hidden flex justify-center py-5">
          <Image
            src="/iphone-full.png"
            alt="logo"
            width={262}
            height={352}
            className="block "
          />
        </div>

        <div className="mt-[150px] hidden absolute md:right-12 2xl:right-20 md:flex justify-center ">
          <Image
            src="/phone-model.png"
            alt="phone"
            width={418}
            height={820}
            className={`transition-transform duration-1000 ease-out transform ${
              isVisible ? "translate-y-0" : "translate-y-full"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
