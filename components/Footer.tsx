import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LINKS } from "./config";

const Footer = () => {
  return (
    <div className="w-full h-px" style={{ backgroundColor: "#1b1b1b" }}>
      <footer className="relative w-full py-16" style={{ backgroundColor: "#0B2F1F" }}>
        <div className="relative max-w-7xl mx-auto px-4 xl:px-6 z-30">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="flex flex-col gap-4 max-w-md">
              <Link href="/" className="inline-flex">
                <div className="flex items-center">
                  <Image src="/Logo's/logo.png" alt="Cosmos Market Logo" className="w-40 h-auto" width={224} height={100} />
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed">
                Your Ultimate Discord Service Provider. Discover high-quality Discord server boosts with instant delivery, offering a seamless experience and top-tier service at affordable prices.
              </p>
              <div className="mt-2">
                <a href="https://www.trustpilot.com/review/cosmicmarket.gg?utm_medium=trustbox&utm_source=TrustBoxReviewCollector" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-black hover:bg-gray-100 text-sm font-medium rounded-lg border border-[#00B67A] transition-colors duration-200">
                  Review us on Trustpilot
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto">
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/#aboutus" className="text-white/70 hover:text-white transition-colors text-sm">About Us</Link>
                  <Link href="/#products" className="text-white/70 hover:text-white transition-colors text-sm">Products</Link>
                  <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">Discord</a>
                  <Link href="/#feedbacks" className="text-white/70 hover:text-white transition-colors text-sm">Feedbacks</Link>
                  <Link href="/#faq" className="text-white/70 hover:text-white transition-colors text-sm">FAQ</Link>
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Official Links</h3>
                <div className="flex flex-col gap-3">
                  <a href="https://youtube.com/@cosmic_market" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">Youtube</a>
                  <a href={LINKS.DISCORD} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">Discord</a>
                  <a href="https://www.trustpilot.com/review/cosmicmarket.gg?utm_medium=trustbox&utm_source=TrustBoxReviewCollector" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">TrustPilot</a>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Important</h3>
                <div className="flex flex-col gap-3">
                  <Link href="/tos" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</Link>
                  <button className="text-white/70 hover:text-white transition-colors text-sm text-left">Live Chat</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-white/[0.05] mt-12 mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70"> 2026 Cosmos Market. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <div className="text-white/50 text-xs">Payment Methods:</div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-white/50 text-xs font-bold">VISA</span>
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-white/50 text-xs font-bold">MC</span>
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-white/50 text-xs font-bold">PP</span>
                </div>
                <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-white/50 text-xs font-bold">BTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
