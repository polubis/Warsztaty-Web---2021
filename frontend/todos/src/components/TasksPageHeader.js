import {
  Box,
  Button,
  Toolbar,
  Tooltip,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      display: "flex",
      padding: 0,
      marginBottom: theme.spacing(1),

      [theme.breakpoints.down(600)]: {
        alignItems: "flex-start",
        flexFlow: "column",
      },
    },

    toolbox: {
      margin: `0 0 0 auto`,

      [theme.breakpoints.down(600)]: {
        margin: "20px 0 15px 0",
      },
    },

    button: {
      "&:first-of-type": {
        marginRight: theme.spacing(1),
      },
    },
  })
);

const TasksPageHeader = (props) => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <Typography variant="h6">Tasks management</Typography>

      <Box className={classes.toolbox}>
        <Tooltip title="Create status with predefined color theme">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
          >
            Add task status
          </Button>
        </Tooltip>

        <Tooltip title="Create new task from scratch">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<AddIcon />}
          >
            Add task
          </Button>
        </Tooltip>
      </Box>
    </Toolbar>
  );
};

export default TasksPageHeader;
