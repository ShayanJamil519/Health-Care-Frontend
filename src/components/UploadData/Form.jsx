"use client";
import React, { useState } from "react";
import Input from "../shared/Input";
import { IoIosArrowRoundForward } from "react-icons/io";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [textValue, setTextValue] = useState("");

  const handleTextChange = (text) => {
    setTextValue(text);
  };

  const handleSelectChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      style={{
        boxShadow: "0px 5px 43px 0px rgba(17, 29, 25, 0.12)",
      }}
      className="w-[70%] my-20 mx-auto p-10 font-poppins"
    >
      <h1 className="font-bold text-2xl">Upload your health data</h1>
      <p className="text-sm mt-3 leading-6 text-[#62706b]">
        Please complete the form below, to upload your health data
      </p>
      <form className="w-full mt-10 ">
        <div className="grid grid-cols-2 gap-5">
          <Input
            label="Health Data Name"
            type="text"
            placeholder="Please write health data name"
          />

          <Input
            label="Price"
            type="number"
            min={0}
            placeholder="Please write data price"
          />
          <Input
            label="Expiration Time"
            type="text"
            placeholder="Please write data expiration time"
          />
          <Input
            label="Upload Data File"
            type="file"
            placeholder="Please write you details"
          />
        </div>

        <button className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#156b6e] transition duration-500 ease-in-out hover:bg-[#1f2f30] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm">
          Upload
          <span className="p-0 rounded-full bg-[#fff]  transition duration-500 text-[#20332c] ">
            <IoIosArrowRoundForward className="text-[27px] font-bold" />
          </span>{" "}
          <style jsx>{`
            button:hover span {
              background-color: #fff;
              color: #257830;
            }
          `}</style>
        </button>
      </form>
    </div>
  );
};

export default Form;
