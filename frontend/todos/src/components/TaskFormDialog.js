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
} from "@material-ui/core";
import { useState, useCallback } from "react";

const validateName = (name) => {
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
};

const validateDescription = (description) => {
  if (description) {
    if (description.length < 3) {
      return "Min characters 3";
    }

    if (description.length > 10) {
      return "Max characters 10";
    }
  }

  return "";
};

const TaskFormDialog = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const handleNameChange = useCallback((e) => {
    const { value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      name: validateName(value),
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: value,
    }));
  }, []);

  const handeDescriptionChange = useCallback((e) => {
    const { value } = e.target;

    setErrors((prevErrors) => ({
      ...prevErrors,
      description: validateDescription(value),
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      description: value,
    }));
  }, []);

  const formDataInvalid = Object.values(errors).some((error) => !!error);

  return (
    <Dialog open>
      <DialogTitle>My Title</DialogTitle>
      <DialogContent>
        <DialogContentText>Decription</DialogContentText>

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
            onChange={handleNameChange}
          />
          {errors.name && (
            <FormHelperText id="name-text">{errors.name}</FormHelperText>
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
              onChange={handeDescriptionChange}
            />
            {errors.description ? (
              <FormHelperText id="description-text">
                {errors.description}
              </FormHelperText>
            ) : (
              <FormHelperText id="description-text">
                Will be needed later for better understanding purposes.
              </FormHelperText>
            )}
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancel</Button>
        <Button color="primary" disabled={formDataInvalid}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskFormDialog;
