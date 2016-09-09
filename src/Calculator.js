import React, { Component } from 'react';


  class Calculator extends Component {
    constructor(props) {
    super(props)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.reset=this.reset.bind(this)
    this.state = {
      sum: null
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    var firstInterger = parseFloat(this.refs.inputFirst.value)
    var secondInterger = parseFloat(this.refs.inputSecond.value)
    var sum = (firstInterger + secondInterger);
    this.setState({
      sum: sum
    })
  }

  reset(e) {
    e.preventDefault()
    this.setState({
    sum: null
    })
      this.refs.inputFirst.value = ''
      this.refs.inputSecond.value = ''
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="inputFirst" placeholder="Input 1"/>
          <span>+</span>
          <input type="text" ref="inputSecond" placeholder="Input 2"/>
          <span>=</span>
          <h3>{this.state.sum}</h3>
          <input type="submit" value="Calculate!" />
          <button onClick={this.reset}>Reset</button>
        </form>
      </div>
    )
  }
}

export default Calculator;
