import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props){
      super(props);
      this.state = {
        field1: 0,
        field2: 0,
        total: 0
      }
    }
  handleChange(e){
    let fieldOne = parseInt(getElementsByClassName('field1').value);
    let fieldTwo = parseInt(getElementsByClassName('field2').value);
    this.setState({
      field1: fieldOne,
      field2: fieldTwo,
      total: fieldOne + fieldTwo
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input type="text" value={this.state.field1} className="field1" onChange={(e) => this.handleChange(e)} />
          <span>+</span>
          <input type="text" value={this.state.field2} className="field2" onChange={(e) => this.handleChange(e)} />
          <span>=</span>
          <h3>{this.state.total}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
