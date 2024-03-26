import React, { useState } from "react";
import Chart from "react-apexcharts";

const Charts = () => {
  const [chartData, setChartData] = useState({
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
          dataLabels: {
            enabled: false, // Disable dataLabels
          },
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
                formatter: function (val) {
                  return val;
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
    },
    series: [40, 21, 60],
  });



  return (
    <div style={{ position: "relative" }}>
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

export default Charts;
