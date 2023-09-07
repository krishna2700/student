import React, { useEffect } from "react";
import { Bar, Doughnut, Line, PolarArea, Radar } from "react-chartjs-2";
import jsonData from "./data.json";
import "./Featuresinfo.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  RadialLinearScale,
  LineElement,
  Title,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  RadialLinearScale,
  LineElement,
  Title
);

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function FeaturedInfo() {
  const chartColors = Array.from({ length: 5 }, () => generateRandomColor());

  useEffect(() => {
    const canvasId = `myChart-${Math.random()}`;

    const canvas = document.createElement("canvas");
    canvas.id = canvasId;

    document.querySelector(".chart-container").appendChild(canvas);

    new Chart(canvas, {
      type: "line",
      data: {
        labels: jsonData.map((item) => item.topic),
        datasets: [
          {
            label: "Intensity",
            data: jsonData.map((item) => item.intensity),
            borderColor: chartColors,
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: "Line Chart",
          },
        },
      },
    });
  }, [chartColors]);

  return (
    <div className="featured">
      <div className="chart-container">
        <h2>Bar Chart</h2>
        <Bar
          data={{
            labels: jsonData.map((item) => item.topic),
            datasets: [
              {
                label: "Intensity",
                data: jsonData.map((item) => item.intensity),
                backgroundColor: chartColors,
              },
            ],
          }}
        />
      </div>

      <div className="chart-container">
        <h2>Doughnut Chart</h2>
        <Doughnut
          data={{
            labels: jsonData.map((item) => item.topic),
            datasets: [
              {
                data: jsonData.map((item) => item.intensity),
                backgroundColor: chartColors,
              },
            ],
          }}
        />
      </div>

      <div className="chart-container">
        <h2>Line Chart</h2>
        <Line
          data={{
            labels: jsonData.map((item) => item.topic),
            datasets: [
              {
                label: "Intensity",
                data: jsonData.map((item) => item.intensity),
                borderColor: chartColors,
                borderWidth: 2,
                fill: false,
              },
            ],
          }}
        />
      </div>

      <div className="chart-container">
        <h2>Polar Area Chart</h2>
        <PolarArea
          data={{
            labels: jsonData.map((item) => item.topic),
            datasets: [
              {
                data: jsonData.map((item) => item.intensity),
                backgroundColor: chartColors,
              },
            ],
          }}
        />
      </div>

      <div className="chart-container">
        <h2>Radar Chart</h2>
        <Radar
          data={{
            labels: jsonData.map((item) => item.topic),
            datasets: [
              {
                label: "Intensity",
                data: jsonData.map((item) => item.intensity),
                borderColor: chartColors,
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
