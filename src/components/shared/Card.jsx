import { ethers } from "ethers";
import React from "react";
import { toast } from "react-toastify";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { contractABI, contractAddress } from "../../../constants";

const convertUnixTimestampToDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
  return date.toLocaleString(); // Adjust format as needed using Date methods
};

const Card = ({ data }) => {
  const { address, isConnected } = useAccount();

  const buyData = async () => {
    if (address == data?.ownerOfData) {
      toast.warn("You are the owner of this file");
      return;
    } else {
      // call smart contract function
      try {
        console.log("Hello: ", data.id, data.ownerOfData);
        // Making connection to the blockchain, getting signer wallet address and connecting to our smart contract
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        // Convert the price to Wei
        const recordPrice = ethers.utils.parseUnits(
          data?.price.toString(),
          "ether"
        );

        console.log("Converted Price: ", data?.price.toString());

        // calling our smart contract function
        const tx = await contract.purchaseData(data.ownerOfData, data.id, {
          from: address,
          value: data?.price.toString(),
        });

        await tx.wait();
        toast.success("Health Data Uploaded Successfully");
      } catch (error) {
        console.error("Transaction error: ", error);
        toast.error("Network Error!");
      }
    }
  };

  return (
    <div className="max-w-[30%] rounded-lg shadow-md hover:shadow-xl duration-800  font-poppins py-7 px-5 text-center">
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Name: </span>
        {data?.name}
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Expiration: </span>
        {/* {data?.expiration} */}
        {convertUnixTimestampToDate(data?.expiration)}
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Owner: </span>
        {/* {data?.ownerOfData} */}
        {/* {data?.ownerOfData.slice(0, 15)} {`...`} {data?.ownerOfData.slice(10)}{" "}
         */}

        {address == data?.ownerOfData
          ? "You"
          : `${data?.ownerOfData.slice(0, 20)}...${data?.ownerOfData.slice(
              -10
            )}`}
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Price: </span>
        {/* {data?.price} ETH */}
        {/* ethers.utils
                        .formatEther(data.price)
                        .toString() */}
        {ethers.utils.formatEther(data?.price).toString()} ETH
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Hash: </span>

        {`${data?.dataHash.slice(0, 20)}...${data?.dataHash.slice(-10)}`}
      </p>
      <button
        className="mt-4 border-none rounded-lg w-full py-2 bg-[#156b6e] text-[#fff]"
        onClick={buyData}
      >
        Buy Data
      </button>
    </div>
  );
};

export default Card;
