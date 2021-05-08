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
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.description}</DialogContentText>
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
