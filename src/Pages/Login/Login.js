import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import sideimg from "../../Assets/vistor.png";
import logo from "../../Assets/logolucas.png";
import Header from "../../Components/Header/Header";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {  
  IconButton,
  InputAdornment,  
} from "@mui/material";
import Loader from "../../Components/Loader/Loader";
import { useState } from "react";
import { useVisitorContext } from "../../Hooks/Context";
import { LocalSt } from "../../LocalStorage";
import LoginWsession from "../../Components/LoginWsession.js";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      fontWeight={"bold"}
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Designed by "}
      LucasTVS
      {" " + new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [passview, setPassview] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const { loginchange, logoutchange } = useVisitorContext();

  const [loggedin, setloggedin,user] = useState({ logsts: false, loggeddata: "" });
  const navigate = useNavigate();
  console.log(errors);

  // Logout call back function for LoginWsession component
  const handleLoggedOutWS = () => {
    console.log("logout handler in login page");
    logoutchange();
    setloggedin({ logsts: false, loggeddata: "" });
  };

  // Gett in call back function for LoginWsession component
  const handleGettin = ()=>{
    // Check same tab or not :-  user ? same tab : newtab
    if(user){
      navigate('/main');
    }else{
      loginchange(); // 3rd if condition check - it will set setuser(context userdata for new tab),
                     // if LST data is available  but context user data is not available it will set
      navigate('/main');
    }    
  }

  const onSubmit = (data) => {
    //event.preventDefault();
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (data.userid === "ak" && data.password === "12345") {
        console.log("LoggedIN!!!");
        loginchange({ user: "ak", pw: "12345" });
        navigate("/main");
      }
    }, 3000);
  };

  React.useEffect(() => {
    if (LocalSt("getLST")) {
      console.log(
        "Checking the LST before Login!",
        JSON.parse(LocalSt("getLST"))
      );        
      setloggedin({ logsts: true, loggeddata: JSON.parse(LocalSt("getLST")) });
    } else {
      console.log("No UserData is in LST. New Login / May be session expired!");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header loggedin={false} main={true} title={"LucasTVS"} />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${sideimg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "center",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {!loggedin.logsts ? (
            <Box
              sx={{
                my: 8,
                mx: 4,
                flexGrow: 1,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box ml={"40%"} mt={10}>
                <img src={logo} height={65} width={80} />
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Box>

              <Box component="form" noValidate sx={{ mt: 1 }}>
                <Controller
                  control={control}
                  name="userid"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      label="UserID"
                      error={!(errors["userid"] == null)}
                      autoComplete="email"
                      autoFocus
                    />
                  )}
                />

                {errors.userid ? (
                  errors.userid.type === "required" ? (
                    <Typography
                      fontSize={"small"}
                      marginLeft={1}
                      color={"error"}
                    >
                      UserID required
                    </Typography>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}

                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      label="Password"
                      error={!(errors["password"] == null)}
                      type={!passview ? "password" : "text"}
                      autoComplete="current-password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setPassview((x) => (x ? false : true))
                              }
                            >
                              <RemoveRedEyeIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />

                {errors.password ? (
                  errors.password.type === "required" ? (
                    <Typography
                      fullWidth
                      fontSize={"small"}
                      marginLeft={1}
                      color={"error"}
                    >
                      Password required
                    </Typography>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit(onSubmit)}
                  endIcon={loading && <Loader />}
                >
                  {!loading && "Sign In"}
                </Button>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          ) : (
            <LoginWsession
              loggedin={loggedin}
              navigate={navigate}
              loggedoutOC={handleLoggedOutWS}
              gettinOC = {handleGettin}
            />
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
