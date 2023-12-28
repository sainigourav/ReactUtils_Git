import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export interface IDatasets<T> {
  label: string;
  data: Array<T>;
  backgroundColor: Array<string>;
  borderColor: Array<string>;
  borderWidth: number;
}

export interface IDoughnutChartProps<T> {
  labels: Array<string>;
  datasets: Array<IDatasets<T>>;
}

const DoughnutChart = <T extends string | number>(props: {
  data: IDoughnutChartProps<T>;
}) => {
  return <Doughnut data={props.data} />;
};

export default DoughnutChart;
