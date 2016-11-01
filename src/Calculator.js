import React, { Component } from 'react';

class Calculator extends Component {


  constructor(props){
    super(props);
    this.state = {
      field1: 0,
      field2: 0,
      addition: 0
    }
  }
  handleField1() {
    let number = 12
    this.setState({
      field1: number
    })
  }
  // handleField2() {
  //   let number = this.val()
  //   this.setState({
  //     field2: number
  //   })
  // }
  render() {
    return (
    <div className="container">
      <h1>Add with React!</h1>

      <div className="add">
        <input type="text"  />
        <span>+</span>
        <input type="text" onKeyPress={() => this.handleField1()}/>
        <span>=</span>
        <h3>Addition results go here! {this.state.field1}</h3>
        <button onClick={() => this.handleField1()} >button</button>
      </div>
    </div>
    )
  }
}

export default Calculator;
