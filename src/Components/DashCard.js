import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DashCard({ carddata,index }) {
  const { heading, img, navigation } = carddata;
  const navigate = useNavigate();

  const pending = carddata.pending;

  React.useEffect(()=>{
    // Need to get an information of outstanding list of items for the dashcards

    console.log("DashBoard api....");
  },[])

  return (
    <Card sx={{ maxWidth: 250 }} onClick={()=>navigate(navigation)}>
      <CardActionArea>
        {/* <CardMedia component="img" height="140" image={img} /> */}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {index + ". "+ heading}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title={"Click to Open "+heading}>
          <Button onClick={()=>navigate(navigation)} variant="outlined" size="small">Open</Button>
          </Tooltip>
          <Typography ml={'auto'} mb={1}>{"Pending " + (pending>20?"20+":pending)}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
