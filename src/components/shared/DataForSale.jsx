"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { contractABI, contractAddress } from "../../../constants";
import { ethers } from "ethers";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const DataForSale = ({ cardsLength }) => {
  const [allHealthRecords, setAllHealthRecords] = useState([]);
  const { address, isConnected } = useAccount();
  const [error, setError] = useState();
  const [dep, setDep] = useState();

  useEffect(() => {
    const fetchAllHealthRecords = async () => {
      try {
        // Connect to the contract using ethers.js
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const AllHealthRecords = await contract.getAllMarketRecords();
        console.log("AllHealthRecords " + AllHealthRecords);
        setAllHealthRecords(AllHealthRecords);
      } catch (error) {
        console.log("error");
        setError("No record found");
      }
    };

    fetchAllHealthRecords();
  }, [dep]);

  return (
    <div className="font-poppins my-10">
      <h1 className="text-[#156b6e] text-3xl text-center font-semibold">
        Health Data For Sale
      </h1>
      {error ? (
        <div className="text-center mt-10">{error}</div>
      ) : (
        <div className="mt-10 w-[90%] mx-auto flex md:flex-row flex-wrap flex-col justify-center items-center gap-10  ">
          {allHealthRecords.map((item, index) => (
            <Card key={index} data={item} refresh={setDep} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DataForSale;
