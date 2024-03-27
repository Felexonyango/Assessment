import { Routes, Route, BrowserRouter } from "react-router-dom";
import Modal from "../Modal";
import Dashboard from "../Dashboard";
export const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
};
