import { useState } from "react";
import { Button, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Manager.css";

const Manager = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <nav className="manager-nav">
        <nav className="frame-nav" id="Navbar">
          <Link className="image-21" to="/desktop-1" />
          <Link className="in-store-location" to="/">
            In store Location
          </Link>
        </nav>
        <Button
          className="buttoncontained-text"
          sx={{ width: 361 }}
          variant="contained"
          color="primary"
          size="large"
        >
          View Inventory
        </Button>
        <Button
          className="buttoncontained-text1"
          sx={{ width: 361 }}
          variant="contained"
          color="primary"
          size="large"
        >
          View Sales History
        </Button>
        <Textarea
          className="text-areaoutline-textarea"
          variant="outline"
          w="883px"
          placeholder="Text Area"
          isReadOnly
        />
        <div className="date-picker-div">
          <DatePicker
            label="Date picker"
            value={datePickerDateTimePickerValue}
            onChange={(newValue) => {
              setDatePickerDateTimePickerValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                variant="standard"
                size="medium"
                renderInput={{ placeholder: "01/01/2022" }}
                helperText=""
              />
            )}
          />
        </div>
      </nav>
    </LocalizationProvider>
  );
};

export default Manager;
