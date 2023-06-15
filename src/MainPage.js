import React from "react";
import Header from "./Components/Header/Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
function MainPage() {
  return (
    <>
      <Box>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </Box>
    </>
  );
}

export default MainPage;
