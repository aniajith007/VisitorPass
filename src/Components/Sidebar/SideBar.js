import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Avatar, Button, Grid, Menu, MenuItem, Tooltip } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../Assets/logolucas.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { carddata } from "../../Raw/Raw";

const drawerWidth = 240;

function MainLayout(props) {
  const username = "ak";
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  console.log(location.pathname);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Button size="small" fullWidth>
          <Box mt={1} mr={1} onClick={() => navigate("/main")}>
            <img src={logo} width={60} height={50} />
          </Box>
          <Typography
            component="div"
            fontWeight={"bold"}
            color={"primary"}
            onClick={() => navigate("/main")}
          ></Typography>
        </Button>
      </Toolbar>
      <Divider />
      <ListItem key={"Home"} disablePadding>
        <ListItemButton sx={{ backgroundColor:path==='/main'&&"gainsboro" }}onClick={() => navigate("/main")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} color="primary" />
        </ListItemButton>
      </ListItem>
      <Divider />

      <List>
        {carddata.map((data, index) =>
          index < 2 ? (
            <ListItem key={data.heading} disablePadding>
              <ListItemButton color="primary">
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={data.heading} color="primary" />
              </ListItemButton>
            </ListItem>
          ) : (
            <>              
              <ListItem key={data.heading} disablePadding>
                <ListItemButton sx={{ backgroundColor:path===data.navigation&&"gainsboro" }}>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <ArrowCircleLeftIcon />
                    ) : (
                      <ArrowCircleRightIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={data.heading} />
                </ListItemButton>
              </ListItem>
            </>
          )
        )}
      </List>
      <Divider />
      {/* <List>
        {["Visitor In", "Visitor Out"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{backgroundColor:'gainsboro'}}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <ArrowCircleLeftIcon />
                ) : (
                  <ArrowCircleRightIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItemButton>
      </ListItem>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            LucasTVS{" "}
            {path === "/main/visitor-portal"
              ? " - Visitor-In"
              : path === "/main/visitor-portal-out"
              ? " - Visitor-Out"
              : ""}
          </Typography>
          <Tooltip title="Home" sx={{ ml: "auto", mr: 2 }}>
            <IconButton color="inherit" onClick={() => navigate("/main")}>
              <HomeIcon />
            </IconButton>
          </Tooltip>{" "}
          <Typography mr={1}>{username}</Typography>
          <Tooltip title={username + " Logged In!"}>
            <AccountCircleIcon />
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

MainLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainLayout;
