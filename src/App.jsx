import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

import { Routing } from "./components/shared/Routing";
import Navbar from "./components/shared/Navbar";
import FirstChart from "./components/charts2/Pie/FirstChart";
import SecondChart from "./components/charts2/Pie/SecondChart";
import ThirdChart from "./components/charts2/Pie/ThirdChart";
import VolumeCube from "./components/charts2/bar/VolumeCube";
import Revenue from "./components/charts2/bar/Revenue";
import GrossMargin from "./components/charts2/bar/GrossMargin";
import AverageMargin from "./components/charts2/line/AverageMargin";
import AverageSales from "./components/charts2/line/AverageSales";

function App() {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row">
        <FirstChart />
        <SecondChart />
        <ThirdChart />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <VolumeCube />
        <Revenue />
        <GrossMargin />
        </div>
        <div className="flex flex-col md:flex-row ">
        <div className=" w-full">

        <AverageSales/>
          </div>
          <div className=" w-full">

        <AverageMargin/>
          </div>

        </div>
      
    </div>
  );
}

export default App;
