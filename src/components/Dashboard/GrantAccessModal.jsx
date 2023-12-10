import Input from "../Shared/Input";
import Modal from "../Shared/Modal";

const GrantAccessModal = ({
  openGrantAccessModal,
  setOpenGrantAccessModal,
}) => {
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
        <form className="text-left">
          <h1 className="text-2xl font-semibold mb-5 font-poppins text-center">
            Grant access to other user
          </h1>

          <Input
            label="Enter the address to which you want to grant access to the file."
            type="text"
            required
            placeholder="Please paste the user address"
          />

          <div className="mt-3 sm:mt-5 flex justify-center items-center ">
            <button
              type="submit"
              onClick={() => setOpenGrantAccessModal(false)}
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
