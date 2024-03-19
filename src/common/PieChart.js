import React from "react";
import ReactECharts from "echarts-for-react";
import { makeStyles, useTheme } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  chartContainer: {
    width: "100%",
    height: "300px",
  },
}));

const DoughnutChart = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const segmentColors = ["#227CB4", "#FFBF65", "#D26E64"];

  const chartOptions = {
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return `${params.name}: ${params.percent}%`;
      },
    },
    legend: {
      orient: "horizontal",
      bottom: "1px",
      data: props.data.map((item) => item.name),
      textStyle: {
        color: theme.palette.text.primary,
        fontSize: 12,
      },
    },
    itemStyle: {
      color: function (params) {
        return segmentColors[params.dataIndex];
      },
    },
    series: [
      {
        name: "Doughnut Chart",
        type: "pie",
        radius: ["50%", "70%"],
        center: ["50%", "50%"],
        data: props.data.map((item, index) => ({
          ...item,
          itemStyle: { color: segmentColors[index] },
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        label: {
          show: false,
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <Typography>
        <b>{props.label}</b>
      </Typography>
      <div className={classes.chartContainer}>
        <ReactECharts option={chartOptions} />
      </div>
    </div>
  );
};

export default DoughnutChart;
