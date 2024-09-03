import React from "react";
import Feature from "./Feature";
import { featuresData } from "@/models/feature-data";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section>
      <div className="bg-[url('/section-background.png')] space-y-9 bg-cover bg-center bg-no-repeat p-10 bg-[#C3F384]">
        <div className="pb-12 space-y-5">
          <p className="font-bold text-5xl ">
            Send without limit:
            <br /> get paid seamlessly
          </p>
          <p className="text-[#473893] text-3xl">
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

      <div className="w-full flex justify-center py-5 bg-[#F4F2FF]">
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
      </div>
    </section>
  );
}
