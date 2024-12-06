import React from "react";
import Feature from "../Feature";
import { featuresData } from "@/models/feature-data";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="w-screen overflow-hidden bg-[url('/section-background.png')] bg-cover bg-center bg-no-repeat space-y-9  px-5 md:p-10 bg-[#C3F384]">
      <div className="w-full flex justify-center">
        <div>
          <div className="w-full pl- space-y-5">
            <p className="font-bold text-[26px] md:text-5xl text-left">
              Send without limit:
              <br /> get paid seamlessly
            </p>
            <p className="text-[#473893] text-base md:text-3xl">
              Check Out benefits for our customer
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {featuresData.map((feature, index) => (
                <Feature key={index} index={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-5 sm:flex-row gap-4 sm:gap-6 items-center justify-center">
        <a
          href="https://apps.apple.com/us/app/fasepay-by-wallx/id6590625075"
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
