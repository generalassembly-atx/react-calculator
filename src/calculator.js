import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sum: 0
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" />
          <span>+</span>
          <input type="text" />
          <span>=</span>
          <h3>Addition results go here!</h3>
        </div>
      </div>
    )
  }

}

export default Calculator;
