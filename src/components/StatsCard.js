import Grid from "@mui/material/Grid";
import Card from "../common/Card";

const StatsCard = (props) => {
  const { stats } = props;
  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        {stats.map((stat) => {
          return (
            <Grid item xs={6} sm={3}>
              <Card {...stat} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default StatsCard;
