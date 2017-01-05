import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };
  }

  handleClick() {
    let currentValue = this.state.clicks;
    let newValue = ++currentValue;

    this.setState({
      clicks: newValue
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" />
          <span>+</span>
          <input type="text" />
          <span>=</span>
          <h3>
          <button onClick={ this.handleClick.bind(this) }>Click me</button>
      Number of clicks: { this.state.clicks }

          </h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
