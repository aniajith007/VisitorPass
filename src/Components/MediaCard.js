import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, CardHeader } from "@mui/material";
import Webcam from "react-webcam";
import axios from "axios";

export default function MediaCard({ Name,McardCapture }) {
  const [picture, setPicture] = React.useState("");
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
    McardCapture(pictureSrc?base64toFile(pictureSrc,'capture.jpg'):"",pictureSrc)
  },[webcamRef]);
  

  function base64toFile(base64Data, filename) {
    const arr = base64Data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }
    
  const Cam = () => {
    return (
      <Webcam
        audio={false}
        height={200}
        width={200}
        videoConstraints={{facingMode: 'user'}} 
        ref={webcamRef}
        mirrored={true}
        screenshotFormat="image/jpeg"
        //videoConstraints={videoConstraints}
      />
    );
  };

  return (
    <Card >
      <CardActionArea>
        <Typography gutterBottom variant="h5" component="div" m={2}>
          {Name}
        </Typography>
        
        {picture==''?<Cam />:<img src={picture} />}
        <CardActions>
          {picture !== "" ? (
            <Button
              size="small"
              onClick={(e) => {                
                setPicture('');
              }}
            >
              ReTake
            </Button>
          ) : (
            <Button
              size="small"
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
            >
              Capture
            </Button>
          )}
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
