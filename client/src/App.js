import './App.css';
import React, { Component } from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
  
  }
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
        //body: JSON.stringify({ title: 'React POST Request Example' })
      };
      fetch('/subtractIngredient', requestOptions)
      
    };
    return (
      <div className="App">
      <button type="button" onClick={handleClick}>Subtract Ingredient</button>
      </div>
    );
  }

}

export default App;
