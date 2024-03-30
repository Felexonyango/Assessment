import React, { useState } from "react";
import Chart from "react-apexcharts";

const ThirdChart = () => {
  const [chartData, setChartData] = useState({
    chartOptions: {
      series: [1300, 580, 246],
      chart: {
        width: "100%",
        type: "pie",
      },
      labels: [
        "Team A",
        "Team B",
        "Team C",
      
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      options: {
        chart: {
          width: "100%",
          height: "400px",
        },
      },
      fill: {
        colors: [
          "#4472c4",
          "#ed7d31",
          "#a5a5a5"
        
        ],
        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            hideEmptySeries: true,
            fillSeriesColor:true,
            theme: false,
        }
      },
      legend: {
        show: true,
        position: "right",
        horizontalAlign: "center",
        floating: false,
        fontSize: "14px",
        fontFamily: "Helvetica, Arial",
        fontWeight: 400,

        labels: {
          colors: undefined,
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: [
            "#4472c4",
            "#ed7d31",
            "#a5a5a5"
          ],
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0,
        },
        onItemClick: {
          toggleDataSeries: true,
        },
        onItemHover: {
          highlightDataSeries: true,
        },
      },

    },
  });

  return (
    <div>
      <Chart
        options={chartData.chartOptions}
        series={chartData.chartOptions.series}
        type="pie"
        width="420"
      />
    </div>
  );
};

export default ThirdChart;
