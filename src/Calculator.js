import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value1: "",
      value2: ""
    }
  }

  handleMathOperators(e) {
    this.setState ({
      sum = value1 + value2;
    })
  }

  render() {
    return (
      <div className="container">
      <h1>Add with React!</h1>
      <button onClick={(e) => this.handleMathOperators(e)}></button>
      console.log("Button was clicked!");
      <div className="add">
        <input type="text" />
        <span>+</span>
        <input type="text" />
        <span>=</span>
        <h3>Addition results go here!</h3>
      </div>
    );
  }
}

export default Calculator;
