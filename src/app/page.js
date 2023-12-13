"use client";
import Hero from "@/components/Home/Hero";
import DataForSale from "@/components/shared/DataForSale";

export default function Home() {
  return (
    <>
      <Hero />;
      <DataForSale cardsLength={6} />
    </>
  );
}
