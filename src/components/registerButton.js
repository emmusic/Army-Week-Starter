import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Layout from "../components/layout"
import React from 'react';
import IconButton from '@mui/material/IconButton';
import { deepPurple, green } from '@mui/material/colors';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Stack from '@mui/material/Stack';

function RegisterButton() {
    const [errorOpen, setErrorOpen] = React.useState(false);
    const [successOpen, setSuccessOpen] = React.useState(false);
    const [eventFullOpen, setEventFullOpen] = React.useState(false);
    const [datePastOpen, setDatePastOpen] = React.useState(false);

    const Register = event => {
  //need to add logic to register user to specified event
  
    // if success
    setSuccessOpen(true);
    // if event is full
    // setEventFullOpen(true);
    //if event has already happened
    // setDatePastOpen(true);
    //if other error
    // setErrorOpen(true);
    };

    const handleClose = () => {
        setSuccessOpen(false);
        setEventFullOpen(false);
        setDatePastOpen(false);
        setErrorOpen(false);
    };
    return(
        <Stack spacing={4} direction="row"
        alignItems="center"
        justifyContent="center"
        >
        <Button variant="contained"
        onClick={Register}
        sx={{ bgcolor: green[500] }}
        endIcon={< AddTaskIcon />}>
        Register
      </Button>
{/* Success message */}
        <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            You are now registered!
        </Alert>
        </Snackbar>
{/* Event full */}
      <Snackbar open={eventFullOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            The event is full!
        </Alert>
      </Snackbar>
{/* Event already happened */}
      <Snackbar open={datePastOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            This event is in the past!
        </Alert>
      </Snackbar>
{/* Error Alert */}
        <Box sx={{ width: '100%' }}>
          <Collapse in={errorOpen}>
            <Alert severity = "error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setErrorOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
              }
              sx={{ mb: 2 }}
            >
            There was an error in processing your registration.
            </Alert>
          </Collapse>
        </Box>
        </Stack>
    )
}

export default RegisterButton