import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.getTotal = this.getTotal.bind(this)

    this.state = {
      total: null
    }

  }

  getTotal() {
    var first = parseFloat(this.refs.first.value)
    var second = parseFloat(this.refs.second.value)
    var total = (first + second)
    console.log(total);
    this.setState({
      total: total
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <form onKeyUp={this.getTotal}>
          <input type='text' ref='first'/>
          <span>+</span>
          <input type='text' ref='second'/>
          <span>=</span>
          <h3>{this.state.total}</h3>
          {/* <button></button> */}
        </form>
      </div>
    );
  }
}

export default App;
