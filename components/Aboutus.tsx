import { StarIcon, CheckCircle } from "lucide-react";
import React from "react";
import RevealAnimation from "./framer/RevealAnimation";
import Image from "next/image";

const Aboutus = () => {
  return (
    <section
      id="aboutus"
      className="relative py-24 px-4 flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#0B2F1F" }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#34A350]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 z-10 max-w-7xl">
        <div className="mb-16 text-center flex flex-col items-center">
          <RevealAnimation screenReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(52, 163, 80, 0.1)", border: "1px solid rgba(52, 163, 80, 0.3)" }}>
              <StarIcon size={16} className="text-[#34A350]" />
              <p className="text-sm font-medium tracking-wide" style={{ color: "#34A350" }}>
                Why Choose Cosmos Market
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">About Us</h2>
          </RevealAnimation>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 w-full mt-12 lg:items-center max-w-7xl mx-auto">
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-start">
            <RevealAnimation screenReveal>
              <Image
                src="/nitro.png"
                alt="Discord Nitro"
                className="w-full max-w-lg h-auto"
                width={500}
                height={500}
                priority
              />
            </RevealAnimation>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8">
            <RevealAnimation screenReveal>
              <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                Top choice for{" "}
                <span className="font-bold" style={{ background: "linear-gradient(135deg, #34A350 0%, #1a5228 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  budget-friendly
                </span>{" "}
                Safe Discord boosts & premium Nitro upgrades.
              </h3>
            </RevealAnimation>
            <RevealAnimation screenReveal delay={0.2}>
              <p className="text-lg leading-relaxed text-white/70">
                <strong className="text-white">Cosmos Market</strong> is the industry's most trusted Discord server growth service since 2020, providing ultra-high-quality server boosts, premium Discord Nitro perks, and comprehensive member packages at the most competitive prices.
              </p>
            </RevealAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[
                "24/7 Customer Support",
                "Instant Delivery",
                "Most affordable pricing",
                "Trusted by thousands"
              ].map((item, index) => (
                <RevealAnimation key={index} screenReveal delay={0.3 + index * 0.1}>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#34A350]/30 transition-all duration-300">
                    <CheckCircle size={20} className="text-[#34A350]" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
