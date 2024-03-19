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
  axisLabel: {
    color: `${theme.palette.text.primary} !important`,
  },
}));

const StackedHorizontalBarChart = (props) => {
  const { data, label } = props;
  const theme = useTheme();
  const classes = useStyles();
  const stackColors = ["#8BD0E0", "#D6EFF3"];

  const chartOptions = {
    color: stackColors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "1%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: theme.palette.text.primary,
      },
    },
    yAxis: {
      type: "category",
      data: data.map((item) => item.label),
      axisLabel: {
        color: theme.palette.text.primary,
      },
      axisTick: { show: false },
      axisLine: { show: false },
    },

    series: data[0].stacks.map((stack, index) => ({
      name: stack.name,
      type: "bar",
      stack: "total",
      label: {
        show: false,
        position: "insideRight",
      },
      data: data.map((item) => item.stacks[index].value),
    })),
  };

  return (
    <div className={classes.container}>
      <Typography>
        <b>{label}</b>
      </Typography>
      <div className={classes.chartContainer}>
        <ReactECharts option={chartOptions} />
      </div>
    </div>
  );
};

export default StackedHorizontalBarChart;
