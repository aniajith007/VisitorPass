import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@mui/material";
import React from "react";
import { useReactToPrint } from "react-to-print";
import "./print.css";
function PrintComp({ componentRef,datas,picture }) {  
  console.log("print data's",datas)
  // function BootstrapDialogTitle(props) {
  //   const { children, onClose, ...other } = props;
  //   return (
  //     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
  //       {children}
  //     </DialogTitle>
  //   );
  // }   

  return (
    <>
      <Box justifyContent={"center"} ref={componentRef} sx={{display:'none',displayPrint:'contents'}}>
        {/* <Card style={{ width: 400, height: 500 }}> */}
        <Card>
          <CardHeader title="Visitor Pass" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="subtitle1" display={"inline"}>
                  Name:
                </Typography>
                <Typography variant="h6" display={"inline"}>
                  {datas.name}
                </Typography>
                <br></br>
                <Typography variant="subtitle1" display={"inline"}>
                  Visiting Dept:
                </Typography>
                <Typography variant="h6" display={"inline"}>
                  {datas.visiting_dept}
                </Typography>
                <br></br>
                <Typography variant="subtitle1" display={"inline"}>
                  Contact Person:
                </Typography>
                <Typography variant="h6" display={"inline"}>
                  {datas.contact_person}
                </Typography>
                <br></br>
                <Typography variant="subtitle1" display={"inline"}>
                  Date of Visit:
                </Typography>
                <Typography variant="h6" display={"inline"}>
                  {datas.date}
                </Typography>
                <br></br>
                <Typography variant="subtitle1" display={"inline"}>
                  PhoneNumber:
                </Typography>
                <Typography variant="h6" display={"inline"}>
                  {datas.history.phonenumber}
                </Typography>
                <br></br>
                <Typography variant="subtitle1" display={"inline"}>
                  Company:
                </Typography>
                <Typography variant="h6" display={"inline"}>
                {datas.history.company}
                </Typography>
                <br></br>
                <Typography variant="subtitle1" display={"inline"}>
                  AddOns:
                </Typography>
                <Typography variant="h6" display={"inline"}>
                {datas.history.addons}
                </Typography>
                <br></br>
                <Typography variant="subtitle1" display={"inline"}>
                  Purpose:
                </Typography>
                <Typography variant="h6" display={"inline"}>
                {datas.history.purpose}
                </Typography>
                <br></br>
                <Typography variant="subtitle1" display={"inline"}>
                  Address:
                </Typography>
                <Typography variant="h6" display={"inline"}>
                {datas.history.address_of_visitor}
                </Typography>
                <br></br>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Avatar
                  style={{ width: 150, height: 150 }}
                  src={picture}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>      
    </>
  );
}

export default PrintComp;
