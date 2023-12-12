import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-[30%] rounded-lg shadow-md hover:shadow-xl duration-800  font-poppins py-7 px-5 text-center">
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Name: </span>
        {data?.name}
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Expiration: </span>
        {data?.expiration}
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Owner: </span>
        {data?.ownerOfData}
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Price: </span>
        {data?.price} ETH
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Hash: </span> {data?.dataHash}
      </p>
      <button className="mt-4 border-none rounded-lg w-full py-2 bg-[#156b6e] text-[#fff]">
        Buy Data
      </button>
    </div>
  );
};

export default Card;
