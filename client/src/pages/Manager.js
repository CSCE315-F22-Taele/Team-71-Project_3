import { useState } from "react";
import { Button, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Manager.css";
import axios from "axios";


const Manager = () => {
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] = useState(null);

  const getInventoryOnClick = () => {
    axios.get('http://localhost:3001/viewInventory').then(function(response){
      document.getElementById('info').value = JSON.stringify(response.data)
    });
    
  };
  
  const addIngredientOnClick = () => {
    const addIngredient = {
      method: 'POST',
      body: {
             'ingredient' : [document.getElementById('ingredientName').value, document.getElementById('ingredientAmount').value, 100],
            }
    };
    console.log(document.getElementById('ingredientAmount').value)

    axios.post('http://localhost:3001/addIngredient',addIngredient.body).then((res) => {
      this.setState({ total: res.data });
    }).catch((error) => {console.log(error.response)});


  };

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
          onClick={getInventoryOnClick}
        >
          View Inventory
        </Button>
        <Button
          className="buttoncontained-text2"
          sx={{ width: 361 }}
          variant="contained"
          color="primary"
          size="large"
          onClick={addIngredientOnClick}
        >
          Add Ingredient
        </Button>
        <Textarea
          className="text-areaoutline-textarea2"
          id = "ingredientName"
          variant="outline"
          w="300px"
          placeholder="Enter Name Of New Ingredient"
        />
        <Textarea
          className="text-areaoutline-textarea3"
          id = "ingredientAmount"
          variant="outline"
          w="300px"
          placeholder="Enter Amount"
        />

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
          id = "info"
          variant="outline"
          w="883px"
          placeholder="information box"
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
