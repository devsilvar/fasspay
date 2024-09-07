import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

const SocialIcon = ({ src, alt }: Props) => (
  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      layout="responsive"
      className="object-contain"
    />
  </div>
);

export default function Footer() {
  return (
    <section className="w-screen overflow-hidden">
      <div className="w-full flex items-start md:items-center justify-between gap-5 bg-white py-5 px-5 md:px-24">
        <div className="space-y-5">
          <div>
            <Image
              src="/logo-coloured.png"
              alt="logo"
              width={80}
              height={93}
              className="hidden md:block"
            />
            <Image src="/logo-coloured.png" alt="logo" width={40} height={73} />
          </div>

          <div className="block space-y-5 md:flex gap-12 text-xs md:text-base">
            <li className="list-none cursor-pointer">Privacy Policy</li>
            <li className="list-none cursor-pointer">Terms of Service</li>
            <li className="list-none cursor-pointer">Help/FAQ</li>
          </div>
        </div>

        <div className="text-white bg-[#473893] rounded-3xl border-white border flex gap-3 text-xs md:text-base items-center py-2 px-6">
          <Image src={"/phone-icon.png"} alt="logo" width={20} height={32} />
          Download App -it's free
        </div>
      </div>
      <footer className="w-full text-sm bg-[#F4F2FF] md:flex items-center px-10 py-5 md:py-24">
        <div className="space-y-5">
          <p>
            FasePay Technology Limited, Canada, is registered and regularized by
            the Financial Transactions and Report Analysis Center of Canada as a
            Money Service Business. MSB registration number: 22718986. FasePay
            Technology Limited, Canada.
          </p>

          <p>© 2024 FasePay by WallX Innovation Inc.</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 py-5 md:py-0">
          <SocialIcon src="/twitter-icon.png" alt="Twitter" />
          <SocialIcon src="/facebook-icon.png" alt="Facebook" />
          <SocialIcon src="/instagram-icon.png" alt="Instagram" />
          <SocialIcon src="/linkedin-icon.png" alt="LinkedIn" />
        </div>
      </footer>
    </section>
  );
}
