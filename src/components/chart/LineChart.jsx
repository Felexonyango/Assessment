import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [options] = useState({
    chart: {
      id: "line-chart",
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      events: {
        selection: false,
      },
      background: "#fff",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      title: {
        text: "Days",
      },
    },
    yaxis: {
      title: {
        text: "Mileage (Km)",
      },
    },
    stroke: {
      curve: "smooth",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
      {
        breakpoint: 9999,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
  });

  const [series] = useState([
    {
      name: "Series 1",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <div className="">
      <h6 className="text-left  font-bold text-blue-800">Fleet Mileage</h6>
      <div className="flex items-center justify-end mb-2">
        <div className="relative">
          <input
           name="start" 
           type="date" 
           value={startDate} 
           onChange={handleStartDateChange} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 sm:w-28 pl-8 pr-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Start date"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
        </div>
        <span className="mx-2 text-gray-500">to</span>
        <div className="relative">
          <input
            type="date" 
            value={endDate} 
            onChange={handleEndDateChange} 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 sm:w-28 pl-8 pr-2 py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="End date"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
        </div>
      </div>

      <Chart options={options} series={series} type="area" />
      <button className="bg-blue-950 text-white px-2 py-1 rounded-md float-right space-x-1">
        <div className="flex flex-row items-center">
          <span className="text-sm">Movement</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M13.77 10.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 11H4.75a.75.75 0 0 1 0-1.5H11.44l-2.98-2.97a.75.75 0 0 1 1.06-1.06l4.25 4.25z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default LineChart;
