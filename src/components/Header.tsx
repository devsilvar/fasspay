import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-24">
      <div className="space-y-10">
        <h1 className="text-5xl font-bold">
          Easily send and receive
          <br /> money from your customers,
          <br /> with PayCode
        </h1>
        <p className="text-[#111111] text-3xl max-w-[626px]">
          Whether it's business transactions or personal payments, our system
          makes it simple and secure to move funds with ease.
        </p>

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

      <div className="w-full md:w-1/2 relative">
        <Image
          src={"/flags.png"}
          alt="Flags"
          width={580}
          height={560}
          layout="responsive"
          objectFit="contain"
        />
      </div>

      {/* <div className="w-full md:w-1/2 relative">
        <Image
          src={"/flags.png"}
          alt="Flags representing international money transfer"
          layout="responsive"
          width={100}
          height={96}
          objectFit="contain"
        />
      </div> */}
    </header>
  );
}
