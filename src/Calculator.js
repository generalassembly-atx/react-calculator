import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props)

    this.state = {
      sum: 0
    }
  }
  add(e){
    e.preventDefault();
    var add1 = this.refs.add1.value
    var add2 = this.refs.add2.value
    this.setState({
      sum:+add1 + +add2
    });
  }

  render() {
    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" ref="add1" onChange={(e) => this.add(e)} />
          <span> + </span>
          <input type="text" ref="add2" onChange={(e) => this.add(e)} />
          <span> = </span>
          <span> {this.state.sum}</span>
        </div>
      </div>
    )
  };
}

export default Calculator;
