import React, { useState } from "react";
import Chart from "react-apexcharts";

const AverageSales = () => {
  const [chartData, setChartData] = useState({
    chartOptions: {
        series: [
            {
              name: "Average Margin/Cube",
              data: [721, 722, 684, 688, 717, 858, 921, 863, 748, 699, 699],
            },
          ],
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false
            },
            toolbar: {
              show: false,
    
            }
          },
          stroke: {
            curve: "straight",
            colors: ["#ed7f33"]
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

export default AverageSales;
