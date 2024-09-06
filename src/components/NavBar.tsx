"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactModal from "./ContactModal";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="w-screen bg-[#473893] p-3">
      <div className="flex items-center justify-between px-24">
        <div>
          <Image src={"/fasepay-logo.png"} alt="logo" width={111} height={42} />
        </div>

        <div className="flex gap-12 items-center">
          <div
            onClick={() => setShowModal(true)}
            className="text-white cursor-pointer">
            Contact Us
          </div>
          <div className="text-white">CA</div>
          <div className="text-white rounded-3xl border-white border flex gap-3 items-center py-2 px-6">
            <Image src={"/phone-icon.png"} alt="logo" width={20} height={32} />
            Download App -it's free
          </div>
        </div>
      </div>

      {showModal && (
        <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </nav>
  );
}
