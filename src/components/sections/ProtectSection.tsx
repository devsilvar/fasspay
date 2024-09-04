import React from "react";
import { protectionData } from "@/models/protection-data";
import ProtectionBulletPoint from "../ProtectionBulletPoint";

export default function ProtectSection() {
  return (
    <section className="bg-[#111111] py-10 space-y-7">
      <h2 className="text-center text-white font-bold text-5xl">
        How we protect your money and identity
      </h2>

      <div className="w-full flex gap-10 justify-center">
        {protectionData.map((protection, index) => (
          <ProtectionBulletPoint
            key={index}
            title={protection.title}
            description={protection.description}
          />
        ))}
      </div>
    </section>
  );
}
