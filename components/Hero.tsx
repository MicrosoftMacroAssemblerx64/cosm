"use client";

import React from "react";
import { ChevronRight, ShoppingCart, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import RevealAnimation from "./framer/RevealAnimation";
import { LINKS } from "./config";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden" style={{ backgroundColor: "#0B2F1F" }}>
      <div className="absolute inset-0">
        <Image
          src="/HomePage/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#34A350]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#34A350]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="relative z-10 container max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="space-y-6 sm:space-y-8 text-center py-20 w-full max-w-5xl">
            <RevealAnimation>
              <Link href={`/#feedbacks`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20" style={{ background: "linear-gradient(135deg, #34A350, #1a5228)" }}>
                  <Sparkles size={16} className="text-yellow-300" />
                  <span>Trusted by 0+ Satisfied Customers</span>
                  <ChevronRight size={16} />
                </div>
              </Link>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-white">
                Start your Discord<br />
                <span className="relative inline-block">
                  <span className="relative z-10" style={{ background: "linear-gradient(135deg, #34A350, #1a5228)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    journey
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-[#34A350] to-[#1a5228] blur-lg opacity-30" />
                </span>
                <br />
                the right way<br />
                with us!
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <p className="text-base sm:text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
                Welcome to Cosmos Market, your go-to source for Discord boosts at affordable pricing with fully automated delivery. Our system ensures a smooth, reliable experience while keeping customer satisfaction our top priority.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link href="#products">
                  <Button className="relative overflow-hidden rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 px-8 py-4 text-base flex items-center justify-center gap-2 whitespace-nowrap" style={{ background: "linear-gradient(135deg, #34A350, #1a5228)" }}>
                    <ShoppingCart size={20} />
                    <span>Shop Now</span>
                    <ChevronRight size={16} />
                  </Button>
                </Link>
                <Link href={LINKS.DISCORD}>
                  <Button variant="outline" className="relative overflow-hidden rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10 px-8 py-4 text-base flex items-center justify-center gap-2 whitespace-nowrap border-2 border-white/20 hover:border-[#34A350]">
                    <MessageCircle size={20} />
                    <span>Join Discord</span>
                  </Button>
                </Link>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.8}>
              <div className="flex items-center justify-center gap-3 pt-4">
                <Link href="https://www.trustpilot.com/review/cosmicmarket.gg" target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-full bg-white text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl px-6 py-3 text-sm flex items-center justify-center gap-2 whitespace-nowrap">
                    <svg fill="#00B67A" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                      <title>Trustpilot icon</title>
                      <path d="M12,17.964l5.214-1.321l2.179,6.714L12,17.964z M24,9.286h-9.179L12,0.643L9.179,9.286 H0l7.429,5.357l-2.821,8.643l7.429-5.357l4.571-3.286L24,9.286L24,9.286L24,9.286L24,9.286z" />
                    </svg>
                    <span>Trustpilot</span>
                  </Button>
                </Link>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
