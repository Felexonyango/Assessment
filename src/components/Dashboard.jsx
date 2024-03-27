import React, { useState, useEffect } from "react";
import DoughCharts from "../components/chart/DoughCharts";
import LineChart from "../components/chart/LineChart";
import Navbar from "../components/shared/Navbar";
import Profile from "../components/shared/Profile";
import "@fortawesome/fontawesome-free/css/all.css";

function Dashboard() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleGoTrack = () => {
    console.log("Search input:", searchInput);
    console.log("Start date:", startDate);
    console.log("End date:", endDate);
  };

  return (
    <div className="">
      
      <div className="flex flex-row">
        <div className="container w-full md:w-3/4">
          <h5 className="mt-2 text-lg font-medium">Dashboard</h5>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-row mb-2 sm:mb-0">
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder="Search by reg no"
                className="border border-gray-300 px-2 py-1 mr-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
  
              <button
                onClick={handleGoTrack}
                className="bg-blue-950 text-white px-3 py-1 rounded-lg focus:outline-none"
              >
                Go track
              </button>
            </div>
            <div className="ml-0 sm:ml-auto sm:mt-1">
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="border border-blue-700 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
  
          <div className="flex flex-col mt-4 md:flex-row">
            <div className="flex-1 p-4 mb-4 md:mb-0 md:mr-2">
              <div className="bg-aliceblue rounded-lg overflow-hidden">
                <DoughCharts />
              </div>
            </div>
            <div className="border-l-2 border-gray-300"></div> 
            <div className="flex-1 p-4 md:ml-2">
              <div className="bg-aliceblue rounded-lg overflow-hidden">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        <div className={`w-1/4 md:w-1/4 ${isMobile ? 'hidden' : ''} mt-9 border-l border-gray-300`}> 
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
