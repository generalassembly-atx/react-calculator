import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      result: '0'
    }
  }

  handleChange1(event) {
   this.setState({
     value1: parseInt(event.target.value)
   });
  }

  handleChange2(event) {
   this.setState({
     value2: parseInt(event.target.value)
   });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      result: this.state.value1 + this.state.value2
    });

    this.setState({
      value1: '',
      value2: ''
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text"
              value={this.state.value1}
              onChange={(e) => this.handleChange1(e)} />
            <span>+</span>
            <input type="text"
            value={this.state.value2}
            onChange={(e) => this.handleChange2(e)} />
            <span>=</span>
            <input type="submit" value="Click" />
          </form>
          
          <h3>Addition results go here!</h3>
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
