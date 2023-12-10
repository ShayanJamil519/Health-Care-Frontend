import DataForSale from "@/components/Shared/DataForSale";
import Hero from "@/components/Shared/Hero";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero pageTitle="Available health data for sale" />
      <DataForSale cardsLength={12} />
    </div>
  );
};

export default page;
