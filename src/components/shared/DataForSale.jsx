"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { contractABI, contractAddress } from "../../../constants";
import { ethers } from "ethers";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const DataForSale = ({ cardsLength }) => {
  const [allHealthRecords, setAllHealthRecords] = useState([]);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    const fetchAllHealthRecords = async () => {
      // if (!address) {
      //   return;
      // }
      // Connect to the contract using ethers.js
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const AllHealthRecords = await contract.getAllMyMarketRecords();
      console.log("AllHealthRecords " + AllHealthRecords);
      setAllHealthRecords(AllHealthRecords);
    };

    fetchAllHealthRecords();
  }, []);

  return (
    <div className="font-poppins my-10">
      <h1 className="text-[#156b6e] text-3xl text-center font-semibold">
        Health Data For Sale
      </h1>
      {/* Cards */}
      <div className="mt-10 w-[90%] mx-auto flex md:flex-row flex-wrap flex-col justify-center items-center gap-10  ">
        {/* {Array.from({ length: cardsLength }).map((item, index) => ( */}
        {allHealthRecords.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default DataForSale;
