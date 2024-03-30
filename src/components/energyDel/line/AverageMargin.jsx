import React, { useState } from "react";
import Chart from "react-apexcharts";

const AverageMargin = () => {
  const [chartData, setChartData] = useState({
    chartOptions: {
      series: [
        {
          name: "Average Margin/Cube",
          data: [13, 21, 9, 7, 3, 36, 20, 28, 28, 16, 17],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "straight",
        colors: ["#ed7f33"],
      },

      width: "100%",
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
      },
    },
  });

  return (
    <div>
      <Chart
        options={chartData.chartOptions}
        type="line"
        series={chartData.chartOptions.series}
        width="100%"
      />
    </div>
  );
};

export default AverageMargin;
