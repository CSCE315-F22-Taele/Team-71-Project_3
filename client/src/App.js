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
        <button type="button" onClick={handleClick} className="button">
          Subtract Ingredient
        </button>
        <button className="button">Item 1</button>
        <button className="button">Item 2</button>
        <button className="button">Item 3</button>
        <button className="button">Item 4</button>
        <button className="button">Item 5</button>
        <button className="button">Item 6</button>
        <button className="button">Item 7</button>
        <button className="button">Item 8</button>
        <button className="button">Item 9</button>
        <button className="button">Item 10</button>
        <button className="button">Item 11</button>
        <button className="button">Item 12</button>
      </div>
    </div>
  );
}

export default App;
