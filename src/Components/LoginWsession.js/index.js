import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Avatar,
  Stack,
  Typography,
  Button,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import logo from "../../Assets/logolucas.png";
import { useState } from "react";

export default function LoginWsession({ loggedin, navigate, loggedoutOC,gettinOC }) {
  const [loading, setLoading] = useState(false);
  
  const logouloader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      loggedoutOC();
    }, 3000);
  };

  return (
    <Box>
      <Box mx={"40%"} mt={10}>
        <img src={logo} height={65} width={80} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      </Box>
      <Box
        display={"flex"}
        sx={{ mt: 10, mx: 14 }}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        <Avatar
          alt={loggedin?.loggeddata?.user}
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <Box display={"flex"} justifyContent={"center"} sx={{ my: 1 }}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          {loggedin?.loggeddata?.user}
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} sx={{ my: 2 }}>
        <Stack direction={"row"} columnGap={4}>
          <Tooltip
            title={
              <Typography variant="caption">
                Your session is still in alive hit
                <Typography
                  display={"inline"}
                  variant="caption"
                  fontWeight={"bold"}
                >
                  {" "}
                  LogIn{" "}
                </Typography>{" "}
                to continue!
              </Typography>
            }
          >
            <Button
              variant="outlined"
              autoFocus
              color="success"
              startIcon={<ChevronRightIcon />}
              onClick={gettinOC}
            >
              Get in !
            </Button>
          </Tooltip>
          <Tooltip title={"To LogOut " + loggedin?.loggeddata?.user}>
            <Button
              variant="outlined"
              startIcon={
                loading ? <CircularProgress sx={{ p: 1 }} /> : <LogoutIcon />
              }
              onClick={logouloader}
              disabled={loading}
            >
              LogOut!
            </Button>
          </Tooltip>
        </Stack>
      </Box>
    </Box>
  );
}
