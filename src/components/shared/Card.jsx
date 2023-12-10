import React from "react";

const Card = () => {
  return (
    <div className="w-[30%] rounded-lg shadow-md font-poppins py-10 px-7 text-center">
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Name: </span>ABC Data
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Expiration: </span>08/07/05
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Owner: </span>0x1234
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Price: </span> 0.12 ETH
      </p>
      <p className="flex justify-start items-center gap-3 mb-1">
        <span className="font-semibold">Hash: </span> 0hkjhl14190809
      </p>
      <button className="mt-4 border-none rounded-lg w-full py-2 bg-[#156b6e] text-[#fff]">
        Buy Data
      </button>
    </div>
  );
};

export default Card;
