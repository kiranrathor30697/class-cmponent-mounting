import React, { Component } from 'react';
import './App.css';
export default class App extends Component {

  // Property

  // Constructor
  constructor(props){
    super(props);
    this.state = {
      friend : "Shivkanya"
    }
  }

  //Methods
static getDevrivedStateFromProps(){
  console.log("hello");
  return null;
}

  render() {
    return (
      <div className="App App-header">
        <h1>{this.state.friend}<br />{this.props.friend2}</h1>
      </div>
    );
  }
}

