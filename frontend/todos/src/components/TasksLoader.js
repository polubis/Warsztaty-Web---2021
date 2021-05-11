import { Box, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    loaders: {
      "& div": {
        background: theme.palette.grey[300],
        width: "300px",
        height: "40px",
        borderRadius: "4px",
      },

      "& div:not(:last-of-type)": {
        marginBottom: theme.spacing(2),
      },

      "& div:nth-child(2)": {
        height: "250px",
      },
    },
  })
);

const TasksLoader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.loaders}>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Box>
  );
};

export default TasksLoader;
