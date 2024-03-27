import React from "react";
import DoughCharts from "./components/chart/DoughCharts";
import LineChart from "./components/chart/LineChart";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="">
      <Navbar/>
      <h5>Dashboard</h5>
    <div className="flex flex-row mt-4">
      <div className="flex-1 p-4 mr-4" style={{ backgroundColor: "aliceblue" }}>
        <DoughCharts />
      </div>
      <div className="flex-1 p-4" style={{ backgroundColor: "aliceblue" }}>
        <LineChart />
      </div>
    </div>
    <Home/>

    </div>
  );
}

export default App;
