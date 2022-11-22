import { TextField, Button, Button as MuiButton } from "@mui/material";
import { Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Manager.css";

const Manager = () => {
  return (
    <nav>
      <nav className="frame-nav" id="Navbar">
        <img className="image-2-icon" alt="" src="../image2@3x.png" />
      </nav>

      <Button
        className="buttoncontained-text"
        sx={{ width: 216 }}
        variant="contained"
        color="success"
      >
        View Inventory
      </Button>

      <Button
        className="buttoncontained-text1"
        sx={{ width: 216 }}
        variant="contained"
        color="success"
      >
        View Sales History
      </Button>

      <TextField
          className="text-areaoutlined-textfield"
          sx={{ width: 500}}
          color="primary"
          variant="outlined"
          multiline
          rows={1}
          placeholder="Inventory or Sales History Appears here"
          margin="none"
          disabled
          inputProps={{
            style: {
              height: "600px",
            },
          }}
        />

    </nav>
  );
};

export default Manager;
