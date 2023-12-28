import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import DoughnutChart, {
  IDoughnutChartProps,
} from "../components/DoughnutChart/DoughnutChart";

const chartData: IDoughnutChartProps<number> = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "No. of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const meta: Meta<typeof DoughnutChart> = {
  title: "DoughnutChart",
  tags: ['autodocs'],
  component: DoughnutChart,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof DoughnutChart>;


export const Example: Story = (args) => {
  return (
    <>
      <DoughnutChart {...args} />
    </>
  );
};

Example.args = {
  data: chartData,
};

Example.argTypes = {
  data: {
    controls: {
      controls: "object",
    },
  },
};
