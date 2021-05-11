import { Chip, makeStyles, createStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    loaders: {
      display: "flex",
      marginBottom: theme.spacing(4),
    },

    loader: {
      background: theme.palette.grey[300],
      width: 80,

      "&:not(:last-of-type)": {
        marginRight: 6,
      },
    },
  })
);

const TasksStatesLoader = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.loaders}>
      {Array.from({ length: 5 }, (_, idx) => (
        <Chip key={idx} className={classes.loader} />
      ))}
    </Box>
  );
};

export default TasksStatesLoader;
