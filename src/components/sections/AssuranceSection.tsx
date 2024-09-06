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
      className='bg-[url("/texture.png")] max-h-[760px] bg-[#111111] w-screen overflow-hidden p-12'>
      <div className="flex md:flex-row flex-col justify-between">
        <div className="space-y-5 md:w-1/2">
          <div>
            <h3 className="text-white text-center md:text-left text-xl md:text-5xl font-medium leading-12">
              "Rest assured, your business will
              <br className="hidden md:block" /> soar alongside the elite when
              you
              <br className="hidden md:block" /> choose the unparalleled safety
              <br className="hidden md:block" /> of PayCode for your payments".
            </h3>
          </div>

          <div className="hidden md:flex">
            <Image
              src="/cards-1.png"
              alt="logo"
              width={762}
              height={752}
              className="md:mt-[80px] 2xl:mt-[190px]"
            />
          </div>
        </div>

        <div className="w-full flex justify-center py-5">
          <Image
            src="/iphone-full.png"
            alt="logo"
            width={262}
            height={352}
            className="block md:hidden"
          />
        </div>

        <div className="mt-[190px] flex justify-center md:w-1/2">
          <Image
            src="/phone-model.png"
            alt="logo"
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
