import {
  makeStyles,
  createStyles,
  List,
  ListItem,
  Box,
  Typography,
  Chip,
  IconButton,
  Collapse,
  Menu,
  MenuItem,
  Fade,
} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState, useCallback } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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

    state: {
      width: 0,
      marginTop: 6,
    },

    content: {
      maxWidth: "60%",
    },

    rotated: {
      transform: "rotate(180deg)",
    },

    menuItem: {
      "& svg": {
        marginRight: theme.spacing(1.5),
        width: "22px",
        height: "22px",
      },
    },
  })
);

const TasksList = ({
  tasks,
  onTaskRemoveClick,
  onTaskStateClick,
  onTaskEditClick,
}) => {
  const [expandedItems, setExpandedItems] = useState({});
  const [anchor, setAnchor] = useState(null);
  const [activeTask, setActiveTask] = useState(null);

  const toggleExpandedItems = useCallback((id) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [id]: !!prevExpandedItems[id] ? false : true,
    }));
  }, []);

  const openMenu = useCallback((e, task) => {
    setAnchor(e.currentTarget);
    setActiveTask(task);
  }, []);

  const closeMenu = useCallback((e) => {
    setAnchor(null);
    setActiveTask(null);
  }, []);

  const handleTaskRemoveClick = useCallback(() => {
    closeMenu();
    onTaskRemoveClick(activeTask.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTask, onTaskRemoveClick]);

  const handleTaskEditClick = useCallback(() => {
    closeMenu();
    onTaskEditClick(activeTask);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTask, onTaskEditClick]);

  const classes = useStyles();

  return (
    <>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={!!anchor}
        onClose={closeMenu}
        TransitionComponent={Fade}
      >
        <MenuItem className={classes.menuItem} onClick={handleTaskEditClick}>
          <EditIcon />
          <Typography variant="button">Edit</Typography>
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleTaskRemoveClick}>
          <DeleteIcon />
          <Typography variant="button">Remove</Typography>
        </MenuItem>
      </Menu>

      <List dense className={classes.list}>
        {tasks.map((task) => (
          <ListItem key={task.id} className={classes.listItem}>
            <Box className={classes.header}>
              <Box className={classes.content}>
                <Typography variant="caption">{task.creationDate}</Typography>
                <Typography variant="subtitle2">{task.name}</Typography>

                <Box className={classes.state}>
                  <Chip
                    clickable
                    size="small"
                    label={task.taskState.name}
                    onClick={() => onTaskStateClick(task)}
                    style={{
                      color: task.taskState.fontColor,
                      background: task.taskState.backgroundColor,
                    }}
                  />
                </Box>
              </Box>

              <Box className={classes.toolbox}>
                {task.description && (
                  <IconButton
                    aria-label="show more"
                    onClick={() => toggleExpandedItems(task.id)}
                  >
                    <ExpandMoreIcon
                      className={
                        !!expandedItems[task.id] ? classes.rotated : undefined
                      }
                    />
                  </IconButton>
                )}

                <IconButton
                  aria-label="open menu"
                  onClick={(e) => openMenu(e, task)}
                >
                  <MoreIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>

            <Collapse
              in={!!expandedItems[task.id]}
              timeout="auto"
              unmountOnExit
            >
              <Typography paragraph>{task.description}</Typography>
            </Collapse>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TasksList;
