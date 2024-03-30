import React, { useState } from "react";
import Chart from "react-apexcharts";

const SecondChart = () => {
  const [chartData, setChartData] = useState({
    chartOptions: {
      series: [10955.5, 8135.4, 5823.5, 3581, 2028.3, 240, 88, 80, 55.3],
      chart: {
        width: "100%",
        type: "pie",
      },

      labels: [
        "Team A",
        "Team B",
        "Team C",
        "Team D",
        "Team E",
        "Team F",
        "Team G",
        "Team H",
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
          "#a5a5a5",
          "#ffc000",
          "#5b9bd5",
          "#334263",
          "#9e480e",
          "#636363",
        ],
        hover: {
          colors: [
            "#ed7d31",
            "#a5a5a5",
            "#ffc000",
            "#589ad5",
            "#70ad47",
            "#334263",
            "#9e480e",
            "#636363",
          ],
        },
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
            "#a5a5a5",
            "#ffc000",
            "#5b9bd5",
            "#334263",
            "#9e480e",
            "#636363",
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
        width="430"
      />
    </div>
  );
};

export default SecondChart;
