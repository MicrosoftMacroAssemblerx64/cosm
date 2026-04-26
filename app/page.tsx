import Aboutus from "@/components/Aboutus";
import BannerUI from "@/components/BannerUI";
import Contact from "@/components/Contact";
import CrispApp from "@/components/Crisp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Feedbacks from "@/components/Feedbacks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeReviews from "@/components/HomeReviews";
import MarqueeBanner from "@/components/MarqueeBanner";
import Products from "@/components/Products";
import TopNotification from "@/components/TopNotification";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <CrispApp />
      <TopNotification />
      <Header />
      <Hero />
      <MarqueeBanner />
      <Aboutus />
      <Products />
      <HomeReviews />
      <Features />
      <Feedbacks />
      <Faq />
      <Contact />
      <BannerUI />
      <Footer />
    </>
  );
}

export const dynamic = "force-dynamic";
