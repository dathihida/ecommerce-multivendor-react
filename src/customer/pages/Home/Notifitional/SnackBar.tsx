// src/components/GlobalSnackbar.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Adjusted the path to match the correct location
import { Snackbar, Alert, SnackbarCloseReason } from '@mui/material';
import store, { useAppDispatch, useAppSelector } from '../../../../State/Store';
import { closeSnackbar } from '../../../../State/SnackBarSlice';

const GlobalSnackbar = () => {
    const dispatch = useAppDispatch();
    const {snackbar} = useAppSelector(store=>store);
    const { open, message, severity } = snackbar;
    const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(closeSnackbar());
    }
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{ marginTop: '60px' }} // Adjust the margin to avoid overlap with the navbar
    >
      <Alert onClose={handleClose} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default GlobalSnackbar;
