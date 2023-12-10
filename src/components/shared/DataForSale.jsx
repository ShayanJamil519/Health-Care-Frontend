import React from "react";
import Card from "./Card";

const DataForSale = ({ cardsLength }) => {
  return (
    <div className="font-poppins my-10">
      <h1 className="text-[#156b6e] text-3xl text-center font-semibold">
        Health Data For Sale
      </h1>
      {/* Cards */}
      <div className="mt-10 w-[90%] mx-auto flex justify-center items-center gap-10  flex-wrap">
        {Array.from({ length: cardsLength }).map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default DataForSale;
