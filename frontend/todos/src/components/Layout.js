import { makeStyles, createStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    layout: {
      flexGrow: 1,
      padding: "52px",
    },
  })
);

const Layout = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.layout}>
      {props.children}
    </Container>
  );
};

export default Layout;
