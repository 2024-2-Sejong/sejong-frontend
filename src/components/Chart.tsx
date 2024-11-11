import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import {
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  RadialLinearScale,
} from "chart.js";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background-color: var(--white-color);
  border-radius: 20px;
  padding: 108px 86px;
`;

ChartJS.register({
  id: "backgroundColorPlugin",
  beforeDraw: (chart) => {
    const { ctx, scales } = chart;
    const radialScale = scales.r as RadialLinearScale;
    const colors = [
      "rgba(85, 38, 255, 0.1)",
      "rgba(85, 38, 255, 0.1)",
      "rgba(85, 38, 255, 0.1)",
      "rgba(85, 38, 255, 0.1)",
      "rgba(85, 38, 255, 0.1)",
    ];

    ctx.save();

    // 각 레벨의 배경 색상을 그립니다.
    colors.forEach((color, index) => {
      ctx.beginPath();
      ctx.fillStyle = color;

      // 각 포인트의 위치를 계산하여 폴리곤을 그립니다.
      radialScale.ticks.forEach((_tick, tickIndex) => {
        const pointPosition = radialScale.getPointPositionForValue(
          tickIndex,
          (index + 1) * 2
        ); // 각 레벨 값으로 위치 계산
        if (tickIndex === 0) {
          ctx.moveTo(pointPosition.x, pointPosition.y);
        } else {
          ctx.lineTo(pointPosition.x, pointPosition.y);
        }
      });
      ctx.closePath();
      ctx.fill();
    });

    ctx.restore();
  },
});

export default function Chart() {
  const data: ChartData<"radar"> = {
    labels: ["그래프", "구현", "DP", "문자열", "자료구조", "그리디"],
    datasets: [
      {
        label: "성취도",
        data: [5, 9, 6, 4, 2, 3],
        backgroundColor: "rgba(13, 17, 22, 0.2)", // 데이터 영역 배경색
        borderColor: "rgba(13, 17, 22, 1)",
        pointBackgroundColor: "rgba(13, 17, 22, 1)",
        pointBorderWidth: 0.1,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<"radar"> & ChartOptions = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "rgba(255, 255, 255, 1)",
        },
        grid: {
          color: "rgba(255, 255, 255, 1)", // 격자선 색상을 하얀색으로 설정
        },
        min: 0,
        max: 10,
        ticks: {
          count: 6,
        },
        pointLabels: {
          font: {
            size: 18,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Wrapper>
      <Radar data={data} options={options} />
    </Wrapper>
  );
}
