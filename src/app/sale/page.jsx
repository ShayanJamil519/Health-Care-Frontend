import DataForSale from "@/components/shared/DataForSale";
import Hero from "@/components/shared/Hero";
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
