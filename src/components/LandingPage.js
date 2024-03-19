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

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <Header setDrawerOpen={handleDrawer} />
      <Sidebar open={drawerOpen} toggleDarkMode={props.toggleDarkMode} />
      <Dashboard isDrawerOpen={drawerOpen} />
    </div>
  );
};

export default LandingPage;
