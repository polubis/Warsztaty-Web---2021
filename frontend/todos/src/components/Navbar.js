import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Tabs,
  Tab,
  Avatar,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import ThemeIcon from "@material-ui/icons/Palette";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useState, useCallback } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,

      "& hr": {
        height: 28,
        margin: theme.spacing(0, 2.5),
        background: theme.palette.common.white,
      },
    },

    tab: {
      display: "flex",
      width: 130,
      minWidth: "unset",
      height: 64,
      fontSize: theme.typography.fontSize,
      textTransform: "none",

      "&:hover": {
        opacity: 1,
      },

      "& > span": {
        flexDirection: "row",

        "& svg": {
          marginRight: theme.spacing(1),
          transform: "translateY(2px)",
        },
      },
    },

    search: {
      marginLeft: 200,
      color: theme.palette.common.white,
    },

    theme: { marginLeft: "auto", color: theme.palette.common.white },

    notifications: {
      color: theme.palette.common.white,
      marginLeft: theme.spacing(1),
    },

    email: {
      margin: theme.spacing(0, 1.5, 0, 0.5),
    },

    avatar: {
      background: theme.palette.common.white,
      color: theme.palette.primary.main,
    },
  })
);

const links = ["/dashboard", "/todos"];

const Navbar = () => {
  const history = useHistory();

  const handleTabChange = useCallback(
    (e, idx) => {
      history.push(links[idx]);
    },
    [history]
  );

  const classes = useStyles();

  const activeTab = links.indexOf(history.location.pathname);

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography variant="h6">Todo APP</Typography>

        <IconButton className={classes.search}>
          <SearchIcon />
        </IconButton>

        <Divider orientation="vertical" />

        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab
            className={classes.tab}
            label="Dashboard"
            disableRipple
            icon={<DashboardIcon />}
          />
          <Tab
            className={classes.tab}
            label="Tasks"
            disableRipple
            icon={<ListIcon />}
          />
        </Tabs>

        <IconButton className={classes.theme}>
          <ThemeIcon />
        </IconButton>

        <IconButton className={classes.notifications}>
          <NotificationsIcon />
        </IconButton>

        <Divider orientation="vertical" />

        <Typography className={classes.email} variant="subtitle1">
          polubik1994@gmail.com
        </Typography>

        <Avatar className={classes.avatar}>OP</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
