import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {value1: 0,
                  value2: 0};
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const total = (+this.state.value1) + (+this.state.value2);

    return (
      <div className='container'>
        <h1>Add with React!</h1>
        <div className='add'>
          <input type='text' value={this.state.value1} name='value1' onChange={this.handleChange.bind(this)}/>
          <span> + </span>
          <input type='text' value={this.state.value2} name='value2' onChange={this.handleChange.bind(this)}/>
          <span> = {total}</span>
        </div>
      </div>
    )
  }
}

export default Calculator;
