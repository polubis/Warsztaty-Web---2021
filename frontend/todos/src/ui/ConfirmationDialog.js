import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

const ConfirmationDialog = (props) => {
  return (
    <Dialog open>
      <DialogTitle>
        Are you sure you want to remove task task status ?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>This operation cannot be undone.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Cancel</Button>
        <Button autoFocus color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
