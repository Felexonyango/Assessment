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
        show: false,
      },
      responsive: [
        {
          breakpoint: 0,
          options: {
            chart: {
              width: "60%",
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
    series: [40, 21, 60]
  });

  return (
    <div>
      <h6>Assets  Status</h6>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="100%"
        height={320}
      />
    </div>
  );
};

export default DoughCharts;
