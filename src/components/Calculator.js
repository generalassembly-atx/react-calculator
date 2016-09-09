import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sum: 0
    }
  };

  add() {
    var sum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0);

    this.setState({
      sum: sum
    });
  };

  subtract() {
    var sum = parseInt(this.refs.val1.value) - parseInt(this.refs.val2.value);

    this.setState({
      sum: sum
    });
  };

  multiply() {
    var sum = parseInt(this.refs.val1.value) * parseInt(this.refs.val2.value);

    this.setState({
      sum: sum
    });
  };

  divide() {
    var sum = parseInt(this.refs.val1.value) / parseInt(this.refs.val2.value);

    this.setState({
      sum: sum
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" ref="val1" />
          <input type="text" ref="val2" />
          <span>=</span>
          <div className="buttons">
            <button id="add" onClick={this.add.bind(this)}>+</button>
            <button id="subtract" onClick={this.subtract.bind(this)}>-</button>
            <button id="multiply" onClick={this.multiply.bind(this)}>x</button>
            <button id="divide" onClick={this.divide.bind(this)}>/</button>
          </div>
          <h3>{this.state.sum}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
