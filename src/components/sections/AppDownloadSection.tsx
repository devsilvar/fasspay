import Image from "next/image";
import React from "react";

export default function AppDownloadSection() {
  return (
    <section className="w-screen relative h-[650px] md:h-[24rem] bg-[#111111] bg-[url('/texture.png')] py-8 px-4 overflow-hidden">
      <h2 className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
        Do Business With The World
      </h2>

      <div className="w-full flex  sm:flex-row justify-center items-center gap-4 mb-8">
        <div className="relative w-[120px] h-[53px] sm:w-[200px] sm:h-[59px] lg:w-[220px] lg:h-[65px]">
          <a
            href="https://apps.apple.com/us/app/fasepay-by-wallx/id6590625075"
            target="_blank"
            className="w-36 sm:w-40 md:w-48 lg:w-56 h-auto">
            <Image
              src="/appstore-logo.png"
              alt="App Store"
              fill
              sizes="(max-width: 640px) 120px, (max-width: 1024px) 200px, 220px"
              style={{
                objectFit: "contain",
              }}
            />
          </a>
        </div>
        <div className="relative w-[120px] h-[53px] sm:w-[200px] sm:h-[59px] lg:w-[220px] lg:h-[65px]">
          <a
            href="https://play.google.com/store/apps/details?id=co.wallx.fasepay"
            target="_blank"
            className="w-36 sm:w-40 md:w-48 lg:w-56 h-auto">
            <Image
              src="/playstore-logo.png"
              alt="Google Play"
              fill
              sizes="(max-width: 640px) 120px, (max-width: 1024px) 200px, 220px"
              style={{
                objectFit: "contain",
              }}
            />
          </a>
        </div>
      </div>

      <Image
        src="/coin-1.png"
        alt="Coin 1"
        width={60}
        height={60}
        className="absolute left-20 md:left-4 top-40 md:top-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
      />

      <Image
        src="/coin-2.png"
        alt="Coin 2"
        width={60}
        height={60}
        className="absolute left-32 md:left-16 bottom-72 md:bottom-16 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
      />

      <div className="absolute bottom-0 right-0 w-full sm:w-auto">
        <Image
          src="/app-download.png"
          alt="App Download"
          width={526}
          height={210}
        />
      </div>
    </section>
  );
}
