import {
  makeStyles,
  createStyles,
  List,
  ListItem,
  Box,
  Typography,
  Chip,
  IconButton,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      boxShadow: "0 3px 6px rgba(0,0,0,.14)",
      padding: 0,
      width: 300,
    },

    listItem: {
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-start",
      padding: theme.spacing(1.5, 1, 0, 2.5),
      borderBottom: `1px solid ${theme.palette.grey[400]}`,
    },

    header: {
      display: "flex",
      width: "100%",
      marginBottom: theme.spacing(1),
    },

    toolbox: {
      marginLeft: "auto",
    },

    status: {
      width: 0,
      marginTop: 6
    },
  })
);

const TasksList = () => {
  const classes = useStyles();

  return (
    <List dense className={classes.list}>
      <ListItem className={classes.listItem}>
        <Box className={classes.header}>
          <Box>
            <Typography variant="caption">19/12/1994</Typography>
            <Typography variant="subtitle2">Wyniesc smieci</Typography>

            <Box className={classes.status}>
              <Chip
                clickable
                size="small"
                label="To do"
                className={classes.taskStatus}
              />
            </Box>
          </Box>

          <Box className={classes.toolbox}>
            <IconButton aria-label="delete">
              <MoreIcon fontSize="inherit" />
            </IconButton>
          </Box>
        </Box>
      </ListItem>
    </List>
  );
};

export default TasksList;
