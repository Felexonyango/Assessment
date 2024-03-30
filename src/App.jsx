import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

import { Routing } from "./components/shared/Routing";
import Navbar from "./components/shared/Navbar";
import FirstChart from "./components/energyDel/Pie/FirstChart";
import SecondChart from "./components/energyDel/Pie/SecondChart";
import ThirdChart from "./components/energyDel/Pie/ThirdChart";
import VolumeCube from "./components/energyDel/bar/VolumeCube";
import Revenue from "./components/energyDel/bar/Revenue";
import GrossMargin from "./components/energyDel/bar/GrossMargin";
import AverageMargin from "./components/energyDel/line/AverageMargin";
import AverageSales from "./components/energyDel/line/AverageSales";

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
