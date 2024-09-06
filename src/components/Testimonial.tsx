import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  jobTitle: string;
  image: string;
  testimonial: string;
}

export default function Testimonial({
  name,
  jobTitle,
  image,
  testimonial,
}: Props) {
  return (
    <div className="group  hover:shadow-lg transition-all duration-300 bg-white h-96 overflow-hidden rounded-tl-[10px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[100px] border-black border-solid border-b-[5px] w-full md:w-[450px] 2xl:w-[580px] relative">
      <div className="p-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <Image src="/quote-icon.png" alt="quote" width={32} height={32} />

            <div className="flex items-center gap-3 justify-end">
              <div className="text-right">
                <p>{name}</p>
                <p className="font-semibold">{jobTitle}</p>
              </div>
              <div>
                <Image src={image} alt="logo" width={42} height={42} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="pt-7">{testimonial}</p>
        </div>
      </div>
    </div>
  );
}
