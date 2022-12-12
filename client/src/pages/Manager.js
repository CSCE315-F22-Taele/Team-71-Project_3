import React, { useState } from "react";
import { Button, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Manager.css";
import axios from "axios";
import * as menuItems from "./MenuItems.js";

/**
 * Manager is a functional React component that represents the Manager page of the app.
 * It uses the following imported components:
 * - useState from "react" for state management
 * - Button, TextField, Icon from "@mui/material" for UI components
 * - LocalizationProvider, DatePicker from "@mui/x-date-pickers" for handling dates
 * - AdapterDateFns from "@mui/x-date-pickers/AdapterDateFns" for adapting dates to the DateFns format
 * - Textarea from "@chakra-ui/react" for a text area input
 * - Link from "react-router-dom" for navigating between pages
 * - "./Manager.css" for styling
 *
 *  The manager component renders a navigation bar with several buttons and text fields.
 * When the buttons are clicked, certain actions are performed and the results are displayed in the text fields.
 *
 *
 * @returns {JSX.Element}
 */

const Manager = () => {
<<<<<<< HEAD
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] =
    useState(null);
=======
  const [datePickerDateTimePickerValue, setDatePickerDateTimePickerValue] = useState(null);
  const [datePickerDateTimePickerValue2, setDatePickerDateTimePickerValue2] = useState(null);

>>>>>>> 789a2bbcc5982fa1822eccbe6b098b07c7f576ca
  //console.log(Object.keys(menuItems))
  //menuItems.menuArray[0].body.salesInformation[1] = 20
  //console.log(menuItems.ChickenSandwich)

  /**
   * The code is defining a function named getInventoryOnClick that sends a GET request to the URL http://localhost:3001/viewInventory using the axios library.
   * If the request is successful, the response data is parsed to a string and set as the value of the element with an ID of info.
   */
  const getInventoryOnClick = () => {
<<<<<<< HEAD
    axios.get("http://localhost:3001/viewInventory").then(function (response) {
      document.getElementById("info").value = JSON.stringify(response.data);
=======
    axios.get('http://localhost:3001/viewInventory').then(function(response){
      var display = ""
      for(let i = 0; i < response.data.length; i++){
        display += response.data[i].inventory_name + " " + response.data[i].inventory_count + " " + response.data[i].inventory_original + '\n';
      }
      document.getElementById('info').value = display
    });
  };
  const getRestockReport = () => {
    axios.get('http://localhost:3001/restockReport').then(function(response){
      var display = ""
      for(let i = 0; i < response.data.length; i++){
        display += response.data[i].inventory_name + " " + response.data[i].inventory_count + " " + response.data[i].inventory_original + '\n';
      }
      document.getElementById('info').value = display
    });
  };

  const getExcessReport = () => {
    axios.get('http://localhost:3001/excessReport').then(function(response){
      var display = ""
      for(let i = 0; i < response.data.length; i++){
        display += response.data[i].inventory_name + " " + response.data[i].inventory_count + " " + response.data[i].inventory_original + '\n';
      }
      document.getElementById('info').value = display
    });
  };

  function compareDate(date1, date2){
    var year1 = parseInt(date1.substring(date1.length - 4))
    var year2 = parseInt(date2.substring(date1.length - 4))

    if(year2 > year1){
      return 1;
    }else if(year2 < year1){
      return 0
    }else{
      //compare months
      var month1 = parseInt(date1[0] + date1[1])
      var month2 = parseInt(date2[0] + date2[1])
      
      if(month2 > month1){
        return 1;
      }else if (month2 < month1){
        return 0;
      }else{
        //compare day
        var day1 = parseInt(date1[3] + date1[4])
        var day2 = parseInt(date2[3] + date2[4])

        if(day2 > day1){
          return 1;
        }else if (day2 < day1){
          return 0;
        }else{
          return -1;
        }
      
      }
    }
  }

  const getSalesHistory = () => {
    let value; 
    let datesBetween = []

    axios.get('http://localhost:3001/getDates').then(function(response){
      let date1 = document.getElementById('date1').value
      let date2 = document.getElementById('date2').value
      datesBetween = []
      for(let i = 0; i < response.data.length; i++){
        //make sure each date is between date 1 and date 2
        if((compareDate(date1,response.data[i].date) == 1 || compareDate(date1,response.data[i].date) == -1) && (compareDate(date2,response.data[i].date) == 0 || compareDate(date2,response.data[i].date) == -1)){
          if(datesBetween.indexOf(response.data[i].date) === -1){
            datesBetween.push(response.data[i].date)
          }
        } 
      }
      console.log(datesBetween)
      
      const datesToUse = {
        method: 'POST',
        body: {
              'date' : datesBetween
              }
      };
      axios.post('http://localhost:3001/filteredDates',datesToUse.body).then(function(response){
        var display = ""
        for (let i = 0; i < response.data.length; i++){
          display += response.data[i].item + " " + response.data[i].cost + " " + response.data[i].date + "\n";
        }
        document.getElementById('info').value = display

      });
>>>>>>> 789a2bbcc5982fa1822eccbe6b098b07c7f576ca
    });
  };

  /**
   * This code is a function named getMenuItemsPrice that gets the values of two elements in the DOM with the ids "itemName" and "itemPrice",
   * and uses those values to update the price of an item in the menuArray object in the menuItems module.
   * The function then logs the new price to the console and updates the value of the element with id="info" to show the name and price of each item in the menuArray.
   */

  const getMenuItemsPrice = () => {
    document.getElementById("itemName").value;
    document.getElementById("itemPrice").value;
    if (
      document.getElementById("itemName").value != "" &&
      document.getElementById("itemPrice").value != ""
    ) {
      for (let i = 0; i < menuItems.menuArray.length; i++) {
        if (
          menuItems.menuArray[i].body.salesInformation[0] ==
          document.getElementById("itemName").value
        ) {
          menuItems.menuArray[i].body.salesInformation[1] =
            document.getElementById("itemPrice").value;
          console.log(menuItems.menuArray[i].body.salesInformation[1]);
        }
      }
    } else {
      console.log("No input");
    }

    let prices = "";
    for (let i = 0; i < menuItems.menuArray.length; i++) {
      prices +=
        menuItems.menuArray[i].body.salesInformation[0] +
        " " +
        menuItems.menuArray[i].body.salesInformation[1] +
        "\n";
    }
    document.getElementById("info").value = prices;
  };

  /**
   * This code defines a function named addIngredientOnClick. When this function is called, it creates an object called addIngredient with a POST method and a body property.
   * The body property is an object that contains a property called ingredient which is an array of values taken from the values of elements with the ids ingredientName and ingredientAmount.
   * Then, the code makes an HTTP POST request to the URL http://localhost:3001/addIngredient with the addIngredient object as the request body.
   * If the request is successful, the total property of the component's state is set to the response data.
   * If the request fails, an error message is logged to the console.
   */
  const addIngredientOnClick = () => {
    const addIngredient = {
      method: "POST",
      body: {
        ingredient: [
          document.getElementById("ingredientName").value,
          document.getElementById("ingredientAmount").value,
          100,
        ],
      },
    };
    console.log(document.getElementById("ingredientAmount").value);

    axios
      .post("http://localhost:3001/addIngredient", addIngredient.body)
      .then((res) => {
        this.setState({ total: res.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
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
          className="button"
          sx={{ width: 361 }}
          variant="contained"
          color="primary"
          size="large"
          onClick={getMenuItemsPrice}
        >
          Change/View Menu and Prices
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
        <Button
          className="button2"
          sx={{ width: 361 }}
          variant="contained"
          color="primary"
          size="large"
          onClick={getRestockReport}
        >
          Restock Report
        </Button>

        <Button
          className="button3"
          sx={{ width: 361 }}
          variant="contained"
          color="primary"
          size="large"
          onClick={getExcessReport}
        >
          Excess Report
        </Button>

        <Textarea
          className="text-areaoutline-textarea2"
          id="ingredientName"
          variant="outline"
          w="300px"
          placeholder="Enter Name Of New Ingredient"
        />
        <Textarea
          className="text-areaoutline-textarea3"
          id="ingredientAmount"
          variant="outline"
          w="300px"
          placeholder="Enter Amount"
        />
        <Textarea
          className="text-areaoutline-textarea4"
          id="itemName"
          variant="outline"
          w="150px"
          placeholder="Enter Item Name"
        />
        <Textarea
          className="text-areaoutline-textarea5"
          id="itemPrice"
          variant="outline"
          w="150px"
          placeholder="Enter Item Price"
        />

        <Button
          className="buttoncontained-text1"
          sx={{ width: 361 }}
          variant="contained"
          color="primary"
          size="large"
          onClick = {getSalesHistory}
        >
          View Sales History
        </Button>
        <Textarea
          className="text-areaoutline-textarea"
          id="info"
          variant="outline"
          w="883px"
          placeholder="information box"
          isReadOnly
        />
        <div className="date-picker-div">
          <DatePicker
            id = "date1"
            label="Date picker1"
            value={datePickerDateTimePickerValue}
            onChange={(newValue) => {
              setDatePickerDateTimePickerValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                id = "date1"
                color="primary"
                variant="standard"
                size="medium"
                renderInput={{ placeholder: "01/01/2022" }}
                helperText=""
              />
            )}
          />
        </div>

        <div className="date-picker-div2">
          <DatePicker
            id = "date2"
            label="Date picker2"
            value={datePickerDateTimePickerValue2}
            onChange={(newValue2) => {
              setDatePickerDateTimePickerValue2(newValue2);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                id = "date2"
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
