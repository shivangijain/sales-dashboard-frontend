import { makeStyles, useTheme } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: `${
      theme.palette.mode === "dark" ? "#262D47" : "#0C6470"
    } !important`,
    zIndex: `${theme.zIndex.drawer + 1} !important`,
  },
  grow: {
    flexGrow: 1,
  },
  profile: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
}));

const Header = (props) => {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    props.setDrawerOpen();
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Sales Dashboard
        </Typography>
        <div className={classes.grow} />
        <div className={classes.profile}>
          <Typography variant="h6" noWrap>
            Hello User
          </Typography>
          <Avatar
            alt="User Profile"
            src="/profile.jpg"
            className={classes.avatar}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
