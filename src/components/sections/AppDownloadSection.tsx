import Image from "next/image";
import React from "react";

export default function AppDownloadSection() {
  return (
    <section className="w-screen relative min-h-[24rem] bg-[#111111] bg-[url('/texture.png')] py-8 px-4 overflow-hidden">
      <h2 className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
        Do Business With The World
      </h2>

      <div className="w-full flex  sm:flex-row justify-center items-center gap-4 mb-8">
        <Image
          src="/appstore-logo.png"
          alt="App Store"
          width={180}
          height={53}
          className="w-auto h-auto  max-w-[180px]"
        />
        <Image
          src="/playstore-logo.png"
          alt="Google Play"
          width={180}
          height={53}
          className="w-auto h-auto max-w-[180px]"
        />
      </div>

      <Image
        src="/coin-1.png"
        alt="Coin 1"
        width={60}
        height={60}
        className="absolute left-4 top-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
      />

      <Image
        src="/coin-2.png"
        alt="Coin 2"
        width={60}
        height={60}
        className="absolute left-16 bottom-16 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
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
