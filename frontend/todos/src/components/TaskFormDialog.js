import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  TextField,
  Box,
  DialogActions,
  Button,
  DialogContentText,
  FormHelperText,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import { useState, useCallback, useMemo } from "react";
import Loader from "../ui/Loader";
import { mockApiCall } from "../utils/mockApiCall";
import ColorPicker from "../ui/ColorPicker";

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      width: 380,
    },

    error: {
      color: theme.palette.error.main,
    },
  })
);

const validators = {
  name: (name) => {
    if (name === "") {
      return "Field name is required";
    }

    if (name.length < 3) {
      return "Min characters  3";
    }

    if (name.length > 10) {
      return "Max characters 10";
    }

    return "";
  },
  description: (description) => {
    if (description) {
      if (description.length < 3) {
        return "Min characters 3";
      }

      if (description.length > 10) {
        return "Max characters 10";
      }
    }

    return "";
  },
};

const TaskFormDialog = ({ onClose }) => {
  const classes = useStyles();

  const [pending, setPending] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    color: "#000000",
    background: "#ffffff",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const handleChange = useCallback((e) => {
    const { name: key, value } = e.target;

    setFormTouched(true);

    if (validators[key]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: validators[key](value),
      }));
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  }, []);

  const formDataInvalid = useMemo(
    () => formTouched && Object.values(errors).some((error) => !!error),
    [formTouched, errors]
  );

  const handleSubmit = useCallback(() => {
    setPending(true);

    mockApiCall(formData).then(() => {
      setPending(false);
    });
  }, [formData]);

  return (
    <Dialog open onClose={pending ? undefined : onClose}>
      {pending && <Loader />}
      <DialogTitle>Create new task</DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText>
          Populate required fields and create your task.
        </DialogContentText>

        <FormControl fullWidth margin="dense">
          <TextField
            id="name"
            label="Name"
            name="name"
            variant="outlined"
            autoComplete="off"
            aria-describedby="name-text"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <FormHelperText id="name-text" className={classes.error}>
              {errors.name}
            </FormHelperText>
          )}
        </FormControl>

        <Box paddingTop={1}>
          <FormControl fullWidth margin="dense">
            <TextField
              id="description"
              label="Description"
              name="description"
              variant="outlined"
              aria-describedby="description-text"
              rowsMax="4"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description ? (
              <FormHelperText id="description-text" className={classes.error}>
                {errors.description}
              </FormHelperText>
            ) : (
              <FormHelperText id="description-text">
                Will be needed later for better understanding purposes.
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        <Box paddingTop={1}>
          <ColorPicker
            value={formData.color}
            label="Font"
            name="color"
            helperText="This color will be used to style task font color."
            onChange={handleChange}
          />
        </Box>

        <Box paddingTop={1}>
          <ColorPicker
            value={formData.background}
            label="Background"
            name="background"
            helperText="This color will be used to style task background."
            onChange={handleChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary" disabled={pending} onClick={onClose}>
          Cancel
        </Button>
        <Button
          color="primary"
          disabled={!formTouched || formDataInvalid || pending}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskFormDialog;
