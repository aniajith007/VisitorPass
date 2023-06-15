import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PrintIcon from '@mui/icons-material/Print';
import { Card } from "@mui/material";

function Row(props) {
  const { row,printformdialog,rowheaders } = props;  //getting the printformdialog from body
  console.log("row", row);
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.visiting_dept}</TableCell>
        <TableCell align="right">{row.contact_person}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right" ><IconButton><PrintIcon onClick={()=>printformdialog(row)}/></IconButton></TableCell>
        <TableCell align="right" />
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
                <Card>
              <Typography variant="h7" gutterBottom component="div" m={2}>
                Visitor Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow borderBottom="none">
                    <TableCell></TableCell>
                    {rowheaders.map((rowheader,index)=>
                    <>                    
                    <TableCell align={index!==0?"right":""}>
                      <Typography fontWeight={"bold"} color={"primary"}>                        
                        {rowheader}
                      </Typography>
                    </TableCell></>
                    )}
                  </TableRow>
                </TableHead>
                <TableBody borderBottom="none">
                  {
                    <TableRow key={row.history.phonenumber} borderBottom="none">
                      <TableCell></TableCell>
                      <TableCell>{row.history.phonenumber}</TableCell>
                      <TableCell align="right">{row.history.company}</TableCell>
                      <TableCell align="right">{row.history.addons}</TableCell>
                      <TableCell align="right">{row.history.purpose}</TableCell>
                      <TableCell align="right">
                        <p>{row.history.address_of_visitor}</p>
                      </TableCell>
                    </TableRow>
                  }
                </TableBody>
              </Table>
              </Card>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
} //every single row with collapse data

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default function CollapsibleTable({ rowdata, Headers, printformdialog,rowheaders }) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table aria-label="collapsible table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell />
            {Headers?.map((header, index) => (
              <TableCell align={index !== 0 ? "right" : ""}><Typography fontWeight={"bold"}>{header}</Typography></TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rowdata?.map((row) => (
            <Row key={row.name} row={row} printformdialog={printformdialog} rowheaders={rowheaders}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
