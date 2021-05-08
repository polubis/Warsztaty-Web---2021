import {
  CircularProgress,
  Box,
  makeStyles,
  createStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    loader: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      background: "rgba(255,255,255,.25)",
    },
  })
);

const Loader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.loader}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
