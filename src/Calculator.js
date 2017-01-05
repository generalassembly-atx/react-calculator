import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {
  constructor(props) {
    //accessing the parent through 'super'
    super(props);
//only time we set this.state directly
    this.state = {
      input1 = '',
      input2 = '',
      sum = ''

      this.handleinput1 = this.handleinput1.bind(this);
      this.handleinput2 = this.handleinput2.bind(this);
      this.handlesum = this.handlesum.bind(this);

    }
      handleinput1(x) {
        let input1 = this.setState({input1: x.target.value});

      }
      handleinput2 (x){
        let input2 = this.setState({input2: x.target.value})
      }
      handlesum (x){
        let compute = parseInt(this.state.input1) + parseInt(this.state.input2)

        //setState lets react know that this.state has changed
        //without it, react will think that nothing has changed

        this.setState({
          sum: compute
        })

      };



  render() {
    return (

              <div className="container">
                <h1>Add with React!</h1>
                <div className="add">
                  <input type="text" value={ this.state.input1 }/>
                  <span>+</span>
                  <input type="text" value={ this.state.input2 }/>
                  <span>=</span>
                  <h3>Results</h3>
                  <span>{ this.state.sum }</span>
                </div>
                <button onClick={ this.handleClick.bind(this) }>Compute</button>
              </div>

    );
  }
}



export default App;

// Set up the initial state of your component. What state will you need to track? What values should those state items start with? Where is that state printed to the browser?
//
// You will need to figure out how and when you want to listen for an event to trigger a calculation. Is it a click event, a submit event...? It's up to you to figure out what event you want to listen for, on which elements, and why. Here is a list of events React supports and how to listen for them.
// Once you know what event to listen for, you'll need to create a method that accepts the triggered event, gets the input values from your form, adds them together, and sets the state of the new sum.
// thought: how will you handle inputs that aren't numbers?
// Once the state of the sum has been set, React will re-render the whole component. Make sure you have a place in your JSX that displays the result!
