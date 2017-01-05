import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
  	super(props);

  	this.state = {
  		value: '',
  		value2: '',
  		results: ''
  	};

  	this.handleValues = this.handleValues.bind(this);
  	this.handleValues2 = this.handleValues2.bind(this);
  	this.addResults = this.addResults.bind(this);
  }

  handleValues(e){
  	this.setState({value: e.target.value});
  }
  handleValues2(e){
  	this.setState({value2: e.target.value});
  }

  addResults(e){
  	let add = parseInt(this.state.value) + parseInt(this.state.value2)
  	
  	this.setState({
  		results: add
  	})
  	e.preventDefault();

  };


  render() {
    return (
		<div className="container">
		  <h1>Add with React!</h1>

		  <div className="add">
		  <form onSubmit={this.addResults}>
		    <input type="number" value={this.state.value} onChange={this.handleValues} />
		    <span>+</span>
		    <input type="number" value={this.state.value2} onChange={this.handleValues2}/>
		    
		    <input type="submit" value="Enter" />
		  </form>
		    <span>= { this.state.results }</span>
		    <h3>Addition results go here!</h3>
		  </div>
		</div>    	
    
    );
  }
}

export default App;
