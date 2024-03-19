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
  label: {
    marginBottom: "10px !important",
  },
}));

const FixedStackedHorizontalBarChart = (props) => {
  const { data, label, graphicLabel1, graphicLabel2 } = props;
  const theme = useTheme();
  const classes = useStyles();
  const stackColors = ["#D6EFF3", "#8BD0E0"];

  const chartOptions = {
    color: stackColors,
    grid: {
      left: "3%",
      right: "4%",
      bottom: "4%",
      top: "4%",
      containLabel: false,
      yAxis: null,
    },
    xAxis: {
      type: "value",
      show: false,
    },
    yAxis: {
      type: "category",
      show: false,
    },
    series: [
      {
        name: "Name",
        type: "bar",
        stack: "stack",
        label: {
          show: true,
          position: "insideLeft",
          formatter: function (params) {
            return params.data.label;
          },
        },

        data: data.map((item) => {
          return {
            value: item.stacks[0].value,
            label: item.stacks[0].name,
          };
        }),
      },
      {
        name: "Sales",
        type: "bar",
        stack: "stack",
        label: {
          show: true,
          position: "insideRight",
          formatter: function (params) {
            return `$${params.data.label}`;
          },
        },
        data: data.map((item) => {
          return {
            value: item.stacks[1].value,
            label: item.stacks[1].name,
          };
        }),
      },
    ],
    graphic: [
      {
        type: "text",
        left: 15,
        bottom: 305,
        style: {
          fill: theme.palette.text.primary,
          text: graphicLabel1,
          font: "14px Arial",
        },
      },
      {
        type: "text",
        right: 30,
        bottom: 305,
        style: {
          fill: theme.palette.text.primary,
          text: graphicLabel2,
          font: "14px Arial",
        },
      },
    ],
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.label}>
        <b>{label}</b>
      </Typography>
      <div className={classes.chartContainer}>
        <ReactECharts option={chartOptions} style={{ height: "320px" }} />
      </div>
    </div>
  );
};

FixedStackedHorizontalBarChart.defaultProps = {
  graphicLabel2: "Sales in $",
  graphicLabel1: "",
};

export default FixedStackedHorizontalBarChart;
