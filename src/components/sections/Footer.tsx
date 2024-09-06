import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section className="w-screen overflow-hidden">
      <div className="w-full flex items-center justify-between gap-5 bg-white py-5 px-5 md:px-24">
        <div>
          <Image src="/logo-coloured.png" alt="logo" width={80} height={93} />
        </div>

        <div className="block md:flex gap-12">
          <li className="list-none cursor-pointer">Privacy Policy</li>
          <li className="list-none cursor-pointer">Terms of Service</li>
          <li className="list-none cursor-pointer">Help/FAQ</li>
        </div>

        <div className="text-white bg-[#473893] rounded-3xl border-white border flex gap-3 items-center py-2 px-6">
          <Image src={"/phone-icon.png"} alt="logo" width={20} height={32} />
          Download App -it's free
        </div>
      </div>
      <footer className="w-full bg-[#F4F2FF] flex items-center px-10 py-24">
        <div className="space-y-5">
          <p>
            FasePay Technology Limited, Canada, is registered and regularized by
            the Financial Transactions and Report Analysis Center of Canada as a
            Money Service Business. MSB registration number: 22718986. FasePay
            Technology Limited, Canada.
          </p>

          <p>© 2024 FasePay by WallX Innovation Inc.</p>
        </div>
        <div className="flex items-center gap-5">
          <Image
            src="/twitter-icon.png"
            alt="icon"
            width={35}
            height={35}
            className="flex-shrink-0 sm:w-4"
          />
          <Image
            src="/facebook-icon.png"
            alt="icon"
            width={35}
            height={35}
            className="flex-shrink-0"
          />
          <Image src="/instagram-icon.png" alt="icon" width={35} height={35} />
          <Image src="/linkedin-icon.png" alt="icon" width={35} height={35} />
        </div>
      </footer>
    </section>
  );
}
