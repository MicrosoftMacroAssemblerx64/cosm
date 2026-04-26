import React from "react";
import RevealAnimation from "./framer/RevealAnimation";
import { ShoppingBagIcon, Sparkles } from "lucide-react";
import DisplayProducts from "./DisplayProducts";
import Script from "next/script";
import { getProducts } from "@/lib/api";

const Products = async () => {
  const productsData = await getProducts();

  return (
    <div id="products" className="relative py-24 px-4 flex flex-col items-center" style={{ backgroundColor: "#0B2F1F" }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#34A350]/5 rounded-full blur-3xl" />
      </div>
      
      <Script
        src="https://checkout.shoppex.io/embed/embed.iife.js"
        strategy="beforeInteractive"
      />
      <link
        href="https://cdn.shoppex.io/static/css/embed.css"
        rel="stylesheet"
      />
      <div className="container relative max-w-7xl mx-auto w-full z-10">
        <div className="text-center mb-12">
          <RevealAnimation screenReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(52, 163, 80, 0.1)", border: "1px solid rgba(52, 163, 80, 0.3)" }}>
              <Sparkles size={16} className="text-[#34A350]" />
              <p className="text-sm font-semibold tracking-wide" style={{ color: "#34A350" }}>
                Our Products
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Explore Our Products</h2>
          </RevealAnimation>
          <RevealAnimation screenReveal delay={0.3}>
            <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
              High-quality Discord services at the best prices
            </p>
          </RevealAnimation>
        </div>
        <DisplayProducts products={productsData} />
      </div>
    </div>
  );
};

export default Products;
