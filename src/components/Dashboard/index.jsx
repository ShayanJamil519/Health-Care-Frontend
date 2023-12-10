"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";
import Link from "next/link";

const sidebarLinks = [
  {
    linkText: `My Uploaded Health Data`,
  },
  {
    linkText: `Data I've Granted Access`,
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
            {sidebarLinks[currentTab].linkText}
          </h1>
        </div>
        <div className="p-10">{currentTab === 0 && <Table />}</div>
      </div>
    </div>
  );
};

export default Dashboard;
