import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Daily");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="w-full p-4 lg:w-[40%] md:w-[40%] mx-auto h-[100vh] bg-secondary">
      <section className="flex justify-between items-center">
        <div role="tablist" className="tabs tabs-boxed py-4 w-[90%] font-Manrope font-[700] text-[20px]">
          <a
            role="tab"
            className={`tab ${
              activeTab === "All"
                ? "bg-brown text-white px-2"
                : "border rounded-lg border-brown text-brown px-2"
            }`}
            onClick={() => handleTabClick("All")}
          >
            All
          </a>
          <a
            role="tab"
            className={`tab ${
              activeTab === "Daily"
                ? "bg-brown text-white px-2 mx-2"
                : "border rounded-lg border-brown text-brown mx-2 px-2"
            }`}
            onClick={() => handleTabClick("Daily")}
          >
            Daily
          </a>
          <a
            role="tab"
            className={`tab ${
              activeTab === "Weekly"
                ? "bg-brown text-white px-2"
                : "border rounded-lg border-brown text-brown px-2"
            }`}
            onClick={() => handleTabClick("Weekly")}
          >
            Weekly
          </a>
        </div>
        <HiOutlineMenuAlt1 className="text-4xl text-brown" />
      </section>
      <section className="bg-white/60 rounded-lg p-4">
      <div>
        <p className="text-[16px] font-Open-Sans my-2">Active Addresses <br /> <span className="text-[24px] font-[700] font-Manrope text-primary leading-3">110 / </span><span className="text-[14px] font-Manrope">24Hrs</span></p>
        <p className="text-[16px] font-Open-Sans my-2">Wallet Created <br /> <span className="text-[24px] font-[700] font-Manrope text-primary leading-3">110 / </span><span className="text-[14px] font-Manrope">24Hrs</span></p>
         <p className="text-[16px] font-Open-Sans my-2">Argent Transactions <br /> <span className="text-[24px] font-[700] font-Manrope text-primary leading-3">110 / </span><span className="text-[14px] font-Manrope">24Hrs</span></p>
        
      </div>

      </section>
    </main>
  );
};

export default Dashboard;
