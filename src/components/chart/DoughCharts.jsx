import React, { useState } from "react";
import Chart from "react-apexcharts";

const DoughCharts = () => {
  const [chartData] = useState({
    options: {
      chart: {
        type: "donut",
        id: "donut-chart",
      },
      labels: ["Active", "Garage", "Yard"],
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          expandOnClick: true,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          donut: {
            size: "65%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 600,
                color: undefined,
                offsetY: -10,
                formatter: function (val) {
                  return val;
                },
              },
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                color: undefined,
                offsetY: 16,
                formatter: function () {
                  return "";
                },
              },
              total: {
                show: true,
                offsetY: 60,
                label: "Total",
                fontSize: "22px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 600,
                color: "#373d3f",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      fill: {
        colors: ["#1B998B", "#FF4560", "#FF9800"],
      },
      legend: {
        show: true,
      },
      responsive: [
        {
          breakpoint: 0,
          options: {
            chart: {
              width: "50%",
            },
          },
        },
      ],
      annotations: {
        points: [
          {
            x: 0,
            y: 40,
            marker: {
              size: 5,
              fillColor: "#1B998B",
            },
          },
          {
            x: 1,
            y: 21,
            marker: {
              size: 5,
              fillColor: "#FF4560",
            },
          },
          {
            x: 2,
            y: 60,
            marker: {
              size: 5,
              fillColor: "#FF9800",
            },
          },
        ],
      },
    },
    series: [40, 21, 60],
  });

  return (
    <div className="">
      <h6 className="text-left font-bold  text-blue-800">Assets Status</h6>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="100%"
        height={200}
      />
      <button className="bg-blue-950   text-white font-bold py-2 px-4 rounded float-right space-x-1">
        <div className="flex flex-row items-center">
          <span className="text-sm">Current Status</span>
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
  );
};

export default DoughCharts;
