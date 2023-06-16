import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function SnackBarBottom({message,handleClose}) { 
  return (    
      <Snackbar
        anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
        open={true}
        onClose={handleClose}
        message={message}
        key={"bottom" + "center"}
      />    
  );
}
