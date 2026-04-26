"use client";

import { cn } from "@/lib/utils";
import {
  HandCoinsIcon,
  MessageCircleMoreIcon,
  ScaleIcon,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RevealAnimation from "./framer/RevealAnimation";

const FeaturesData = [
  {
    icon: <Zap size={32} className="text-[#34A350]" />,
    title: "Instant Delivery",
    description: "Orders are processed through our automated system meaning no waiting needed.",
  },
  {
    icon: <MessageCircleMoreIcon size={32} className="text-[#34A350]" />,
    title: "24/7 Support",
    description: "We offer 24/7 Real Human support and always available.",
  },
  {
    icon: <Shield size={32} className="text-[#34A350]" />,
    title: "Legal Methods",
    description: "All services we offer is acquired through entirely legal channels, ensuring you peace of mind without concerns",
  },
  {
    icon: <Clock size={32} className="text-[#34A350]" />,
    title: "Fast Processing",
    description: "Our system ensures quick and efficient processing of all orders.",
  },
  {
    icon: <HandCoinsIcon size={32} className="text-[#34A350]" />,
    title: "Best Prices",
    description: "We offer the most competitive prices in the market.",
  },
  {
    icon: <ScaleIcon size={32} className="text-[#34A350]" />,
    title: "Secure Payments",
    description: "All transactions are secure and encrypted for your safety.",
  },
];

const Features = () => {
  const controls = useAnimation();
  const screenRef = useRef(null);
  const inScreenView = useInView(screenRef, {
    once: false,
    margin: "-50px 0px -100px 0px",
  });

  useEffect(() => {
    if (inScreenView) {
      controls.start("visible");
    }
  }, [inScreenView]);

  return (
    <div id="features" className="relative py-24 px-4 md:px-8 flex flex-col items-center" style={{ backgroundColor: "#0B2F1F" }}>
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#34A350]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#34A350]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl w-full">
        <div className="flex items-center flex-col text-center mb-16">
          <RevealAnimation screenReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(52, 163, 80, 0.1)", border: "1px solid rgba(52, 163, 80, 0.3)" }}>
              <Zap size={16} className="text-[#34A350]" />
              <p className="text-sm font-semibold tracking-wide" style={{ color: "#34A350" }}>
                Our Features
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Why Choose Us?</h2>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.3}>
            <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
              We provide the best Discord services with unmatched quality and support
            </p>
          </RevealAnimation>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FeaturesData.map((feature, index) => (
            <RevealAnimation key={index} screenReveal delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#34A350]/30 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#34A350]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(52, 163, 80, 0.1)" }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
