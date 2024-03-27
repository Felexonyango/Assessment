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

  const handleGoTrack = () => {};

  return (
    <>
      <div className="flex flex-row">
        <div className="container  w-full md:w-3/4">
          <h5 className="mt-2 text-lg font-medium">Dashboard</h5>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-row mb-2 sm:mb-0">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    className="h-5 w-5 text-blue-950"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill="currentColor" 
                      fillRule="evenodd"
                      d="M13.32 11.57l4.22 4.18a1 1 0 0 1-1.41 1.42l-4.18-4.22a7 7 0 1 1 1.37-1.38zM7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchInputChange}
                  placeholder="Search by Reg No.."
                  className="pl-10 border-b border-blue-950 px-2 py-2 rounded-bl-lg rounded-tl-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
               
                type="button"
                className="bg-blue-950 text-white font-bold py-1 px-2 rounded"
              >
                Go Track
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

          <div className="flex justify-between flex-col mt-4 md:flex-row md:space-x-4">
            <div className="flex-1">
              <div className="overflow-hidden">
                <DoughCharts />
              </div>
            </div>

            <div className="flex-1 mt-4 md:mt-0">
              <div className=" overflow-hidden">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-1/4 md:w-1/4 ${
            isMobile ? "hidden" : ""
          } mt-9 border-l border-gray-300`}
        >
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
