"use client";
import Image from "next/image";
import HeroSection from "../_components/HeroSection";
import ProductSection from "../_components/ProductSection";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
//import SignIn from "./(auth)/sign-in/_components/SignIn";

export default function Home({ params }) {
  console.log(params);

  return (
    <div>
      <Header calssName="fixed" />
      <HeroSection />
      <ProductSection />
      <Footer />
    </div>
  );
}
