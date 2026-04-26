"use client";

import React from "react";

const MarqueeBanner = () => {
  return (
    <section className="w-full overflow-hidden relative" style={{ background: "linear-gradient(to right, #34A350, #1a5228, #34A350)" }}>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 60s linear infinite;
        }
        
        .marquee:hover {
          animation-play-state: paused;
        }
        
        .gem-icon {
          width: 21px;
          height: 21px;
          margin: 0 12px;
          display: inline-block;
          vertical-align: middle;
        }
      `}</style>
      <div className="py-3">
        <div className="marquee">
          <div className="text-white font-semibold text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
          <div className="text-white text-sm whitespace-nowrap px-4 flex items-center">
            Cosmos Market Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support
            <img src="/HomePage/gem.png" alt="discordserverboosts" className="gem-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeBanner;
