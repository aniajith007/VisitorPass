import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CollapsibleTable from "../../Components/Table/Table";
import Search from "../../Components/Search";
import PrintDialog from "../../Components/PrintDialog/PrintDialog";
import PD from "../../Components/PrintDialog/Pd2";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import Header from "../../Components/Header/Header";
import RightDrawer from "../../Components/ReprintDrawer/RightDrawer";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Loader from "../../Components/Loader/Loader";

function Body() {
  const [searchText, setSearch] = useState("");
  const [printTag, setPrinttag] = useState(false);
  const [visitordata, setVisitordata] = useState();
  const [inRowsData, setInrowsdata] = useState();
  const [loading, setLoading] = useState(false);
  // Reprint Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  function createData(
    name,
    visiting_dept,
    contact_person,
    date,
    print,
    history
  ) {
    return {
      name,
      visiting_dept,
      contact_person,
      date,
      print,
      history: history,
    };
  } //schema
  const Headers = ["Name", "Visiting Dept", "Contact Person", "Date", "Print"]; //table headers

  const rowsdatadummy = [
    createData("Swaminathan", "IT", "Vijendran", "05-05-23", "", {
      address_of_visitor: "Lucastvs,padi",
      company: "LTVS",
      phonenumber: "123456789",
      addons: "2",
      purpose: "official",
    }),
    createData("ArunNehru", "IT", "Samsudeen", "05-05-23", "", {
      address_of_visitor: "Lucastvs,padi",
      company: "LTVS",
      phonenumber: "123456789",
      addons: "2",
      purpose: "official",
    }),
    createData("Chelli", "AdvEngg", "Unknown", "05-05-23", "", {
      address_of_visitor: "Lucastvs,padi",
      company: "LTVS",
      phonenumber: "123456789",
      addons: "2",
      purpose: "official",
    }),
    createData("Sowmya", "IT", "Swaminathan", "05-05-23", "", {
      address_of_visitor: "Lucastvs,padi",
      company: "LTVS",
      phonenumber: "123456789",
      addons: "2",
      purpose: "official",
    }),
    createData("Ganapathy", "IT", "Swaminathan", "05-05-23", "", {
      address_of_visitor: "Lucastvs,padi",
      company: "LTVS",
      phonenumber: "123456789",
      addons: "2",
      purpose: "official",
    }),
    createData("Vijendran", "HR", "Person1", "05-05-23", "", {
      address_of_visitor: "Lucastvs,padi",
      company: "LTVS",
      phonenumber: "123456789",
      addons: "2",
      purpose: "official",
    }),
  ];

  const rows = inRowsData;

  const rowheaders = [
    "Phonenumber",
    "Company",
    "AddOns",
    "Purpose",
    "Address of visitor",
  ];

  const searchOnchange = (newvalue) => {
    console.log(newvalue);
    const search = newvalue;
    setSearch(search);
  };

  const filterRows = () => {
    return rows?.filter((row) => {
      console.log(row);
      const searchValue = searchText.toLowerCase();
      console.log(searchText.toLowerCase());
      return row.name.toLowerCase().includes(searchValue);
    });
  };

  const printformdialog = (e) => {
    console.log("clicked print data..", e);
    setVisitordata(e);
    handleClickOpen();
  };

  //printformdialog
  const handleClickOpen = () => {
    setPrinttag(true);
  };

  const handleClose = () => {
    setPrinttag(false);
  };

  // Reprint Drawer onClose
  const drawerClose = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    // Need to get a visitor in data from api
    setLoading(true);
    setTimeout(() => {
      setInrowsdata(rowsdatadummy);
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Box m={2}>
        <Grid
          container
          rowSpacing={2}
          padding={2}
          columnSpacing={{ xs: 1, sm: 2, md: 1 }}
        >
          <Grid xs={10}>
            <Box
              sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            >
              <ArrowCircleLeftIcon color="primary" />
              <Typography
                variant="h5"
                ml={1}
                mt={1}
                textAlign={"left"}
                gutterBottom
              >
                Visitor Pass In
              </Typography>
            </Box>
          </Grid>

          <Grid xs={2} mt={2}>
            <Button
              startIcon={<LocalPrintshopIcon />}
              onClick={() => setOpenDrawer((sts) => (sts ? false : true))}
            >
              Reprint
            </Button>
          </Grid>
        </Grid>

        <Box pb={2} pl={2} pr={2}>
          <Divider></Divider>
        </Box>

        <Container maxWidth>
          <Grid xs={12} mb={2}>
            {!loading ? (
              <Search soc={searchOnchange} rowdata={rows} />
            ) : (
              <TextField fullWidth disabled label={"Please wait..."} />
            )}
          </Grid>
          {!loading && (
            <CollapsibleTable
              rowdata={filterRows()}
              Headers={Headers}
              rowheaders={rowheaders}
              printformdialog={printformdialog}
            />
          )}
        </Container>
        {/* {printTag&&<PrintDialog printTag={printTag} handleClose={handleClose} visitordata={visitordata}/>} */}
        {printTag && (
          <PD
            printTag={printTag}
            handleClose={handleClose}
            visitordata={visitordata}
          />
        )}
      </Box>
      <RightDrawer
        openDrawer={openDrawer}
        onClose={drawerClose}
        reprint_search_data={rows}
      />
      {loading && (
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </Box>
      )}
    </>
  );
}

export default Body;
