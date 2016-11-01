import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props)

    this.state = {
      sum: 0,
      diff: 0,
      prod: 0,
      quot: 0
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
  sub(e){
    e.preventDefault();
    var sub1 = this.refs.sub1.value
    var sub2 = this.refs.sub2.value
    this.setState({
      diff: +sub1 - +sub2
    })
  }
  mul(e){
    e.preventDefault();
    var mul1 = this.refs.mul1.value
    var mul2 = this.refs.mul2.value
    this.setState({
      prod: +mul1 * +mul2
    })
  }
  div(e){
    e.preventDefault();
    var div1 = this.refs.div1.value
    var div2 = this.refs.div2.value
    var quot = +div1 / +div2;
    if (isNaN(quot)){
      quot = 0;
    } else if (quot === Infinity){
      quot = 0;
    }
    this.setState({
      quot: quot
    })
  }

  render() {
    return(
      <div className="container">
        <h3>Add with React!</h3>

        <div className="add">
          <input type="text" ref="add1" onChange={(e) => this.add(e)} />
          <span> + </span>
          <input type="text" ref="add2" onChange={(e) => this.add(e)} />
          <span> = </span>
          <span> {this.state.sum}</span>
        </div>
        <h3>Subtract with React!</h3>

        <div className="subtract">
          <input type="text" ref="sub1" onChange={(e) => this.sub(e)} />
          <span> - </span>
          <input type="text" ref="sub2" onChange={(e) => this.sub(e)} />
          <span> = </span>
          <span> {this.state.diff}</span>
        </div>

        <h3>Multiply with React!</h3>

        <div className="multiply">
          <input type="text" ref="mul1" onChange={(e) => this.mul(e)} />
          <span> * </span>
          <input type="text" ref="mul2" onChange={(e) => this.mul(e)} />
          <span> = </span>
          <span> {this.state.prod}</span>
        </div>

        <h3>Divdie with React!</h3>

        <div className="divide">
          <input type="text" ref="div1" onChange={(e) => this.div(e)} />
          <span> / </span>
          <input type="text" ref="div2" onChange={(e) => this.div(e)} />
          <span> = </span>
          <span> {this.state.quot}</span>
        </div>
      </div>
    )
  };
}

export default Calculator;
