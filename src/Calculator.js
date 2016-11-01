import React, { Component } from 'react';

class Calculator extends Component {
  constructor(){
    super();
    this.state={value: ''};
      this.firstNumber = this.firstNumber.bind(this)
      this.secondNumber = this.secondNumber.bind(this)
    }
  }
  // addNumbers(e){
  //   this.
  // }

  render(){
    return(
    <div className="container">
      <h1>Add with React!</h1>
      <div className="add">
        <input type="text" onChange={this.firstNumber}/>
        <span>+</span>
        <input type="text" onChange={this.secondNumber}/>
        <span>=</span>
        <button onClick={(e) => this.addNumbers(e)}>ADD EM!</button>
        <h3 className="result">Addition results go here!</h3>
      </div>
    </div>
    )
  }


export default Calculator;
