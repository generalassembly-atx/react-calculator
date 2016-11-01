import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props){
  super(props)
  this.state = {
      num1: "",
      num2: "",
      sum: null
    }
  }

  handleNum1(e){
    this.setState ({
      num1: parseInt(e.target.value)
    })
  }

  handleNum2(e){
    this.setState ({
      num2: parseInt(e.target.value)
    })
  }

  handleSumClick(e) {
    this.setState ({
      sum: this.state.num1 + this.state.num2
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" ref='num1' onChange={(e) => this.handleNum1(e)} />
          <span>+</span>
          <input type="text" ref='num2' onChange={(e) => this.handleNum2(e)} />
          <span>=</span>
          <button onClick={(e) => this.handleSumClick(e)}>sum</button>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    )
  }
}

export default Calculator;
