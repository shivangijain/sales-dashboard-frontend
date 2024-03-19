import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: `${theme.palette.background.dashboardContent} !important`,
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    height: "138px",
  },
  image: {
    marginRight: theme.spacing(2),
    width: 40,
    height: 40,
  },
  title: {
    fontSize: "20px !important",
    fontWeight: "500 !important",
  },
  quantity: {
    fontSize: "32px !important",
    fontWeight: "700 !important",
  },
}));
const Card = (props) => {
  const classes = useStyles();
  const { quantity, title, image, frontSign, backSign } = props;
  return (
    <Paper className={classes.box}>
      <img src={image} alt="Image 1" className={classes.image} />
      <div>
        <Typography variant="subtitle1" className={classes.title}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          className={classes.quantity}
        >{`${frontSign}${quantity}${backSign}`}</Typography>
      </div>
    </Paper>
  );
};

Card.defaultProps = {
  frontSign: "",
  backSign: "",
  quantity: 0,
};

export default Card;
