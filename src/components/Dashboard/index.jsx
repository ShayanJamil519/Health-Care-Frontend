"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import UploadedHealthDataTable from "./UploadedHealthDataTable";
import DataSharedWithMeTable from "./DataSharedWithMeTable";

const sidebarLinks = [
  {
    linkText: `My Uploaded Health Data`,
  },

  {
    linkText: `Data Shared with Me`,
  },
];

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="w-full flex justify-start items-stretch">
      <Sidebar
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        sidebarLinks={sidebarLinks}
      />
      <div className="bg-[#f1f5f9] w-full">
        {/* Header */}
        <div className="w-full bg-[#fff] p-6  flex justify-between items-center">
          <h1 className="font-poppins  font-semibold">
            <Link href="/" className="text-lg font-poppins mr-2">
              Home {` > `}
            </Link>
            <span className="font-normal text-[15px]">
              {" "}
              {sidebarLinks[currentTab].linkText}
            </span>
          </h1>
        </div>
        <div className="p-10">
          {currentTab === 0 && <UploadedHealthDataTable />}
          {currentTab === 1 && <DataSharedWithMeTable />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
