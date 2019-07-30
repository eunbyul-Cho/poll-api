import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = props => {
  const { candidates } = props;
  let data = {
    labels: candidates.map(e => e.name),
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        data: candidates.map(e => e.count)
      }
    ]
  };
  return (
    <>
      <Doughnut data={data} width={500} height={500} />
    </>
  );
};

export default Chart;
