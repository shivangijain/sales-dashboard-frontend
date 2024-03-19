import { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Dashboard from "./Dashboard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const LandingPage = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header setDrawerOpen={() => setDrawerOpen(!drawerOpen)} />
      <Sidebar open={drawerOpen} toggleDarkMode={props.toggleDarkMode} />
      <Dashboard />
    </div>
  );
};

export default LandingPage;
