import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  Tabs,
  Tab,
  Avatar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";
import ThemeIcon from "@material-ui/icons/Palette";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Todo APP</Typography>

        <IconButton>
          <SearchIcon />
        </IconButton>

        <Divider orientation="vertical" />

        <Tabs value={0}>
          <Tab label="Dashboard" disableRipple icon={<DashboardIcon />} />
          <Tab label="Tasks" disableRipple icon={<ListIcon />} />
        </Tabs>

        <IconButton>
          <ThemeIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Divider orientation="vertical" />

        <Typography variant="subtitle1">polubik1994@gmail.com</Typography>

        <Avatar>OP</Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
