import { TextField, Button, Button as MuiButton } from "@mui/material";
import { Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ServerCustomer.css";
import * as menuItems from './MenuItems.js'
const ServerCustomer = () => {
  /*
  const ChickenSandwich = {
    method: 'POST',
    body: {
           'ingredient' : ["BUNS", "PICKLE","CHICKEN_B"],
           'salesInformation' : ["ChickenSandwich", 6]
          }
  };
  */
 /*
  const handleClick = (item) => {
    //console.log(requestOptions.body.ingredient);
    //fetch('/subtractIngredient', requestOptions);
    console.log(item.body)
    axios.post('http://localhost:3001/subtractIngredientAndAddToHistory',item.body).then((res) => {
      this.setState({ total: res.data });
    }).catch((error) => {console.log(error.response)});

  };
*/
  function purchaseItem(item){
    console.log(item.body)
    axios.post('http://localhost:3001/subtractIngredientAndAddToHistory',item.body).then((res) => {
      this.setState({ total: res.data });
    }).catch((error) => {console.log(error.response)});
  }
 
  return (
    <nav className="servercustomer-nav">
      <section className="frame-section" id="cart">
        <div className="your-cart-div">Your Cart</div>
        <img
          className="icon-shopping-cart"
          alt=""
          src="../-icon-shopping-cart.svg"
        />
        <TextField
          className="text-areaoutlined-textfield"
          sx={{ width: 138 }}
          color="primary"
          variant="outlined"
          multiline
          rows={1}
          placeholder="$0.00"
          margin="none"
          disabled
        />
        <div className="total-cost-div">{`Total Cost: `}</div>
        <Button
          className="buttoncontained-text2"
          sx={{ width: 216 }}
          variant="contained"
          color="success"
        >
          Place Order
        </Button>
        <Button
          className="buttoncontained-text3"
          sx={{ width: 161 }}
          variant="contained"
          color="error"
        >
          Cancel Order
        </Button>
        <Textarea
          className="text-areaoutline-textarea1"
          variant="outline"
          w="285px"
          isReadOnly
        />
      </section>
      <MuiButton
        className="buttoncontained-text-muibutton"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => purchaseItem(menuItems.ChickenSandwich)}
        id = "ChickenSandwich"
      >
        Chicken Sandwhich
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton1"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        id = "Nuggets8"
        onClick={() => purchaseItem(menuItems.Nuggets8)}
      >
        8ct Nggets
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton2"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        id = "Strips3"
        onClick={() => purchaseItem(menuItems.Strips3)}


      >
        Chicken Strips 3ct
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton3"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        id = "GrilledChickenWrap"
        onClick={() => purchaseItem(menuItems.GrilledChickenWrap)}
      >
        Grilled Chicken Cool Wrap
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton4"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        id = "DeluxeChickenSandwich"
        onClick={() => purchaseItem(menuItems.DeluxeChickenSandwich)}

      >
        DLUX Chicken Sandwhich
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton5"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        id = "Nuggets12"
        onClick={() => purchaseItem(menuItems.Nuggets12)}

      >
        12c Nuggets
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton6"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => purchaseItem(menuItems.Strips4)}
        id = "Strips4"
        
      >
        Chicken Strips 4ct
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton7"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => purchaseItem(menuItems.Biscuits)}
        id = "Biscuits"
      >
        Biscuit
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton8"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => purchaseItem(menuItems.SpicyChickenSandwich)}
        id = "SpicyChickenSandwich" 
      >
        Spicy Chicken Sandwich
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton9"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => purchaseItem(menuItems.GrilledChickenClub)}

        id = "GrilledChickenClub"
      >
        Grilled Chicken Club
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton10"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={() => purchaseItem(menuItems.GrilledChickenSandwich)}
      >
        Grilled Chicken Sandwhich
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton11"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        id = "ChickenMinis4"
        onClick={() => purchaseItem(menuItems.ChickenMinis4)}

      >
        Chick-n-Minis
      </MuiButton>
      <img className="image-3-icon" alt="" src="../image-3@2x.png" />
      <img className="image-6-icon" alt="" src="../image-6@2x.png" />
      <img className="image-9-icon" alt="" src="../image-9@2x.png" />
      <img className="image-12-icon" alt="" src="../image-12@2x.png" />
      <img className="image-4-icon" alt="" src="../image-4@2x.png" />
      <img className="image-7-icon" alt="" src="../image-6@2x.png" />
      <img className="image-10-icon" alt="" src="../image-9@2x.png" />
      <img className="image-13-icon" alt="" src="../image-13@2x.png" />
      <img className="image-5-icon" alt="" src="../image-5@2x.png" />
      <img className="image-8-icon" alt="" src="../image-8@2x.png" />
      <img className="image-11-icon" alt="" src="../image-11@2x.png" />
      <img className="image-14-icon" alt="" src="../image-14@2x.png" />
      <nav className="frame-nav1" id="Navbar">
        <img className="image-2-icon" alt="" src="../image2@3x.png" />
        <Link className="in-store-location1" to="/">
          In store Location
        </Link>
        <Link className="engineering-a" to="/manager" />
      </nav>
    </nav>
  );
};

export default ServerCustomer;
