"use client";

import { MessageCircleQuestionIcon, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import RevealAnimation from "./framer/RevealAnimation";

const FaqData = [
  {
    id: "1",
    question: "How do I purchase Discord Server Boosts?",
    answer: "Simply select a boost package from our products section and follow the checkout process. You'll receive your boosts instantly after payment.",
  },
  {
    id: "2",
    question: "Is Cosmos Market safe to use?",
    answer: "Yes, we use entirely legal methods and secure payment processing. All transactions are encrypted and your information is protected.",
  },
  {
    id: "3",
    question: "How long does delivery take?",
    answer: "Most orders are delivered instantly through our automated system. Some services may take up to 24 hours depending on the product.",
  },
  {
    id: "4",
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit cards, PayPal, and cryptocurrency. All payments are processed securely.",
  },
  {
    id: "5",
    question: "Do you offer refunds?",
    answer: "Yes, we offer refunds on eligible products. Please contact our support team through Discord or live chat for refund requests.",
  },
];

const Faq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div id="faq" className="relative py-24 px-4" style={{ backgroundColor: "#0B2F1F" }}>
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#34A350]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <RevealAnimation screenReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(52, 163, 80, 0.1)", border: "1px solid rgba(52, 163, 80, 0.3)" }}>
              <MessageCircleQuestionIcon size={16} className="text-[#34A350]" />
              <p className="text-sm font-semibold tracking-wide" style={{ color: "#34A350" }}>
                FAQ
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Frequently Asked Questions</h2>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.3}>
            <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </RevealAnimation>
        </div>
        <div className="space-y-4">
          {FaqData.map((item, index) => (
            <RevealAnimation key={item.id} screenReveal delay={index * 0.1}>
              <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:border-[#34A350]/30 transition-all duration-300">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white text-lg">{item.question}</span>
                  <ChevronDown
                    size={24}
                    className={`text-[#34A350] transition-transform duration-300 ${
                      openItem === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItem === item.id && (
                  <div className="p-6 pt-0 text-white/70 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
