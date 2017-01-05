import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';




class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1:0,
      num2:0,
      sum: 0
      }
    }

  handleChange(event){
    let val1 = parseInt(document.getElementById('fnum').value || 0, 10);
    let val2 = parseInt(document.getElementById('snum').value || 0, 10);
    let addSum = val1+ val2;
    this.setState({
      num1: val1,
      num2: val2,
      sum:addSum
    });
  };


  render() {
    return (
      <div className="container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>Add with React!</h1>
        <div className="add">
          <input id="fnum" type="text" onChange={this.handleChange.bind(this)}  />
            <span>+</span>
          <input id="snum" type="text" onChange={this.handleChange.bind(this)} />
            <span>=</span>
              <h3>{ this.state.sum }</h3>
        </div>
      </div>
    )
  };
}
export default Calculator;
