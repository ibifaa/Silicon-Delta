import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BChart() {
  const data = {
    labels: ["Digital Marketing", "UI/UX", "Graphic Design", "Web Development"],
    datasets: [
      {
        label: "",
        data: [45, 100, 200, 300, 400],
        backgroundColor: ["#0263FF", "#FF7723", "#2F2E41", "#8E30FF"],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    plugins: {
      afterDraw: (chart) => {
        const ctx = chart.ctx;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        chart.data.datasets.forEach((dataset, i) => {
          const meta = chart.getDatasetMeta(i);
          meta.data.forEach((bar, index) => {
            const data = dataset.data[index];
            const percentage =
              ((data / chart.scales.y.max) * 100).toFixed(0) + "%";
            ctx.fillStyle = "black";
            ctx.fillText(percentage, bar.x, bar.y - 10); // Adjust the offset as needed
          });
        });
      },
    },
    scales: {
      y: {
        position: "left",
      },
      x: {
        display: false,
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}

export default BChart;
