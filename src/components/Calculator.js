//add event handlers and work with state
import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sum: ''
    };
  }
  handleClick() {
    let currentValue = this.state.value;

    this.setState({
      sum: parseInt() + parseInt()  //fix this
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" name="first" /> //get contents of these
          <span>+</span>
          <input type="text" name="second" />
          <button onClick={ this.handleClick.bind(this) }>=</button>
          <h3>The sum is: { this.state.sum }</h3>
        </div>
      </div>
    )
  }
}

export default Calculator;
