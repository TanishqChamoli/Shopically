import React, { Component } from "react";
import ReactDOM from "react-dom";
import Signup from "./signup";
import Form from "./form";
import "./choice.css";

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
        <div id="ch">
          <button onClick={this.login}>LOGIN</button>
          <br />
          <br />
          <button onClick={this.signup}>SIGNIN</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Choice;
