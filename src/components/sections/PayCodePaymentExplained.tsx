import React from "react";
import { explanationData } from "@/models/explanation-data";
import Image from "next/image";

export default function ExplanationSection() {
  return (
    <section className="py-12 space-y-5 w-screen">
      <div className="space-y-5">
        <h2 className="text-center text-3xl md:text-5xl font-bold">
          PayCode Payment Explained
        </h2>
        <p className="text-center text-base md:text-3xl">
          Here’s How FasePay Powers African Businesses
        </p>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-0">
          <div className="group hover:scale-105 hover:shadow-lg transition-all duration-300 bg-[#473893] min-h-80 max-h-[374px] overflow-hidden rounded-tl-[10px] rounded-br-[100px] rounded-tr-[10px] rounded-bl-[10px] p-5 md:p-10  border-black border-solid border-b-[5px] max-w-[600px]">
            <h3 className="font-medium text-white text-xl md:text-3xl">
              {explanationData[0].title}
            </h3>
            <p className="text-white mt-7">{explanationData[0].description}</p>
          </div>

          <div className="group hidden md:block hover:scale-105 hover:shadow-lg transition-all duration-300 bg-[#473893] h-[374px] overflow-hidden rounded-tl-[10px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[100px] border-black border-solid border-b-[5px] max-w-[600px] relative">
            <Image
              src="/explanation-image-1.png"
              alt="logo"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>

          <div className="group hidden md:block hover:scale-105 hover:shadow-lg transition-all duration-300 bg-[#473893] h-[374px] overflow-hidden rounded-tl-[10px] rounded-br-[10px] rounded-tr-[100px] rounded-bl-[10px] p-10  border-black border-solid border-b-[5px] max-w-[600px] relative">
            <Image
              src="/explanation-image-2.png"
              alt="logo"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>

          <div className="group hover:scale-105 hover:shadow-lg transition-all duration-300 bg-[#473893] min-h-80 max-h-[374px] overflow-hidden rounded-tl-[100px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[10px] p-10  border-black border-solid border-b-[5px] max-w-[600px]">
            <h3 className="font-medium text-white text-xl md:text-3xl">
              {explanationData[1].title}
            </h3>
            <p className="text-white mt-7">{explanationData[1].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
