import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function InfoModal(props) {
  const [open, setOpen] = React.useState(false);

  const currentPage = props.page

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (currentPage === "addGarden") {
        return (
            <Dialog onClose={props.handleModalClose} aria-labelledby="customized-dialog-title" open={props.modalOpen}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleModalClose}>
                    Let's add a garden!
                </DialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                    What are the total dimensions of your garden?   

                </Typography>
                <Typography gutterBottom>
                    Keep in mind that anywhere can be a garden. It can be your yard, 
                    patio, balcony, or living room. We’ll add garden beds and planters in the next step.

                </Typography>
                <Typography gutterBottom>
                    Also add your zipcode so 
                    we can find the right plants for where you live.
                    
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={props.handleModalClose} color="primary">
                    Got It!
                </Button>
                </DialogActions>
            </Dialog>
        );
    } else if (currentPage === "enterBeds") {
        return (
            <Dialog onClose={props.handleModalClose} aria-labelledby="customized-dialog-title" open={props.modalOpen}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleModalClose}>
                    Great! Now let’s add some garden beds and planters.

                </DialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                    Not all gardens are made the same. Some have one big garden bed, others have multiple, some are all planters, and everything inbetween.
                </Typography>
                <Typography gutterBottom>
                    Enter the dimensions and select shape and style. Click “Next” when done adding beds and planters. You only need to enter each unique size once.
                </Typography>
                <Typography gutterBottom>
                    It's helpful to use the round planters to represent pots or anything that's round. The square beds can represent garden plots, beds, planters, or anything else square.
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={props.handleModalClose} color="primary">
                    Got It!
                </Button>
                </DialogActions>
            </Dialog>
        );
    } else if (currentPage === "arrangeBeds") {
        return (
            <Dialog onClose={props.handleModalClose} aria-labelledby="customized-dialog-title" open={props.modalOpen}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleModalClose}>
                    Awesome! Time to arrange those beds and planters in your garden.
                </DialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                    Click and drag a bed or planter from the list on the left into the empty garden.

                </Typography>
                <Typography gutterBottom>
                    Arrange them in any way you want as long as they stay inside the garden border.
                </Typography>
                <Typography gutterBottom>
                    When you have it looking exactly how you want your garden to look, click finish at the bottom to save your new garden.
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={props.handleModalClose} color="primary">
                    Got It!
                </Button>
                </DialogActions>
            </Dialog>
        );
    } else if (currentPage === "userInfo") {
        return (
            <Dialog onClose={props.handleModalClose} aria-labelledby="customized-dialog-title" open={props.modalOpen}>
                <DialogTitle id="customized-dialog-title" onClose={props.handleModalClose}>
                    Add your info to get started!
                </DialogTitle>
                <DialogContent dividers>
                <Typography gutterBottom>
                    Please fill out the form below.

                </Typography>
                <Typography gutterBottom>
                    Your username can be anything you want.
                </Typography>
                <Typography gutterBottom>
                    Make sure to hit the submit button before moving onto the next step.
                </Typography>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={props.handleModalClose} color="primary">
                    Got It!
                </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
