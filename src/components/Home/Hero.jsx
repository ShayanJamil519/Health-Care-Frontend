import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient( 135deg, rgba(0, 0, 0, 0.2) 45%, rgba(0, 0, 0, 0.2)), url('/hero__bg.webp') no-repeat center center/cover",
      }}
      className="min-h-[90vh] w-full flex justify-center font-poppins items-center "
    >
      {/* Left */}
      <div className="w-full text-center mx-auto ">
        <h1 className="text-[#ffffff] text-5xl font-semibold">
          Welcome to MediChain Access
        </h1>
        <p className="text-[#fff] mt-5 w-[60%] mx-auto">
          MediChain Access: Your Gateway to Secure Health Data Trading. Buy,
          Sell, and Share Health Information with Confidence on Blockchain.
          Empowering Ownership and Control over Personal Health Data.
        </p>
      </div>
    </div>
  );
};

export default Hero;
