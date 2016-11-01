import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      numOne: "",
      numTwo: "",
      sum: ""
    }
    this.handleNumOne = this.handleNumOne.bind(this);
    this.handleNumTwo = this.handleNumTwo.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }
  handleNumOne(event) {
    console.log(event.target.value);
     this.setState({numOne: event.target.value});
   }
   handleNumTwo(event) {
     console.log(event.target.value);
      this.setState({numTwo: event.target.value});
    }

  handleAddition(e){
    e.preventDefault();
    console.log({})
    this.setState({
      sum: parseInt(this.state.numOne) + parseInt(this.state.numTwo)
    })
  }
  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <form onSubmit={(e) => this.handleAddition(e)}>
            <input type="text" className="numOne" value={this.state.numOne} onChange={this.handleNumOne}/>
            <span>+</span>
            <input type="text" name="numTwo" value={this.state.numTwo} onChange={this.handleNumTwo}/>
            <input type='submit' value="="/>
          </form>
          <h3>Addition results go here!</h3>
          <div className='sum'>{this.state.sum}</div>
        </div>
      </div>
    )
  }

}

export default Calculator;
