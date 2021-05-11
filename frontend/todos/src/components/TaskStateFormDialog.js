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
import { required, min, max, run, translate, first } from "../utils/validators";

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

const t = translate({
  required: "Field is required",
  min: "Field must have atleast 3 characters",
  max: "Field must have less than 10 characters",
});

const runNameValidation = run(required, min(3), max(10));
const runDescriptionValidation = run(min(3), max(10));

const validators = {
  name: (name) => first(t(runNameValidation(name))),
  description: (description) =>
    description ? first(t(runDescriptionValidation(description))) : "",
};

const TaskStateFormDialog = ({ initFormData, onClose, onSuccess }) => {
  const classes = useStyles();

  const [pending, setPending] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const [formData, setFormData] = useState(
    initFormData
      ? { ...initFormData, color: "#000000", background: "#ffffff" }
      : {
          name: "",
          description: "",
          color: "#000000",
          background: "#ffffff",
        }
  );
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
      onSuccess({
        id: 1001,
        creationDate: "2021-02-01T00:00:00",
        modificationDate: "2021-02-01T00:00:00",
        name: formData.name,
        fontColor: formData.color,
        backgroundColor: formData.backgroundColor,
        description: formData.description,
      });
    });
  }, [formData]);

  const isEditionMode = !!initFormData;

  return (
    <Dialog open onClose={pending ? undefined : onClose}>
      {pending && <Loader />}
      <DialogTitle>
        {isEditionMode
          ? `Edit ${initFormData.name} task state`
          : "Create new task state"}
      </DialogTitle>
      <DialogContent className={classes.content}>
        <DialogContentText>
          {isEditionMode
            ? "Populate required fields and edit your task state."
            : "Populate required fields and create your task state."}
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

export default TaskStateFormDialog;
