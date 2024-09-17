import React from "react";
import Feature from "../Feature";
import { featuresData } from "@/models/feature-data";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="w-screen overflow-hidden">
      <div className="bg-[url('/section-background.png')] space-y-9 bg-cover bg-center bg-no-repeat px-5 md:p-10 bg-[#C3F384]">
        <div className="pb-12 space-y-5">
          <p className="font-bold text-[26px] md:text-5xl text-left">
            Send without limit:
            <br /> get paid seamlessly
          </p>
          <p className="text-[#473893] text-base md:text-3xl">
            Checkout benefits for our customer
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuresData.map((feature, index) => (
              <Feature key={index} index={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="w-full flex justify-center py-5 bg-[#F4F2FF] px-8">
        <div className="flex gap-3 items-center">
          <Image
            src={"/appstore-logo.png"}
            alt="logo"
            width={223}
            height={66}
          />
          <Image
            src={"/playstore-logo.png"}
            alt="logo"
            width={223}
            height={66}
          />
        </div>
      </div> */}
      <div className="flex py-5 sm:flex-row gap-4 sm:gap-6 items-center justify-center">
        <a
          href=""
          target="_blank"
          className="w-36 sm:w-40 md:w-48 lg:w-56 h-auto">
          <Image
            src="/appstore-logo.png"
            alt="App Store"
            width={223}
            height={66}
            layout="responsive"
            className="object-contain"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=co.wallx.fasepay"
          target="_blank"
          className="w-36 sm:w-40 md:w-48 lg:w-56 h-auto">
          <Image
            src="/playstore-logo.png"
            alt="Play Store"
            width={223}
            height={66}
            layout="responsive"
            className="object-contain"
          />
        </a>
      </div>
    </section>
  );
}
