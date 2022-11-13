import "./App.css";
import React, { Component } from "react";
//import styled from "styled-components";



class App extends React.Component{
  constructor(props){
    super(props);
  
  }
  //Button = styled.button`
  //background-color: blue;
//`;

 // Container = styled.div``;
  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        //headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('/subtractIngredient', requestOptions)
  }
  

  render(){
    const handleClick = () => {
      const requestOptions = {
        method: 'POST',
        //headers: { 'Content-Type': 'application/json' },
        body: {ingredient: 'BUNS' }
      };
      fetch('/subtractIngredient', requestOptions)
      
    };

    const background={
      backgroundImage: "url(/cfa.jpg)",
      height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
  return (
    <div style={background} >
      <div className = "CFAheader">
        <h1> Chick-fil-a </h1>
      </div>
       <div className="Server">
          <div className="item_box">
            <button type="button" onClick={handleClick} className="button">
              Subtract Ingredient
            </button>
            <button className="button" type="button" onClick={handleClick} >Item 1</button>
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
            <button className="button">Item 13</button>
            <button className="button">Item 14</button>
          </div>
        </div>
    </div>
  );
  }
}
export default App;
