import React from "react";
import { getReviews } from "@/lib/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerUI from "@/components/BannerUI";
import CrispApp from "@/components/Crisp";
import TopNotification from "@/components/TopNotification";
import RevealAnimation from "@/components/framer/RevealAnimation";
import { Star, MessageCircle } from "lucide-react";

export default async function ReviewsPage() {
  const reviewsResponse = await getReviews();
  const reviews = reviewsResponse.data;

  return (
    <>
      <CrispApp />
      <TopNotification />
      <Header />
      
      <div className="min-h-screen" style={{ backgroundColor: "#0B2F1F" }}>
        {/* Header Section */}
        <div className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#34A350]/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <RevealAnimation screenReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "rgba(52, 163, 80, 0.1)", border: "1px solid rgba(52, 163, 80, 0.3)" }}>
                  <MessageCircle size={16} className="text-[#34A350]" />
                  <p className="text-sm font-semibold tracking-wide" style={{ color: "#34A350" }}>
                    Customer Reviews
                  </p>
                </div>
              </RevealAnimation>
              <RevealAnimation screenReveal delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  What Our Customers Say
                </h1>
              </RevealAnimation>
              <RevealAnimation screenReveal delay={0.3}>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  Read reviews from our satisfied customers about their experience with Cosmos Market
                </p>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="container max-w-7xl mx-auto px-4 pb-20">
          {reviews.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">No reviews yet. Be the first to leave a review!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <RevealAnimation
                  key={review.uniqid}
                  delay={index * 0.1}
                  screenReveal
                >
                  <div className="bg-neutral-900/80 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:border-green-500/50 transition-all duration-200">
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                        />
                      ))}
                    </div>

                    {/* Product */}
                    <div className="text-sm text-green-400 font-medium mb-2">
                      {review.product_title}
                    </div>

                    {/* Message */}
                    <p className="text-white/80 text-base leading-relaxed mb-4">
                      {review.message}
                    </p>

                    {/* Reply */}
                    {review.reply && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                        <p className="text-sm text-green-300">
                          <span className="font-semibold">Reply: </span>
                          {review.reply}
                        </p>
                      </div>
                    )}

                    {/* Customer Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <p className="text-white font-medium">{review.customer_name}</p>
                        <p className="text-white/50 text-sm">
                          {new Date(review.created_at * 1000).toLocaleDateString()}
                        </p>
                      </div>
                      {review.is_automated && (
                        <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                          Automated
                        </span>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          )}
        </div>
      </div>

      <BannerUI />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";
