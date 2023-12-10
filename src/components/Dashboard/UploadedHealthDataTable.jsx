"use client";
import { SiOpenaccess } from "react-icons/si";
import { IoEye } from "react-icons/io5";
import GrantAccessModal from "./GrantAccessModal";
import { useState } from "react";

const packageData = [
  {
    name: "ABCD",
    price: 0.001,
    expiration: `Jan 13,2023`,
    hash: "0x1231452525298148-0979078078908dakhaklfholafnlfa",
  },
  {
    name: "ABCD",
    price: 0.001,
    expiration: `Jan 13,2023`,
    hash: "0x1231452525298148-0979078078908dakhaklfholafnlfa",
  },
  {
    name: "ABCD",
    price: 0.001,
    expiration: `Jan 13,2023`,
    hash: "0x1231452525298148-0979078078908dakhaklfholafnlfa",
  },
  {
    name: "ABCD",
    price: 0.001,
    expiration: `Jan 13,2023`,
    hash: "0x1231452525298148-0979078078908dakhaklfholafnlfa",
  },
  {
    name: "ABCD",
    price: 0.001,
    expiration: `Jan 13,2023`,
    hash: "0x1231452525298148-0979078078908dakhaklfholafnlfa",
  },
];

const UploadedHealthDataTable = () => {
  const [openGrantAccessModal, setOpenGrantAccessModal] = useState(false);
  const [dataId, setDataId] = useState(null);

  const handleGrantAccessModal = (id) => {
    setDataId(id);
    setOpenGrantAccessModal(true);
  };

  return (
    <>
      {openGrantAccessModal && (
        <GrantAccessModal
          openGrantAccessModal={openGrantAccessModal}
          setOpenGrantAccessModal={setOpenGrantAccessModal}
        />
      )}
      <div className="rounded-sm  font-poppins border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="max-w-[120px] py-4 px-4 font-semibold text-lg text-black dark:text-white xl:pl-5">
                  Name
                </th>
                <th className="max-w-[70px] py-4 px-4 font-semibold text-lg text-black dark:text-white">
                  Price
                </th>
                <th className="max-w-[180px] py-4 px-4 font-semibold text-lg text-black dark:text-white">
                  Expiration
                </th>
                <th className="max-w-[180px] py-4 px-4 font-semibold text-lg text-black dark:text-white">
                  Hash
                </th>
                <th className="py-4 px-4 font-semibold text-lg text-black dark:text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-5">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.price}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.expiration}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.hash.slice(0, 20)} ......{" "}
                      {packageItem.hash.slice(-10)}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <button className="hover:text-primary">
                        <IoEye className="text-[25px]" />
                      </button>
                      <button
                        className="hover:text-primary"
                        onClick={() => handleGrantAccessModal(key)}
                      >
                        <SiOpenaccess className="text-[25px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UploadedHealthDataTable;
