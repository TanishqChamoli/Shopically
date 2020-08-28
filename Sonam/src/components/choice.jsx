import React, { Component } from "react";
import ReactDOM from "react-dom";
import Signup from "./signup";
import Form from "./form";

class Choice extends Component {
  state = {};
  login() {
    return ReactDOM.render(<Form />, document.getElementById("root"));
  }
  signup() {
    return ReactDOM.render(<Signup />, document.getElementById("root"));
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.login}>LOGIN</button>
        <button onClick={this.signup}>SignIN</button>
      </React.Fragment>
    );
  }
}

export default Choice;
