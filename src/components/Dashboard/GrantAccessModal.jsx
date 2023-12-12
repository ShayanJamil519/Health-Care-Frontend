import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../../constants";
import Input from "../Shared/Input";
import Modal from "../Shared/Modal";
import { useState } from "react";
import { toast } from "react-toastify";

const GrantAccessModal = ({
  id,
  openGrantAccessModal,
  setOpenGrantAccessModal,
}) => {
  const [sharedTo, setSharedTo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Health Record Id: ", id, sharedTo);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const tx = await contract.grantAccess(id, sharedTo);

    await tx.wait();
    toast.success("File Shared Successfully");
    setOpenGrantAccessModal(false);
  };
  return (
    <Modal>
      <div
        style={{
          borderRadius: "10px",
          background: "#F3F4F8",
          boxShadow:
            "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 2px 3px 21.2px 0px rgba(0, 0, 0, 0.25)",
        }}
        className=" p-5 md:p-7 bg-[#fff] text-center border-2 border-[#000] font-poppins w-[90%] sm:w-[60%] md:w-[40%]  mx-auto"
      >
        <form className="text-left" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold mb-5 font-poppins text-center">
            Grant access to other user
          </h1>

          <Input
            label="Enter the address to which you want to grant access to the file."
            type="text"
            required
            placeholder="Please paste the user address"
            value={sharedTo}
            onChange={(e) => setSharedTo(e.target.value)}
          />

          <div className="mt-3 sm:mt-5 flex justify-center items-center ">
            <button
              type="submit"
              className="rounded-[5px] w-full bg-[#156b6e]  py-2 text-sm text-[#fff] border-none  sm:text-base "
            >
              Grant Access
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default GrantAccessModal;
