"use client";
import Hero from "@/components/Home/Hero";
import DataForSale from "@/components/Shared/DataForSale";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../constants";

export default function Home() {
  return (
    <>
      <Hero />;
      <DataForSale cardsLength={6} />
    </>
  );
}
