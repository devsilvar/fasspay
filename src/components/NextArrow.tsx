import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
  onClick?: () => void;
}

export default function NextArrow({ ...props }: Props) {
  const { className, onClick } = props;
  return (
    <div>
      <Image
        onClick={onClick}
        src={"/arrow-right.png"}
        alt="arrow left"
        width={50}
        height={50}
        className={`${className} custom-arrow`}
      />
    </div>
  );
}
