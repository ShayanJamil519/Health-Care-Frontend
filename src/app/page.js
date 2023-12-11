"use client";
import Hero from "@/components/Home/Hero";
import DataForSale from "@/components/Shared/DataForSale";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../constants";

export default function Home() {
  const [dataOfAll, setdataOfAll] = useState([]);
  const getAllRecord = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const receipt = await contract.getAllUsersData();
    console.log(receipt[0]);
  };
  useEffect(() => {
    getAllRecord();
  }, []);
  return (
    <>
      <Hero />;
      <DataForSale cardsLength={6} />
    </>
  );
}
