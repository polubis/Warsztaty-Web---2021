import { Chip, makeStyles, createStyles, Box } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      marginBottom: theme.spacing(4),
      display: "flex",
      flexFlow: "wrap",
    },

    listItem: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
    },
  })
);

const TaskStatesList = ({ states, onTaskStateEditClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.list}>
      {states.map((state) => (
        <Chip
          key={state.id}
          className={classes.listItem}
          label={state.name}
          style={{
            color: state.fontColor,
            background: state.backgroundColor,
          }}
          onClick={() => onTaskStateEditClick(state)}
          onDelete={() => {}}
          deleteIcon={<EditIcon style={{ color: state.fontColor }} />}
        />
      ))}
    </Box>
  );
};

export default TaskStatesList;
