import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/styles";
import notification from "../assets/images/notifications.png";
import salesOverview from "../assets/images/sales-overview.png";
import settings from "../assets/images/settings.png";
import stores from "../assets/images/stores.png";
import lightTheme from "../assets/images/light-theme.png";
import darkTheme from "../assets/images/dark-theme.jpg";

const useStyles = makeStyles((theme) => ({
  drawer: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: `${
      theme.palette.mode === "dark" ? "#262D47" : "#4A4A4A"
    } !important`,
    color: "#FFFFFF !important",
    paddingTop: "20px",
    width: 240,
    flexShrink: 0,
    width: "260px",
    transition: "width 0.3s ease",
  },
  list: {
    marginTop: "35px !important",
  },
  listIcon: {
    width: "18.41px",
    height: "18px",
  },
}));

const Sidebar = (props) => {
  const { open } = props;
  const classes = useStyles();
  const theme = useTheme();
  const handleClickEvent = (list) => {
    if (list.onClick) {
      list.onClick();
    }
  };

  const drawerList = [
    {
      title: "Sales Overview",
      icon: salesOverview,
    },
    {
      title: "Stores",
      icon: stores,
    },
    {
      title: "Notifications",
      icon: notification,
    },
    {
      title: "Setings",
      icon: settings,
    },
    {
      title: `${theme.palette.mode === "dark" ? "Light Theme" : "Dark Theme"}`,
      onClick: () => props.toggleDarkMode(),
      icon: lightTheme,
    },
  ];
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      classes={{ paper: classes.drawer }}
      PaperProps={{ sx: { backgroundImage: "none" } }}
      ModalProps={{
        hideBackdrop: true,
        disableScrollLock: true,
      }}
    >
      <List className={classes.list}>
        {drawerList.map((list) => {
          return (
            <ListItem
              button
              key={list.title}
              onClick={() => handleClickEvent(list)}
            >
              <ListItemIcon>
                <img
                  src={list.icon}
                  alt={list.title}
                  className={classes.listIcon}
                />
              </ListItemIcon>
              <ListItemText primary={list.title} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
