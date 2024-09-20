"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactModal from "../ContactModal";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="w-screen bg-[#473893] overflow-hidden p-3">
      <div className="flex items-center justify-between px-4 md:px-24">
        <div>
          <Image
            src={"/faaspay-logo.svg"}
            alt="logo"
            width={111}
            height={42}
            className="hidden md:block"
          />
          <Image
            src={"/faaspay-logo.svg"}
            alt="logo"
            width={75}
            height={32}
            className="block md:hidden"
          />
        </div>

        <div className="flex gap-12 items-center">
          <div
            onClick={() => setShowModal(true)}
            className="text-white cursor-pointer">
            Contact Us
          </div>
          <div className="hidden text-white">CA</div>
          <a
            href="https://play.google.com/store/apps/details?id=co.wallx.fasepay"
            target="_blank"
            className="hidden text-white rounded-3xl border-white border md:flex gap-3 items-center py-2 px-6">
            <Image src={"/phone-icon.png"} alt="logo" width={20} height={32} />
            {`Download App -it's free`}
          </a>
        </div>
      </div>

      {showModal && (
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </nav>
  );
}
