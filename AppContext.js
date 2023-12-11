// AddressContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [connectedWalletaddress, setAddress] = useState(null);

  const setWalletAddress = (newAddress) => {
    setAddress(newAddress);
  };
  const [dateInUnix, setdateInUnix] = useState();

  const setDate = (newDate) => {
    setdateInUnix(newDate);
  };

  return (
    <AddressContext.Provider
      value={{ connectedWalletaddress, setWalletAddress, dateInUnix, setDate }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddress must be used within an AddressProvider");
  }
  return context;
};
