import React from "react";
import Chart from "react-apexcharts";
import { useColorModeValue } from "@chakra-ui/react";

function TransactionChartSummary({ expense = 100, income = 100 }) {
  const incomeColor = useColorModeValue("#2196f3", "#90caf9");
  const expenseColor = useColorModeValue("#e12d39", "#ffbdbd");
  const bgColor = "transparent";
  const labelColor = useColorModeValue("#222", "#eee");

  const options = {
    labels: ["Ingresos", "Gastos"],
    colors: [incomeColor, expenseColor],
    chart: {
      background: bgColor,
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: {
      mode: null,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: [incomeColor, expenseColor],
    },
    tooltip: {
      enabled: true,
      theme: useColorModeValue("light", "dark"),
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: bgColor,
        color: labelColor,
      },
    },
  };
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type="pie"
      width={"100%"}
      height={"100%"}
    ></Chart>
  );
}

export default TransactionChartSummary;
