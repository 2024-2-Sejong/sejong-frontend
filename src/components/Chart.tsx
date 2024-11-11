import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js/auto";

const Chart = () => {
  const data = {
    labels: ["그래프", "구현", "DP", "문자열", "자료구조", "그리디"],
    datasets: [
      {
        label: "성취도",
        data: [5, 9, 6, 4, 2, 3],
        backgroundColor: ["rgba(13, 17, 22, 0.2)"],
        borderColor: ["rgba(13, 17, 22, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"radar"> & ChartOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        min: 0,
        max: 10,
        ticks: {
          count: 6,
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default Chart;
