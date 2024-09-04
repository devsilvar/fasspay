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
    <div className="group hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white h-96 overflow-hidden rounded-tl-[10px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[100px] border-black border-solid border-b-[5px] w-96 2xl:w-[580px] relative">
      <div className="p-10">
        <div className="flex items-center justify-between">
          <div>
            <Image src="/quote-icon.png" alt="quote" width={32} height={32} />

            <div className="flex items-center justify-between">
              <div>
                <p>{name}</p>
                <p>{jobTitle}</p>
              </div>
              <div>
                <Image src={image} alt="logo" width={32} height={32} />
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
