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
    let addSum = val1 + val2;
    this.setState({
      num1: val1,
      num2: val2,
      sum: addSum
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

// Set up the initial state of your component. What state will you need to track? What values should those state items start with? Where is that state printed to the browser?
//
// You will need to figure out how and when you want to listen for an event to trigger a calculation. Is it a click event, a submit event...? It's up to you to figure out what event you want to listen for, on which elements, and why. Here is a list of events React supports and how to listen for them.
// Once you know what event to listen for, you'll need to create a method that accepts the triggered event, gets the input values from your form, adds them together, and sets the state of the new sum.
// thought: how will you handle inputs that aren't numbers?
// Once the state of the sum has been set, React will re-render the whole component. Make sure you have a place in your JSX that displays the result!
