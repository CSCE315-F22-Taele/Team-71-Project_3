import "./App.css";
import React, { Component } from "react";
import styled from "styled-components";



function App() {
  const Button = styled.button`
    background-color: blue;
  `;

  const Container = styled.div``;
  const handleClick = () => {
    //call post command
  };

  return (
    <div className="Server">
      <h1>Server</h1>
      <div className="item_box">
        <button type="button" onClick={handleClick}>
          Subtract Ingredient
        </button>
        <button>Item 1</button>
        <button>Item 2</button>
        <button>Item 3</button>
        <button>Item 4</button>
        <button>Item 5</button>
        <button>Item 6</button>
        <button>Item 7</button>
        <button>Item 8</button>
      </div>
    </div>
  );
}

export default App;
