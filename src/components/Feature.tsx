import React from "react";

interface Props {
  index: number;
  title: string;
  description: string;
}

export default function Feature({ index, title, description }: Props) {
  return (
    <div className="group hover:scale-105 hover:shadow-lg transition-all duration-300 bg-[#473893] max-h-[224px] md:max-h-[265px] overflow-hidden rounded-tl-[10px] rounded-tr-[100px] rounded-br-[10px] rounded-bl-[10px] p-5 md:p-10  border-black border-solid border-b-[5px] w-full md:max-w-[600px]">
      <p className="text-white text-xl md:text-3xl ">{title}</p>
      <div className="flex items-start gap-3 ">
        <h4 className="text-[180px] md:text-[200px] text-[#C3F38480] group-hover:text-[#C3F384] ">
          {index + 1}
        </h4>
        <p className="text-white mt-16">{description}</p>
      </div>
    </div>
  );
}
