import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function ProtectionBulletPoint({ title, description }: Props) {
  return (
    <div className="group  hover:shadow-lg transition-all duration-300 bg-white h-64 overflow-hidden rounded-tl-[10px] rounded-br-[10px] rounded-tr-[100px] rounded-bl-[10px] border-black border-solid border-b-[5px] max-w-96 relative">
      <div className="p-5 md:p-10">
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="pt-7">{description}</p>
      </div>
    </div>
  );
}
