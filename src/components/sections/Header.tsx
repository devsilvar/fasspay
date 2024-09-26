import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-screen overflow-hidden block space-y-10 md:space-y-0 md:flex items-center justify-between py-5 px-5 md:px-24">
      <div className="space-y-5 md:space-y-10">
        <h1 className="text-[#111111] text-2xl md:text-5xl font-bold leading-[30px] md:leading-[55px]">
          Seamlessly send and receive
          <br className="hidden md:block" /> money from your customers
          <br className="hidden md:block" /> in less than 5-Minutes using
          PayCodes.
        </h1>
        <p className="text-[#111111] text-[14px] md:text-3xl max-w-[626px]">
          {`Experience hassle-free fund transfers for business and personal use - it's simple, secure, and no personal banking details needed!`}
        </p>

        {/* <div className="flex gap-3 items-center">
          <Image
            src={"/appstore-logo.png"}
            alt="logo"
            width={223}
            height={66}
            // className="sm:w-5 sm:h-5 md:w-auto md:h-auto"
          />
          <Image
            src={"/playstore-logo.png"}
            alt="logo"
            width={223}
            height={66}
            className="w-auto h-auto"
          />
        </div> */}
        <div className="flex  sm:flex-row gap-4 sm:gap-6 items-center ">
          <a
            href="https://apps.apple.com/us/app/fasepay-by-wallx/id6590625075https://apps.apple.com/us/app/fasepay-by-wallx/id6590625075"
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
