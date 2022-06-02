import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  // Property

  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      friend: "Shivkanya",
    };
  }

  //Methods
  static getDerivedStateFromProps(props, state) {
    console.log("hello", props, state);
    if(props.friend2 !== state.friend)
    return null;
  }

  clickHere = () => {
    // console.log("clicked");
    this.setState({
      age :"24"
    })
    
    var x = document.getElementById("k").innerHTML = this.props.friend2;
    console.log(x);
  };

  componentDidMount(){
    console.log("k");
    let y =document.getElementById("k").innerHTML = this.state.friend;
    console.log(y);
  }

  render() {
    return (
      <div className="App App-header">
        <h1 id="k">
          {this.state.friend} 
          <br />
          {this.props.friend2}
          <br />
        </h1>
        <button onClick={this.clickHere}>Click Here</button>
      </div>
    );
  }
}
