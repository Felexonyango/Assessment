import React, { useState, useEffect } from "react";
import DoughCharts from "../components/chart/DoughCharts";
import LineChart from "../components/chart/LineChart";
import Navbar from "../components/shared/Navbar";
import Profile from "../components/shared/Profile";
import "@fortawesome/fontawesome-free/css/all.css";
// import { ReactComponent as CarSearchIcon } from '../assets/';
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

fill="#1E3A8A"
  height="20px"
  width="20px"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 250.993 250.993"
  xml:space="preserve"
>
  <path d="M242.697,69.229c-0.878,0-1.778,0.126-2.677,0.373l-10.171,2.802l-10.563-25.729c-2.993-7.289-11.837-13.219-19.717-13.219 h-98.851c-7.879,0-16.724,5.93-19.717,13.219L70.454,72.369L60.41,69.602c-0.899-0.248-1.799-0.373-2.677-0.373 c-4.807,0-8.296,3.672-8.296,8.733v5.996c0,0.262,0.021,0.518,0.039,0.775c-2.324,1.732-4.54,3.643-6.627,5.73 c-11.249,11.249-17.444,26.204-17.444,42.112c0,12.896,4.073,25.167,11.608,35.343L2.611,202.322c-3.481,3.48-3.481,9.124,0,12.605 c1.74,1.741,4.021,2.611,6.302,2.611c2.281,0,4.562-0.87,6.302-2.611l34.404-34.404c10.177,7.536,22.447,11.609,35.343,11.609 c15.908,0,30.864-6.195,42.112-17.444c3.629-3.629,6.724-7.648,9.262-11.956h73.987v12.765c0,5.906,4.805,10.711,10.711,10.711 h13.989c5.906,0,10.711-4.805,10.711-10.711V124.38c0-7.32-2.262-18.786-5.042-25.558l-1.705-4.153h1.292 c5.906,0,10.711-4.805,10.711-10.712v-5.996C250.993,72.901,247.504,69.229,242.697,69.229z M94.112,49.933 c1.79-4.36,7.11-7.927,11.824-7.927h88.418c4.713,0,10.034,3.567,11.824,7.927l15.977,38.919c1.79,4.36-0.602,7.927-5.315,7.927 h-84.277c-1.669-2.21-3.495-4.324-5.487-6.316c-11.249-11.249-26.204-17.444-42.112-17.444 c-0.111,0-0.22,0.007-0.331,0.008L94.112,49.933z M84.962,174.305c-11.146,0-21.626-4.341-29.508-12.223 c-7.882-7.881-12.222-18.36-12.222-29.507s4.341-21.626,12.222-29.508c7.882-7.881,18.361-12.222,29.508-12.222 s21.626,4.341,29.508,12.222c7.882,7.882,12.222,18.361,12.222,29.507c0,11.147-4.34,21.626-12.222,29.508 C106.588,169.964,96.109,174.305,84.962,174.305z M225.12,138.079c0,2.357-1.928,4.285-4.285,4.285h-30.351 c-2.356,0-4.285-1.928-4.285-4.285v-14.566c0-2.356,1.928-4.285,4.285-4.285h30.351c2.357,0,4.285,1.928,4.285,4.285 V138.079z"/>
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

          <div className="flex justify-between flex-col   h-3/4 mt-4 md:flex-row md:space-x-4">
      <div className="flex-1">
        <div className="h-full overflow-hidden">
          <DoughCharts />
        </div>
      </div>

      <div className="flex-1 mt-4 md:mt-0">
        <div className="h-full overflow-hidden">
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
