import React, { Component } from "react";

 class Calculator extends Component {
   constructor(props) {
     super(props)
      this.state = {
       total: 0

     }
   }
    sum() {
      var total = (parseInt(this.refs.firstNumber.value) || 0) + (parseInt(this.refs.secondNumber.value) || 0)
      console.log(total);

      this.setState ({
        total: total
      })

   }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="sum">
          <input onKeyUp={this.sum.bind(this)} type="text" ref="firstNumber" placeholder="Enter Numner Here"/>
          <span>+</span>
          <input onKeyUp={this.sum.bind(this)} type="text" ref="secondNumber" placeholder="Enter Numner Here"/>
          <span>=</span>


          <h3>{this.state.total}</h3>

        </div>
      </div>

    )
  }
}
export default Calculator;
import Calculator from '../src/components/Calculator';
