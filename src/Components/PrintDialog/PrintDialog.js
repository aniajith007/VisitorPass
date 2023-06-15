import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Card, CardContent, Container, Grid, Typography, useScrollTrigger } from "@mui/material";
import MediaCard from "../MediaCard";
import Webcam from "react-webcam";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PrintDialog({ handleClose, printTag, visitordata }) {
  const open = printTag;
  console.log("clicked visitor data in formdialog..", visitordata);
  const McardCapture = (pic)=>{
    console.log("captured pic in printdia",pic)
  }
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}        
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Take Picture"}</DialogTitle>
        <DialogContent>
          <Grid container rowSpacing={2} padding={4} xs={12} flexGrow={1}>
            <Grid xs={8} item>            
                <Typography>Name : {visitordata.name}</Typography>
                <Typography>Visiting Dept:{visitordata.visiting_dept}</Typography>
                <Typography>{visitordata.contact_person}</Typography>
                <Typography>{visitordata.date}</Typography>
                <Typography>{visitordata.history.phonenumber}</Typography>
                <Typography>{visitordata.history.company}</Typography>
                <Typography>{visitordata.history.addons}</Typography>
                <Typography>{visitordata.history.purpose}</Typography>
                <Typography>{visitordata.history.address_of_visitor}</Typography>                              
            </Grid>
            <Grid xs={4}>
              <MediaCard Name={"Live"} McardCapture={McardCapture}/>              
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={()=>window.print()}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
