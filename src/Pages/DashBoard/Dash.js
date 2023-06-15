import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import DashCard from "../../Components/DashCard";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { carddata } from "../../Raw/Raw";

function Dash() {
  // const carddata = [
  //   { heading: "OutpassIN", imgsrc: "",navigation:'',pending:10 },
  //   { heading: "OutpassOUT", imgsrc: "",navigation:'',pending:20 },
  //   { heading: "VisitorIN", imgsrc: "",navigation:'/main/visitor-portal',pending:30 },
  //   { heading: "VisitorOUT", imgsrc: "",navigation:'',pending:15},
  // ];
  return (
    <Box minHeight={'500'} sx={{ height: '100%' }}>
      <Grid m={2}>
        
        <Typography variant="h6" m={2}>
        <DashboardIcon sx={{mr:1,pt:1}} color="inherit"/>
          Security Portal DashBoard
        </Typography>
        <Divider></Divider>
      </Grid>
      <Grid container rowSpacing={1} padding={4}>
        {carddata.map((data,index) => (
          <Grid xs={3}>
            <DashCard carddata={data} index={index+1}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Dash;
