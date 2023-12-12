"use client";
import { SiOpenaccess } from "react-icons/si";
import { IoEye } from "react-icons/io5";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../../../constants";

const DataSharedWithMeTable = () => {
  const [myHealthRecords, setMyHealthRecords] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllHealthRecords = async () => {
      try {
        setLoading(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const allHealthRecords = await contract.getAllRecordsSharedWithMe();
        console.log("AllHealthRecords ", allHealthRecords);
        setMyHealthRecords(allHealthRecords);
        setLoading(false);
      } catch (error) {
        setError("No health records shared with you");
        setLoading(false);
      }
    };

    fetchAllHealthRecords();
  }, []);

  const convertUnixTimestampToDate = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  };

  const seeFile = (hash) => {
    window.open(`https://gateway.pinata.cloud/ipfs/${hash}`, "_blank");
  };

  return (
    <>
      {error || loading ? (
        <div>{error}</div>
      ) : (
        <div className="rounded-sm font-poppins border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="max-w-[120px] py-4 px-4 font-semibold text-lg text-black dark:text-white xl:pl-5">
                    Name
                  </th>
                  <th className="max-w-[120px] py-4 px-4 font-semibold text-lg text-black dark:text-white">
                    Expiration
                  </th>
                  <th className="max-w-[180px] py-4 px-4 font-semibold text-lg text-black dark:text-white">
                    Owner
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
                {myHealthRecords.map((packageItem, key) => (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-5">
                      <h5 className="font-medium text-black dark:text-white">
                        {packageItem?.name}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {convertUnixTimestampToDate(packageItem?.expiration)}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.ownerOfData.slice(0, 20)} ......{" "}
                        {packageItem.ownerOfData.slice(-10)}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p
                        className="text-black dark:text-white hover:underline"
                        onClick={() => seeFile(packageItem?.dataHash)}
                      >
                        {packageItem?.dataHash.slice(0, 20)} ......{" "}
                        {packageItem?.dataHash.slice(-10)}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center justify-center">
                        <button
                          className="hover:text-primary"
                          onClick={() => seeFile(packageItem?.dataHash)}
                        >
                          <IoEye className="text-[25px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default DataSharedWithMeTable;
