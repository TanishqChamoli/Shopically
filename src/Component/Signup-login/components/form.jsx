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
    window.open("/signup", "_self");
    //let path = '/signup';
    //this.props.history.push(path);
    // let path = "/x?=q" + this.state.querySearch;
    // this.props.history.push(path);
  }
  forgotPassword() {
    // let path = '/forgot';
    // this.props.history.push(path);
    window.open("/forgot", "_self");
  }
  accountform() {
    // let path = '/accountform';
    // this.props.history.push(path);
    window.open("/accountform", "_self");
  }
  handleAdd = async (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("pass", this.state.password);
    const url = "http://shopically.co.in/shopically/my-app/backend/login_backend.php";
    axios.post(url, formData)
      .then((res) => {
        console.log(res);
        if (res.data!="FAIL"){
          //Set new random id
          sessionStorage.setItem("uid",res.data);
          window.open("/","_self")
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div class="header">
          <img src="logo final.png" className="logo-form-pages" />
            
          <div class="form_login">
            <h1 class="formname">Sign-In</h1>
            <br/>
              <h4 class="input-tag">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input id="input-feed" type="email" name="email" onChange={this.handleAdd}/></h4>
              <h4 class="input-tag">Password: <input id="input-feed" type="password" name="password" onChange={this.handleAdd}/></h4>
              &nbsp;&nbsp;&nbsp;
              <input class="btn btn-primary signin-button" id="sub" name="submit" type="submit" onClick={this.handleSubmit} value="Login"/>&nbsp;&nbsp;&nbsp;
              <button class="btn btn-primary signin-button" onClick={this.forgotPassword}>Forgot Password?</button>&nbsp;&nbsp;&nbsp;<br/>
              <button class="btn btn-success signin-button" onClick={this.signup}>Create New Account</button>&nbsp;&nbsp;&nbsp;
              <button class="btn btn-success signin-button" onClick={this.accountform}>Register for new shop</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form;