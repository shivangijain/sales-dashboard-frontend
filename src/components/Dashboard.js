import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import Topbar from "./Topbar";
import StatsCard from "./StatsCard";
import salesIcon from "../assets/images/Sales-Icon.png";
import discoutIcon from "../assets/images/Discount-Icon.png";
import quantityIcon from "../assets/images/Quantity-Icon.png";
import profitIcon from "../assets/images/Profit-Icon.png";
import SalesChart from "./SalesChart";
import { useEffect, useState } from "react";
import { getDashboardData, getStateList } from "../actions";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginLeft: 240,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [stateList, setStateList] = useState(null);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [currentState, setCurrentState] = useState();
  const [dashboardData, setDashboardData] = useState(null);
  const [sales, setSales] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [profit, setProfit] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentState, fromDate, toDate]);

  const fetchStates = async () => {
    const data = await getStateList();
    const firstState = Object.keys(data)[0];
    setStateList(Object.keys(data));
    setCurrentState(firstState);
    setFromDate(data[firstState].minDate);
    setToDate(data[firstState].maxDate);
  };

  const fetchData = async () => {
    const data = await getDashboardData(currentState, fromDate, toDate);
    setDashboardData(data);
    setSales(data.totalSales);
    setDiscount(data.discount);
    setProfit(data.profit);
    setQuantity(data.quantity);
  };

  const getStatData = (sales, discount, profit, quantity) => {
    const stats = [
      {
        title: "Total Sales",
        image: salesIcon,
        frontSign: "$",
        quantity: sales,
      },
      { title: "Quantity Sold", image: quantityIcon, quantity },
      {
        title: "Discount%",
        image: discoutIcon,
        backSign: "%",
        quantity: discount,
      },
      { title: "Profit", image: profitIcon, frontSign: "$", quantity: profit },
    ];
    return stats;
  };

  if (!stateList) return <h1>Loading...</h1>;
  return (
    <main className={classes.content}>
      <Toolbar />
      <Grid container spacing={3}>
        <Topbar
          states={stateList}
          state={currentState}
          fromDate={fromDate}
          toDate={toDate}
          setFromDate={(date) => setFromDate(date)}
          setToDate={(date) => setToDate(date)}
          setCurrentState={(state) => setCurrentState(state)}
        />
        <StatsCard stats={getStatData(sales, discount, profit, quantity)} />
        {dashboardData && dashboardData.items.length > 0 && (
          <SalesChart dashboardData={dashboardData} />
        )}
      </Grid>
    </main>
  );
};

export default Dashboard;
