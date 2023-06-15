import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import MediaCard from "../MediaCard";
import axios from "axios";
import PrintComp from "../PrintComponent/PrintComp";
import { useReactToPrint } from "react-to-print";
import PrintIcon from '@mui/icons-material/Print';
import PublishIcon from '@mui/icons-material/Publish';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function PD({ handleClose, printTag, visitordata }) {
  const [picturebasedata,setPicturebasedata] = React.useState();
  const componentRef = React.useRef(null);
  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    // onBeforeGetContent: handleOnBeforeGetContent,
    // onBeforePrint: handleBeforePrint,
    // onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
  });

  const open = printTag;
  console.log("clicked visitor data in formdialog..", visitordata);
  const McardCapture = (picfile,picbase64) => {
    console.log("captured pic in printdia", picfile);
    setPicturebasedata(picbase64);
    const formData = new FormData();
    formData.append("image", picfile);
    axios
      .post("http://192.168.149.129:3002/multifieldfile/", formData)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <img
            src="logo192.png"
            height={20}
            width={20}
            style={{ marginTop: 4 }}
          />{" "}
          <span> Visiting Pass</span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container rowSpacing={2} padding={4} xs={12} flexGrow={1}>
            <Grid xs={8} item>
              <Grid xs={6}>
                <Typography color={"primary"} fontWeight={"bold"}>
                  Name :{visitordata.name}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography color={"primary"} fontWeight={"bold"}>
                  Visiting Dept:{visitordata.visiting_dept}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography color={"primary"} fontWeight={"bold"}>
                  Contact Person:{visitordata.contact_person}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography color={"primary"} fontWeight={"bold"}>
                  Date of Visit:{visitordata.date}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography color={"primary"} fontWeight={"bold"}>
                  Phonenumber:{visitordata.history.phonenumber}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography color={"primary"} fontWeight={"bold"}>
                  Company:{visitordata.history.company}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography color={"primary"} fontWeight={"bold"}>
                  AddOns:{visitordata.history.addons}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography color={"primary"} fontWeight={"bold"}>
                  Purpose:{visitordata.history.purpose}
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography color={"primary"} fontWeight={"bold"}>
                  {visitordata.history.address_of_visitor}
                </Typography>
              </Grid>
            </Grid>
            <Grid xs={4}>
              <MediaCard Name={"Live"} McardCapture={McardCapture} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>          
          <IconButton color="primary" size="small"><PublishIcon size="small"/> Submit</IconButton>
          <IconButton color="primary" size="small" autoFocus onClick={()=>handlePrint()} ><PrintIcon size="small"/>Print</IconButton>                              
        </DialogActions>
      </BootstrapDialog>
      <PrintComp componentRef={componentRef} datas={visitordata} picture={picturebasedata?picturebasedata:""}/>
    </div>
  );
}
