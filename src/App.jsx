import React from "react";
import { BrowserRouter } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.css";

import { Routing } from "./components/shared/Routing";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <BrowserRouter> 
    <div>
      <Navbar />
      <Routing />
    </div>
  </BrowserRouter>
  );
}

export default App;
