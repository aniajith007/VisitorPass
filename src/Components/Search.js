import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Avatar, Box } from "@mui/material";
//import logo from '../logolucas.png'

//const filter = createFilterOptions();

// function Search({ soc }) {
//   const [value, setValue] = React.useState(null);

//   return (
//     <Autocomplete
//       value={value}
//       onChange={(event, newValue) => {
//         soc(newValue);
//         if (typeof newValue === "string") {
//           setValue({
//             title: newValue,
//           });
//         } else if (newValue && newValue.inputValue) {
//           // Create a new value from the user input
//           setValue({
//             title: newValue.inputValue,
//           });
//         } else {
//           setValue(newValue);
//         }
//       }}
//       filterOptions={(options, params) => {
//         const filtered = filter(options, params);

//         const { inputValue } = params;
//         // Suggest the creation of a new value
//         const isExisting = options.some(
//           (option) => inputValue === option.title
//         );
//         if (inputValue !== "" && !isExisting) {
//           filtered.push({
//             inputValue,
//             title: `Add "${inputValue}"`,
//           });
//         }

//         return filtered;
//       }}
//       selectOnFocus
//       clearOnBlur
//       handleHomeEndKeys
//       id="free-solo-with-text-demo"
//       options={top100Films}
//       getOptionLabel={(option) => {
//         // Value selected with enter, right from the input
//         if (typeof option === "string") {
//           return option;
//         }
//         // Add "xxx" option created dynamically
//         if (option.inputValue) {
//           return option.inputValue;
//         }
//         // Regular option
//         return option.title;
//       }}
//       renderOption={(props, option) => <li {...props}>{option.title}</li>}
//       sx={{ width: 300 }}
//       freeSolo
//       renderInput={(params) => <TextField {...params} label="Search" />}
//     />
//   );
// }

export const RenderinnSearchOutput = ({ data, soc }) => {
  return (
    <Box>      
      <TextField
        {...data}        
        onChange={(e) => soc(e.target.value)}
        label="Search"
      />
    </Box>
  );
};

export default function searchText({ soc, rowdata }) {
  console.log("rowdata", rowdata);
  const arr = rowdata?rowdata:[];
  return (
    <>
      <Autocomplete
        options={arr}
        getOptionLabel={(option) => {
          return option.name;
        }}
        onChange={(e, val) => soc(val ? (val.name ? val.name : "") : "")}
        renderInput={(params) => (
          <RenderinnSearchOutput data={params} soc={soc} />
        )}
        clearIcon={() => console.log("clearicon")}
      />
    </>
  );
}
