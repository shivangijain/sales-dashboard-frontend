import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { makeStyles } from "@mui/styles";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  datePicker: {
    height: "25px",
    backgroundColor: `${theme.palette.background.dashboardContent} !important`,
    color: `${theme.palette.text.primary} !important`,
    width: "100%",
    border: "none !important",
  },
  calenderContainer: {
    height: "45px",
  },
}));

const Calender = (props) => {
  const classes = useStyles();

  const { label, value, setDate } = props;

  const handleDateChange = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    setDate(formattedDate);
  };

  return (
    <FormControl fullWidth className={classes.calenderContainer}>
      <Typography>{label}</Typography>
      <DatePicker
        value={value}
        selected={new Date(value)}
        onChange={(date) => handleDateChange(date)}
        dateFormat={"DD-MMMM-YYYY"}
        className={classes.datePicker}
      />
    </FormControl>
  );
};

export default Calender;
