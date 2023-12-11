"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Input from "../Shared/Input";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../../constants";
import { useAddress } from "../../../AppContext";
import { uploadFileToIPFS } from "@/utils/uploadToIpfs";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dataName, setdataName] = useState("");
  const [dataPrice, setdataPrice] = useState(0);
  const [dataExpiration, setdataExpiration] = useState();
  const [dataHash, setdataHash] = useState("");
  const [FileUploaded, setFileUploaded] = useState("");
  const [loadUntilIpfsHash, setloadUntilIpfsHash] = useState(false);

  const [textValue, setTextValue] = useState("");
  const { connectedWalletaddress, setWalletAddress, dateInUnix } = useAddress();
  // const { connectedWalletaddress, setWalletAddress } = useAddress();

  const handleTextChange = (text) => {
    setTextValue(text);
  };

  const handleSelectChange = (option) => {
    setSelectedOption(option);
  };
  const handleFileChange = async (selectedFile) => {
    try {
      // Upload file to IPFS
      setloadUntilIpfsHash(true);
      const fileResponse = await uploadFileToIPFS(selectedFile);
      const ipfsHash = fileResponse.data.IpfsHash;

      // Update the state with the IPFS hash
      setdataHash(ipfsHash);

      // Optionally, you can set a state to indicate that the file has been successfully uploaded
      setFileUploaded("File uploaded successfully!");
      console.log("hash is", ipfsHash);
      setloadUntilIpfsHash(false);
    } catch (error) {
      console.error("Error uploading file to IPFS:", error);
      setloadUntilIpfsHash(false);

      // Handle error if the file upload fails
    }
  };
  // const handleFileChange = async (e) => {
  //   const selectedfile = e.target.files[0];
  //   setFileUploaded(selectedfile);
  //   const imageResponse = await uploadFileToIPFS(image);
  //   console.log("hashhh", imageResponse.data.IpfsHash);
  //   //  setImageInVIew(URL.createObjectURL(selectedImage));
  //   setdataHash(imageResponse.data.IpfsHash);
  // };
  const submitForm = async (e) => {
    e.preventDefault();
    if (!window.ethereum) {
      alert("Please install metamask");

      return;
    }
    if (!connectedWalletaddress) {
      alert("Please connect metamask");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    // alert("helloooo");
    // alert("signeerrrrr", connectedWalletaddress);
    try {
      const tx = await contract.addHealthData(
        dataName,
        dataHash,
        dataPrice,
        dateInUnix
      );
      const receipt = await tx.wait();
      console.log("mame", dataName);
      console.log("mame", dataPrice);
      console.log("mame", dataHash);
      console.log("date", dateInUnix);
      console.log("result of tx is", receipt);
    } catch (error) {
      console.log("bcc errrr", error);
    }
  };
  console.log("wallegt address is", connectedWalletaddress);

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
      <form className="w-full mt-10 " onSubmit={submitForm}>
        <div className="grid grid-cols-2 gap-5">
          <Input
            label="Health Data Name"
            type="text"
            placeholder="Please write health data name"
            isFile={false}
            value={dataName}
            onChange={setdataName}
            isDate={false}
          />

          <Input
            label="Price"
            type="number"
            value={dataPrice}
            onChange={setdataPrice}
            min={0}
            placeholder="Please write data price"
            isFile={false}
            isDate={false}
          />
          <Input
            label="Expiration Time"
            type="date"
            isDate={true}
            value={dataExpiration}
            onChange={setdataExpiration}
            placeholder="Please write data expiration time"
            isFile={false}
          />
          <Input
            label="Upload Data File"
            type="file"
            isDate={false}
            placeholder="Please write you details"
            // value={dataHash}
            isFile={true}
            onChange={handleFileChange}
          />
        </div>

        <button
          className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#156b6e] transition duration-500 ease-in-out hover:bg-[#1f2f30] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
          disabled={loadUntilIpfsHash ? true : false}
        >
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
