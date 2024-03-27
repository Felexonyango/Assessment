import React, { useState } from "react";
import DoughCharts from "./components/chart/DoughCharts";
import LineChart from "./components/chart/LineChart";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
      <Navbar/>
      <div className=" container">
      <h5 className="mt-2 text-lg font-medium">Dashboard</h5>
      <hr className="my-4 border-t border-gray-300" />

      <div className="flex flex-row">
        <div className="flex flex-row">
          <input 
            type="text" 
            value={searchInput} 
            onChange={handleSearchInputChange} 
            placeholder="Search by reg no" 
            className="border border-gray-300 px-2 py-1 mr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={handleGoTrack} className="bg-blue-950 text-white px-3 py-1 rounded-md focus:outline-none">Go track</button>
        </div>
        <div className="ml-auto"> 
          <input 
            type="date" 
            value={startDate} 
            onChange={handleStartDateChange} 
            className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
         
        </div>
      </div>

      <div className="flex flex-col mt-4 md:flex-row">
        <div className="flex-1 p-4 mb-4 md:mb-0 md:mr-4" style={{ backgroundColor: "aliceblue" }}>
          <DoughCharts />
        </div>
        <div className="flex-1 p-4" style={{ backgroundColor: "aliceblue" }}>
          <LineChart />
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default App;
