import React, { useState } from "react";
import Chart from "react-apexcharts";

const VolumeCube = () => {
  const [chartData, setChartData] = useState({
    months: [
      { month: "January", value: 500 },
      { month: "February", value: 2290 },
      { month: "March", value: 615 },
      { month: "April", value: 3303 },
      { month: "May", value: 3819 },
      { month: "June", value: 4046 },
      { month: "July", value: 4275 },
      { month: "August", value: 1402 },
      { month: "September", value: 2487 },
      { month: "October", value: 3193 },
      { month: "November", value: 250 },
    ],
    options: {
      plotOptions: {
        bar: {
          horizontal: false,
          dataLabels: {
            position: "top", 
          },
          barWidth: '100%',
        },

      },
      xaxis: {
        categories: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
        ],
        title: {
          text: "Months",
        },
      },
      yaxis: {
        title: {
          text: "Volume (Cubes)",
        },
      },
      fill: {
        colors: ["#4472c4"],
      },
      chart: {
        toolbar: {
          show: false,
        },
        width: "100%", 
        height: "300px", 
       
      },
    },
  });

  return (
    <div>
      <Chart
        options={chartData.options}
        type="bar"
        series={[{ data: chartData.months.map((month) => month.value) }]}
        width="100%" 
       
      />
    </div>
  );
};

export default VolumeCube;
