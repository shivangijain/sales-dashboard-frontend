import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles((theme) => ({
  select: {
    height: "25px",
    width: "100%",
    backgroundColor: `${theme.palette.background.dashboardContent}`,
  },
  dropdownContainer: {
    height: "45px",
  },
}));

const Dropdown = (props) => {
  const classes = useStyles();

  const { label, list, defaultValue, setCurrentState } = props;
  return (
    <FormControl fullWidth className={classes.dropdownContainer}>
      {label && <Typography>{label}</Typography>}
      <Select
        className={classes.select}
        value={defaultValue}
        onChange={(e) => setCurrentState(e.target.value)}
      >
        {list.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
