import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Dropdown from "../common/Dropdown";
import Calender from "../common/Calender";

const Topbar = (props) => {
  const {
    states,
    fromDate,
    toDate,
    state,
    setFromDate,
    setToDate,
    setCurrentState,
  } = props;
  return (
    <Grid item xs={12}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            Sales Overview
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Dropdown
            label={"Select a state"}
            list={states}
            defaultValue={state || states[0]}
            setCurrentState={setCurrentState}
          />
        </Grid>
        <Grid item xs={2}>
          <Calender
            label={"Select from date"}
            value={fromDate}
            setDate={(date) => setFromDate(date)}
          />
        </Grid>
        <Grid item xs={2}>
          <Calender
            label={"Select to date"}
            value={toDate}
            setDate={(date) => setToDate(date)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Topbar;
