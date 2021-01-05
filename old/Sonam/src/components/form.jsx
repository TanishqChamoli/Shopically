import React, { Component } from "react";
// import { useHistory } from 'react-router-dom';
import "./form_login.css";
import axios from "axios";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.signup = this.signup.bind(this);
    this.accountform = this.accountform.bind(this);
  }
  signup() {
    let path = '/signup';
    this.props.history.push(path);
    // let path = "/x?=q" + this.state.querySearch;
    // this.props.history.push(path);
  }
  forgotPassword() {
    let path = '/forgot';
    this.props.history.push(path);
  }
  accountform() {
    let path = '/accountform';
    this.props.history.push(path);
  }
  handleAdd = async (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("pass", this.state.password);
    const url = "http://localhost:80/Website_backend/login_backend.php";
    axios
      .post(url, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div id="animation">
          {/* <marquee direction="right" scrollamount="35"> */}
          SHOPICALLY
          <br />
          (SHOP LOCALLY)
          {/* </marquee> */}
          <br />
          <div id="form_login">
            <div id="sign">
              SIGNIN
              <br />
              <br />
            </div>{" "}
            Email: <br />
            <br />
            <input
              id="mail"
              type="email"
              name="email"
              onChange={this.handleAdd}
            />
            <br />
            <br />
            Password: <br />
            <br />
            <input
              id="pass"
              type="password"
              name="password"
              onChange={this.handleAdd}
            />
            <br />
            <br />
            <br />
            <input
              id="sub"
              name="submit"
              type="submit"
              onClick={this.handleSubmit}
              value="Login"
            />{"  "}
            <button onClick={this.signup}>Create New Account</button>{"  "}<br />
            <button onClick={this.forgotPassword}>Forgot Password?</button>{"  "}
            <button onClick={this.accountform}>Register for new shop</button>{"  "}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
