"use client";
import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import ProductSection from "./_components/ProductSection";
import { useUser } from "@clerk/nextjs";
import SignIn from "./(auth)/sign-in/_components/SignIn";

export default function Home() {
  const { user } = useUser();
  return user ? (
    <div>
      <HeroSection />
      <ProductSection />
    </div>
  ) : (
    <div>
      <SignIn />
    </div>
  );
}
