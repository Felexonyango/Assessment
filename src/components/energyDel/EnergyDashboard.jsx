import React, { useState } from "react";
import MonthBar from "./MonthBar";

const EnergyDashboard = () => {
  const [totalRevenue, setTotalRevenue] = useState(2231385);
  const [totalCost, setTotalCost] = useState(2131385);
  const [totalMargin, setTotalMargin] = useState(50031);
  const [totalVolume, setTotalVolume] = useState(2131385);
  const [revenue, setRevenue] = useState(699);
  const [cost, setCost] = useState(682);
  const [margin, setMargin] = useState(16);
  const [totalLifecycle, setTotalLifecycle] = useState(14.67);
  const [contractToPay, setContractToPay] = useState(45305.9);
  const [paymentLiftDays, setPaymentLiftDays] = useState(42305.9);

  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 lg:w-3/4">
          <MonthBar />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 p-2">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Payment Lift Days</h2>
            <p className="text-white  font-bold">{paymentLiftDays}</p>
            <p className="text-white  font-bold"> Target Days :23 Days</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Total Revenue</h2>
            <p className="text-white  font-bold"> $ {totalRevenue}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Total Cost</h2>
            <p className="text-white  font-bold"> $ {totalCost}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Total Volume</h2>
            <p className="text-white  font-bold">{totalVolume}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Revenue</h2>
            <p className="text-white  font-bold"> $ {revenue}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Cost/M3</h2>
            <p className="text-white  font-bold"> ${cost}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Margin</h2>
            <p className="text-white  font-bold"> ${margin}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Total Margin</h2>
            <p className="text-white  font-bold"> ${totalMargin}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Total Lifecycle</h2>
            <p className="text-white  font-bold">{totalLifecycle}</p>
            <p className="text-white  font-bold">Target Days:30 Days</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Contract To Pay</h2>
            <p className="text-white  font-bold">-{contractToPay}</p>
            <p className="text-white  font-bold">Target Days:7 Days</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="bg-customGray p-4 m-2 rounded-lg shadow-md">
            <h2 className="text-white  font-bold">Payment Lift Days</h2>
            <p className="text-white  font-bold">{paymentLiftDays}</p>
            <p className="text-white  font-bold"> Target Days :23 Days</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnergyDashboard;
