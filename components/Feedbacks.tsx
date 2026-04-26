"use client";

import React from "react";
import { MessageCircle, Star, Quote } from "lucide-react";
import Link from "next/link";
import RevealAnimation from "./framer/RevealAnimation";
import { Button } from "./ui/button";
import { LINKS } from "./config";

const Feedbacks = () => {
  return (
    <div id="feedbacks" className="relative py-24 px-4 flex flex-col items-center overflow-hidden" style={{ backgroundColor: "#0B2F1F" }}>
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#34A350]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 z-10 max-w-7xl">
        <div className="text-center mb-16">
          <RevealAnimation screenReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(52, 163, 80, 0.1)", border: "1px solid rgba(52, 163, 80, 0.3)" }}>
              <MessageCircle size={16} className="text-[#34A350]" />
              <p className="text-sm font-semibold tracking-wide" style={{ color: "#34A350" }}>
                Testimonials
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">What Our Customers Say</h2>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.3}>
            <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Cosmos Market
            </p>
          </RevealAnimation>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { value: "2500+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <RevealAnimation key={index} screenReveal delay={0.4 + index * 0.1}>
              <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#34A350]/30 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ background: "linear-gradient(135deg, #34A350, #1a5228)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {stat.value}
                </div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* CTA */}
        <RevealAnimation screenReveal delay={0.7}>
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2">
                <Quote size={24} className="text-[#34A350]" />
                <span className="text-white font-medium">Want to share your experience?</span>
              </div>
              <Link href={LINKS.DISCORD}>
                <Button className="rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 px-6 py-3 flex items-center justify-center gap-2 whitespace-nowrap" style={{ background: "linear-gradient(135deg, #34A350, #1a5228)" }}>
                  <MessageCircle size={18} />
                  <span>Join Discord</span>
                </Button>
              </Link>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default Feedbacks;
