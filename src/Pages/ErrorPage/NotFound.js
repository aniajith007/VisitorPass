import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 30,
          backgroundColor: "primary",
        }}
      >
        <Typography variant="h1">404</Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="body">No Page Found!</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<ChevronRightIcon />}
          onClick={() => navigate("/")}
          autoFocus
        >
          Go To Login!
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;
