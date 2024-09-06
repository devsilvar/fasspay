"use client";

import React, { useState } from "react";
import { faqsAndAnswers } from "@/models/faqs-and-answers";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleQuestionClick = (index: number | null) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="space-y-5 py-12 w-screen">
      <div className="py-5">
        <h2 className="text-center font-bold text-3xl md:text-5xl">
          Curious about Fasepay? <br /> We've got answers
        </h2>
        <p className="text-center text-base md:text-3xl">
          Some of our most frequently asked questions.
        </p>
      </div>

      <div className="w-full space-y-5 block md:flex gap-10 justify-center px-5 md:px-24">
        <div className="bg-[#F1EEFF] w-full md:w-1/2 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[100px] rounded-bl-[10px] p-5 md:p-10 border-b-[5px] border-black">
          <h3 className="text-2xl font-bold">FAQs.</h3>

          <div className="space-y-5 py-5">
            {faqsAndAnswers.map((faq, index) => (
              <div
                key={faq.id}
                className={`p-3 cursor-pointer rounded-[20px] ${
                  activeIndex === index
                    ? "bg-[#473893]"
                    : "bg-white border border-[#111111]"
                }`}
                onClick={() => handleQuestionClick(index)}>
                <p
                  className={`${
                    activeIndex === index ? "text-white" : "text-[#111111]"
                  } font-semibold`}>
                  {faq.question}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#473893] md:w-1/2 rounded-tl-[100px] rounded-br-[10px] rounded-tr-[10px] rounded-bl-[10px] p-10 border-b-[5px] border-black">
          <p className="text-3xl text-white font-semibold flex justify-end">
            Ans.
          </p>
          <p className="text-white py-5">
            {activeIndex !== null
              ? faqsAndAnswers[activeIndex].answer
              : "Click on a question to see the answer."}
          </p>
        </div>
      </div>
    </section>
  );
}
