import React, { useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
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
      background: '#fff',
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      title: {
        text: "Days",
      },
    },
    yaxis: {
      title: {
        text: "Millage (Km)",
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

  return (
    <div>
       <h6>Fleet millage </h6>

      <Chart options={options} series={series} type="area" />
    </div>
  );
};

export default LineChart;
