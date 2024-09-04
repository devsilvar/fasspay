import React from "react";

export default function FAQs() {
  return (
    <section className="space-y-5 py-12">
      <div className="py-5">
        <h2 className="text-center font-bold text-5xl">
          Curious about Fasepay? <br /> We've got answers
        </h2>
        <p className="text-center text-3xl">
          Some of most frequently asked questions.
        </p>
      </div>

      <div className="w-full flex gap-10 justify-center px-24 ">
        <div className="bg-[#F1EEFF] md:w-1/2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[100px] rounded-bl-[10px] p-10 border-b-[5px] border-black">
          <h3 className="text-2xl font-bold ">FAQs.</h3>

          <div className="space-y-5 py-5">
            <div className="p-3 bg-[#473893] rounded-[20px]">
              <p className="text-white">
                What currencies does Fasepay support?
              </p>
            </div>

            <div className="p-3 bg-[#473893] rounded-[20px]">
              <p className="text-white">
                What currencies does Fasepay support?
              </p>
            </div>

            <div className="p-3 bg-[#473893] rounded-[20px]">
              <p className="text-white">
                What currencies does Fasepay support?
              </p>
            </div>

            <div className="p-3 bg-[#473893] rounded-[20px]">
              <p className="text-white">
                What currencies does Fasepay support?
              </p>
            </div>

            <div className="p-3 bg-[#473893] rounded-[20px]">
              <p className="text-white">
                What currencies does Fasepay support?
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#473893] md:w-1/2 rounded-tl-[100px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[10px] p-10 border-b-[5px] border-black">
          <p className="text-3xl text-white font-semibold flex justify-end">
            Ans.
          </p>
          <p className="text-white py-5">
            Fasepay understands the importance of global business! We currently
            support a variety of popular currencies for receiving payments,
            including USD, EUR, GBP, and local African currencies like Naira
            etc. For a complete list of supported currencies, please visit our
            Help Center
          </p>
        </div>
      </div>
    </section>
  );
}
