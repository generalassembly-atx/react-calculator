
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      value1:0,
      value2:0,
      sum: 0
    }
  }
  handleChange(event){
    let newValue1 = parseInt(document.getElementById('val1').value || 0);
    let newValue2 = parseInt(document.getElementById('val2').value || 0);
    let newSum = newValue1+newValue2;
    this.setState({
      value1:newValue1,
      value2:newValue2,
      sum:newSum
    });
    console.log('value1: ',newValue1);
  }
  render() {
    return(
          <div className="container">
      <h1>Add with React!</h1>

      <div className="add">
        <input id = "val1" placeholder="0" placeholder={this.state.value1} onChange={this.handleChange.bind(this)} type="text" />
        <span>+</span>
        <input id = "val2" placeholder="0" placeholder={this.state.value2} onChange={this.handleChange.bind(this)}  type="text" />
        <span>=</span>
        <h3>{this.state.sum}</h3>
      </div>
    </div>
    );
  }
}

export default Calculator;
