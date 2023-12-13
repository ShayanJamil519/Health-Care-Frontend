"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Input from "../Shared/Input";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import { contractABI, contractAddress } from "../../../constants";
import { toast } from "react-toastify";
import RequestLoader from "../Shared/RequestLoader";

const projectId = "2NeEZqOeOOi9fQgDL6VoIMwKIZY";
const projectSecret = "b4ae65044a6e29c52c4091bf29a976b2";

const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    expiration: "",
  });

  const [loading, setLoading] = useState(false);
  const [uploadDataFile, setUploadDataFile] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDataFileChange = (event) => {
    if (event.target.files.length > 0) {
      setUploadDataFile(event.target.files[0]);
    }
  };

  // Function to upload file and Send Email to student
  const handleHealthDataUpload = async (event) => {
    event.preventDefault();

    try {
      const currentTimestamp = Date.now();
      const expirationTimestamp = Date.parse(formData.expiration);

      if (expirationTimestamp <= currentTimestamp) {
        toast.error("Please select an expiration time in the future.");
        return;
      }

      // Checking if someone clicks upload certicate submit button without selecting a file to make sure it gives error
      if (!uploadDataFile) {
        toast.error("Please select a data file to upload.");
        return;
      }

      setLoading(true);
      // Adding our file to ipfs
      const added = await ipfs.add(uploadDataFile);
      let dataHash = added.path;
      console.log("dataHash: ", dataHash);

      // Making connection to the blockchain, getting signer wallet address and connecting to our smart contract
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      // calling our smart contract function
      const tx = await contract.addHealthData(
        formData.name,
        dataHash,
        ethers.utils.parseEther(formData.price),
        Math.floor(new Date(formData.expiration).getTime() / 1000)
      );
      await tx.wait();
      toast.success("Health Data Uploaded Successfully");
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
      // toast.error("Network Error");
      toast.error(error);
    } finally {
      setLoading(false);
    }
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
      <form className="w-full mt-10 " onSubmit={handleHealthDataUpload}>
        <div className="grid grid-cols-2 gap-5">
          <Input
            label="Health Data Name"
            type="text"
            name="name"
            require={true}
            placeholder="Please write health data name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <Input
            label="Price"
            type="number"
            name="price"
            require={true}
            value={formData.price}
            onChange={handleInputChange}
            min={0}
            placeholder="Please write data price"
          />
          <Input
            label="Expiration Time"
            type="datetime-local"
            name="expiration"
            require={true}
            value={formData.expiration}
            onChange={handleInputChange}
            placeholder="Please write data expiration time"
          />
          <Input
            label="Upload Data File"
            type="file"
            name="uploadDataFile"
            require={true}
            onChange={handleDataFileChange}
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full flex justify-center items-center font-semibold text-sm gap-3 bg-[#156b6e] transition duration-500 ease-in-out hover:bg-[#1f2f30] text-[#fff] hover:text-[#fff] outline-none border-0 px-7 py-5 rounded-sm"
        >
          {loading ? <RequestLoader /> : "Upload"}
          {!loading && (
            <>
              <span className="p-0 rounded-full bg-[#fff]  transition duration-500 text-[#20332c] ">
                <IoIosArrowRoundForward className="text-[27px] font-bold" />
              </span>
              <style jsx>{`
                button:hover span {
                  background-color: #fff;
                  color: #257830;
                }
              `}</style>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
