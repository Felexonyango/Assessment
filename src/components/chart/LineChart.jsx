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
      background: "#eff6ff",
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
        breakpoint: 300,
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
    <div className="bg-indigo-50 rounded-lg overflow-hidden p-4 relative" style={{ height: "300px" }}>
      <h6 className="text-left  font-bold text-blue-800">Fleet Mileage</h6>
      <div className=" mb-1  float-right">
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="border border-blue-800 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Chart options={options} series={series} type="area" />
      <div className=" mt-9">
      <button className="bg-blue-950 text-white font-bold py-1 px-3 rounded absolute bottom-4 right-4">
        <div className="flex flex-row items-center">
          <span className="text-sm">Movement</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.77 10.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.44 11H4.75a.75.75 0 0 1 0-1.5H11.44l-2.98-2.97a.75.75 0 0 1 1.06-1.06l4.25 4.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
      </div>
    </div>
  );
};

export default LineChart;
