import { ethers } from "ethers";
import React from "react";

const convertUnixTimestampToDate = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
  return date.toLocaleString(); // Adjust format as needed using Date methods
};

const Card = ({ data }) => {
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
        {`${data?.ownerOfData.slice(0, 20)}...${data?.ownerOfData.slice(-10)}`}
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
      <button className="mt-4 border-none rounded-lg w-full py-2 bg-[#156b6e] text-[#fff]">
        Buy Data
      </button>
    </div>
  );
};

export default Card;
