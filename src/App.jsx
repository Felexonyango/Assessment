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
      <div class="flex flex-col sm:flex-row"> 
    <div class="flex flex-row mb-2 sm:mb-0"> 
    <input 
    type="text" 
    value={searchInput} 
    onChange={handleSearchInputChange} 
    placeholder="Search by reg no" 
    class="border border-gray-300 px-2 py-1 mr-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

      <button onClick={handleGoTrack} class="bg-blue-950 text-white px-3 py-1 rounded-lg focus:outline-none">Go track</button>
     
    </div>
    <div class="ml-0 sm:ml-auto sm:mt-1">
        <input 
            type="date" 
            value={startDate} 
            onChange={handleStartDateChange} 
            class="border   border-blue-700 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      <Home/>
     
    </div>
  );
}

export default App;
