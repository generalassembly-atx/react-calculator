import React, { Component } from 'react'

class Calculator extends Component {
  constructor(props){
    super(props)


    this.state = {
      total: 0
    }
  }

  add(){
    var total = (parseInt(this.refs.firstNumber.value) || 0) + (parseInt(this.refs.secondNumber.value) || 0) ;
    // console.log(total);
    this.setState({
      total: total

    })
  }

  render(){
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input onKeyUp={this.add.bind(this)} type="text" ref="firstNumber" placeholder="Enter Number" />
            <span>+</span>
          <input onKeyUp={this.add.bind(this)} type="text" ref="secondNumber" placeholder="Enter Number"/>
            <span>=</span>
        <h1>{this.state.total}</h1>
        </div>
      </div>
    )
  }
}

export default Calculator;

  //
  // this.state = {
  //   total: null
  // }

  // add(e){
  //   e.preventDefault ()
  //   var first = (this.refs.firstNumber.value)
  //   var second = (this.refs.secondNumber.value)
  //   var total = first + second ;
  //   this.setState({
  //     total: total
  //   })
  // }
