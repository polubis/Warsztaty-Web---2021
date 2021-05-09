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

const TaskFormDialog = () => {
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
            autoFocus
          />
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
            />
            <FormHelperText id="description-text">
              Will be needed later for better understanding purposes.
            </FormHelperText>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancel</Button>
        <Button color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskFormDialog;
