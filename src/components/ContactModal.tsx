import Image from "next/image";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 z-40">
        <form className="p-3 space-y-5">
          <div>
            <h2 className="text-3xl font-bold">Speak To Us Today!</h2>
            <p>Contact us to learn more.</p>
          </div>

          <div className="space-y-5">
            <div className="flex gap-3">
              <div className="relative">
                <Image
                  src="/person-icon.png"
                  alt="Person icon"
                  width={20}
                  height={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="text"
                  className="w-full border border-black px-10 rounded py-2"
                  placeholder="Name"
                />
              </div>

              <div className="relative">
                <Image
                  src="/phone-icon-2.png"
                  alt="Phone icon"
                  width={20}
                  height={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="email"
                  className="w-full border rounded border-black px-10 py-2"
                  placeholder="Email address"
                />
              </div>

              <div className="relative">
                <Image
                  src="/message-icon.png"
                  alt="Message icon"
                  width={20}
                  height={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="tel"
                  className="w-full border rounded border-black px-10 py-2"
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div>
              <select className="w-full border text-white rounded  bg-[#111111] px-3 py-2">
                <select>Select an option</select>
                <option value={"Fraud"}>Fraud</option>
                <option value={"KYC"}>KYC</option>
                <option value={"Payments"}>Payments</option>
                <option value={"Top up"}>Top up</option>
                <option value={"Others"}>Others</option>
              </select>
            </div>

            <div>
              <textarea
                placeholder="Type a message"
                className="w-full rounded border border-black px-3 py-2"
              />
            </div>

            <button className="bg-[#473893] text-white px-7 py-2 rounded-lg">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
