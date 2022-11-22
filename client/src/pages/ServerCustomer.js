import { TextField, Button, Button as MuiButton } from "@mui/material";
import { Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ServerCustomer.css";

const ServerCustomer = () => {
  const requestOptions = {
    method: 'POST',
    body: {
           'ingredient' : ["MUFFIN", "CHEESE"],
           'salesInformation' : ["Item1", 10]
          }
  };
  
  const handleClick = () => {
    console.log(requestOptions.body.ingredient);
    //fetch('/subtractIngredient', requestOptions);
    axios.post('http://localhost:3001/subtractIngredientAndAddToHistory',requestOptions.body).then((res) => {
      this.setState({ total: res.data });
    }).catch((error) => {console.log(error.response)});

  };

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
          className="buttoncontained-text"
          sx={{ width: 216 }}
          variant="contained"
          color="success"
        >
          Place Order
        </Button>
        <Button
          className="buttoncontained-text1"
          sx={{ width: 161 }}
          variant="contained"
          color="error"
        >
          Cancel Order
        </Button>
        <Textarea
          className="text-areaoutline-textarea"
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
      >
        Chicken Sandwhich
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton1"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
      >
        8ct Nggets
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton2"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
      >
        Chicken Strips 3ct
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton3"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Grilled Chicken Cool Wrap
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton4"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
      >
        DLUX Chicken Sandwhich
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton5"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
      >
        12c Nuggets
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton6"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Chicken Strips 4ct
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton7"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Biscuit
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton8"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Spicy Chicken Sandwich
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton9"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Grilled Chicken Club
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton10"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
        size="large"
      >
        Grilled Chicken Sandwhich
      </MuiButton>
      <MuiButton
        className="buttoncontained-text-muibutton11"
        sx={{ width: 181 }}
        variant="contained"
        color="primary"
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
      <nav className="frame-nav" id="Navbar">
        <img className="image-2-icon" alt="" src="../image2@3x.png" />
        <Link className="in-store-location" to="/">
          In store Location
        </Link>
      </nav>
    </nav>
  );
};

export default ServerCustomer;
