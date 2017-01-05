import React, { Component } from 'react';


class Calculator extends Component {
  constructor(props){
    super(props);
    //This is the only time you ever call state directly (in the constructor function)
    this.state = {
      first: '',
      second: '',
      sum: ''
    };
  }

  handleFirst = (event) => {
    //let first = this.state.value;
    this.setState({ first: event.target.value });
    };


  handleSecond = (event) => {
    //let second = this.state.value;
    this.setState({ second: event.target.value });
    };


  render() {
      return (
        <div className="container">
          <h1>Add with React!</h1>

          <div className="add">
            <input type="text" value={this.state.value} onChange={this.handleFirst.bind(this)}/>
            <span>+</span>
            <input type="text" value={this.state.value} onChange={this.handleSecond.bind(this)}/>
            <span>=</span>
            <h3>{ this.state.sum }</h3>
          </div>
        </div>
      );
  }
}

export default Calculator;
