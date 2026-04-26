"use client";

import React from "react";
import { MessageCircle, MessageSquare, Headphones } from "lucide-react";
import RevealAnimation from "./framer/RevealAnimation";
import { Button } from "./ui/button";
import { LINKS } from "./config";

const Contact = () => {
  const handleLiveChat = () => {
    if (typeof window !== "undefined" && window.$crisp) {
      window.$crisp.push(['do', 'chat:open']);
    }
  };

  return (
    <div id="contact" className="relative py-24 px-4 flex flex-col items-center overflow-hidden" style={{ backgroundColor: "#0B2F1F" }}>
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#34A350]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4 z-10 max-w-7xl">
        <div className="text-center mb-16">
          <RevealAnimation screenReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(52, 163, 80, 0.1)", border: "1px solid rgba(52, 163, 80, 0.3)" }}>
              <Headphones size={16} className="text-[#34A350]" />
              <p className="text-sm font-semibold tracking-wide" style={{ color: "#34A350" }}>
                Get In Touch
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Contact Us Today</h2>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.3}>
            <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
              Get instant support and assistance through Discord or live chat. We're ready to assist with all your questions.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <RevealAnimation screenReveal delay={0.4}>
            <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="group">
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#34A350]/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#34A350]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(52, 163, 80, 0.1)" }}>
                    <MessageCircle size={32} className="text-[#34A350]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Discord</h3>
                  <p className="text-white/70">Join our Discord server for instant support and community updates.</p>
                </div>
              </div>
            </a>
          </RevealAnimation>

          <RevealAnimation screenReveal delay={0.5}>
            <button onClick={handleLiveChat} className="group w-full">
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#34A350]/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-[#34A350]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(52, 163, 80, 0.1)" }}>
                    <MessageSquare size={32} className="text-[#34A350]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Live Chat</h3>
                  <p className="text-white/70">Chat with our support team directly on our website.</p>
                </div>
              </div>
            </button>
          </RevealAnimation>
        </div>
      </div>
    </div>
  );
};

export default Contact;
