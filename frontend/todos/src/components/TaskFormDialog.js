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
import { useState, useCallback, useMemo } from "react";

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

const TaskFormDialog = () => {
  const [formTouched, setFormTouched] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const handleChange = useCallback((e) => {
    const { name: key, value } = e.target;

    setFormTouched(true);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [key]: validators[key](value),
    }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  }, []);

  const formDataInvalid = useMemo(() => {
    return formTouched ? Object.values(errors).some((error) => !!error) : false;
  }, [formTouched, errors]);

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
            onChange={handleChange}
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
              onChange={handleChange}
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
        <Button color="primary" disabled={!formTouched || formDataInvalid}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskFormDialog;
