import React, { Component } from 'react'

export default class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    }
  }

  handleNum1Change(e) {
    if (!e.target.value || isNaN(e.target.value)) return;

    this.setState({
      num1: parseInt(e.target.value, 10),
      result: parseInt(e.target.value, 10) + this.state.num2
    })
  }

  handleNum2Change(e) {
    if (!e.target.value || isNaN(e.target.value)) return;

    this.setState({
      num2: parseInt(e.target.value, 10),
      result: this.state.num1 + parseInt(e.target.value, 10)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" placeholder="0" onChange={ this.handleNum1Change.bind(this) } />
          <span>+</span>
          <input type="text" placeholder="0" onChange={ this.handleNum2Change.bind(this) } />
          <span>=</span>
          <h3>{ this.state.result }</h3>
        </div>
      </div>
    )
  }
}
