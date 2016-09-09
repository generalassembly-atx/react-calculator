import React, { Component } from 'react';


class Calculator extends Component {


  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="inputs">
          <input type="text" ref="inputFirst" placeholder="Input 1"/>
          <span>+</span>
          <input type="text" ref="inputSecond" placeholder="Input 2"/>
          <span>=</span>
          <h3>Addition results go here!</h3>
        </div>
      </div>
    )
  }
}

export default Calculator;
