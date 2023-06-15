import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import {
  Avatar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Search from "../../Components/Search";
import PrintIcon from "@mui/icons-material/Print";
export default function RightDrawer({
  openDrawer,
  onClose,
  reprint_search_data,
}) {
  const [reprintSearchname, setReprintSearchname] = React.useState("");
  const reprint_soc = (e) => {
    console.log(e);
    setReprintSearchname(e);
  }; // Search onchange setting the oc value in state

  const filterRows = () => {
    return reprint_search_data?.filter((row) => {
      console.log(row);
      const searchValue = reprintSearchname.toLowerCase();
      console.log(reprintSearchname.toLowerCase());
      return row.name.toLowerCase().includes(searchValue);
    });
  }; // Filter for filtering the names from the data for reprint

  React.useEffect(() => {
    // Need to get the Out details from api
    console.log(
      "Need to get details of submitted(waiting for out member's) details"
    );
  }, []);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      //onClick={toggleDrawer(anchor, false)}
      //onKeyDown={toggleDrawer(anchor, false)}
    >
      <Toolbar>
        <Typography color={"primary"}>Reprint</Typography>
        <Tooltip title="Close">
          <IconButton
            sx={{ right: 2, top: 5, position: "absolute" }}
            size="small"
            onClick={onClose}
          >
            <CloseIcon size={"small"} />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <Search rowdata={reprint_search_data} soc={reprint_soc} />
      <Divider />

      {/*First of all Getting the list of submitted in details  */}

      {filterRows()?.map((listOutnames) => (
        <ListItem>
          <Avatar alt="Remy Sharp" sx={{ width: 30, height: 30, mr: 2 }} />
          <ListItemText>{listOutnames.name}</ListItemText>
          <Tooltip title="Reprint">
            <IconButton>
              <PrintIcon />
            </IconButton>
          </Tooltip>
        </ListItem>
      ))}
    </Box>
  ); // Drawer component

  return (
    <div>
      <React.Fragment key={"right"}>
        <Drawer
          anchor={"right"}
          open={openDrawer}
          //onClose={toggleDrawer('right', false)} //default
          onClose={onClose}
          variant="persistent" // Restrict's outer click close
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
