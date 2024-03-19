import Grid from "@mui/material/Grid";
import Card from "../common/Card";
import StackedHorizontalBarChart from "../common/StackedHorizontalBarChart";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import FixedStackedHorizontalBarChart from "../common/FixedStackedHorizontalBarChart";
import PieChart from "../common/PieChart";
import {
  categorySalesChartData,
  citySalesChartData,
  productSalesChartData,
  segmentSalesChartData,
  subCategorySalesChartData,
} from "../utils";

const useStyles = makeStyles((theme) => ({
  chartBox: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: `${theme.palette.background.dashboardContent} !important`,
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
  },
  image: {
    marginRight: theme.spacing(2),
    width: 40,
    height: 40,
  },
}));

const SalesChart = (props) => {
  const { dashboardData } = props;
  const { items, totalSales } = dashboardData;
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <Paper className={classes.chartBox}>
              <StackedHorizontalBarChart
                label={"Sales By City"}
                data={citySalesChartData(items, totalSales)}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Paper className={classes.chartBox}>
              <FixedStackedHorizontalBarChart
                data={productSalesChartData(items)}
                label={"Sales By Product"}
                graphicLabel1={"Product Name"}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <Paper className={classes.chartBox}>
              <PieChart
                label={"Sales By Category"}
                data={categorySalesChartData(items)}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Paper className={classes.chartBox}>
              <FixedStackedHorizontalBarChart
                data={subCategorySalesChartData(items)}
                label={"Sales By Sub Category"}
                graphicLabel1={"Sub Category"}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Paper className={classes.chartBox}>
              <PieChart
                label={"Sales By Segment"}
                data={segmentSalesChartData(items)}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SalesChart;
