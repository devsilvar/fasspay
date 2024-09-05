import Image from "next/image";
import React from "react";

export default function AppDownloadSection() {
  return (
    <section className="relative h-96 bg-[#111111] bg-[url('/texture.png')] py-10">
      <h2 className="text-center text-white font-bold text-5xl">
        Do Business With The World
      </h2>

      <div className="w-full gap-5 flex justify-center py-5">
        <div className="flex gap-5">
          <Image
            src={"/appstore-logo.png"}
            alt="logo"
            width={223}
            height={66}
            className="mx-auto"
          />
          <Image
            src={"/playstore-logo.png"}
            alt="logo"
            width={223}
            height={66}
            className="mx-auto"
          />
        </div>
      </div>

      <Image
        src={"/coin-1.png"}
        alt="logo"
        width={80}
        height={80}
        className="absolute left-8 top-8"
      />

      <Image
        src={"/coin-2.png"}
        alt="logo"
        width={80}
        height={80}
        className="absolute left-32 bottom-24"
      />

      <div className="absolute bottom-0 right-0">
        <Image
          src={"/app-download.png"}
          alt="logo"
          width={526}
          height={210}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
