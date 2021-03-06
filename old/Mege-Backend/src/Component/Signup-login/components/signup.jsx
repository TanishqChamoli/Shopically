import axios from "axios";
import React, { Component } from "react";
import './signup.css'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cpassword: "",
      fname: "",
      lname: "",
      contact: "",
      gender: "",
      address:"",
      pincode : ""
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.routeChange = this.routeChange.bind(this);
    this.accountform = this.accountform.bind(this);
  }
  accountform() {
    let path = '/accountform';
    this.props.history.push(path);
  }
  routeChange() {
    let path = '/';
    this.props.history.push(path);
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
    formData.append("fname", this.state.fname);
    formData.append("lname", this.state.lname);
    formData.append("cpass", this.state.cpassword);
    formData.append("contact", this.state.contact);
    formData.append("gender", this.state.gender);
    formData.append("address", this.state.address);
    formData.append("pincode", this.state.pincode);
    const url = "http://localhost/homepage/my-app/backend/signup.php";
    axios
      .post(url, formData)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div class="signup-header">
          <h1 class="signupName">SHOPICALLY</h1>
          <h1 class="signupName2">(Shop Locally)</h1>
        </div>
        <div class="signup-form">
          <h1 className="signup-name">Signup Form</h1>
          <form className="sign-up-form">
            <label className="sign-up-label">First Name:&nbsp;
            <input type="text" name="fname" onChange={this.handleAdd} required />
            </label>
            <br/><br/>
            <label className="sign-up-label">Last Name:&nbsp;
            <input type="text" name="lname" onChange={this.handleAdd} />
            </label>
            <br/><br/>
            <label className="sign-up-label">Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="email" name="email" onChange={this.handleAdd} />
            </label>
            <br/><br/>
            <label className="sign-up-label">Address:&nbsp;&nbsp;&nbsp;
            <input type="address" name="address" onChange={this.handleAdd} />
            </label>
            <br/><br/>
            <label className="sign-up-label">Pincode:&nbsp;&nbsp;&nbsp;
            <input type="text" name="pincode" onChange={this.handleAdd} />
            </label>
            <br/><br/>
            <label className="sign-up-label">Phone no:&nbsp;&nbsp;&nbsp;
              <input type="tel" name="contact" onChange={this.handleAdd} />
            </label>
            <br/><br/>
            <label className="sign-up-label sign-up-gender">Gender:&nbsp;&nbsp;&nbsp;Male
            <input className="sign-up-gender-input"
              type="radio"
              name="gender"
              value="Male"
              onClick={this.handleAdd}
            />
            </label>
            <label className="sign-up-label sign-up-gender">
            Female
            <input className="sign-up-gender-input"
              type="radio"
              name="gender"
              value="Female"
              onClick={this.handleAdd}
            />
            </label >
            <br/><br/>
            <label className="sign-up-label">Password:&nbsp;&nbsp;&nbsp;
            <input type="password" name="password" onChange={this.handleAdd} />
            </label>
            <br/><br/>
            
            <label className="sign-up-label">Confirm:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="password" name="cpassword" onChange={this.handleAdd} />
            </label>&nbsp;
            <br/><br/>
            <input className="sign-up-submit btn btn-primary"
              id="sub"
              name="submit"
              type="submit"
              onClick={this.handleSubmit}
              value="SIGNUP"
            />{"  "}
            <br/>
            <button className="btn btn-success sign-up-button" onClick={this.routeChange}>LOGIN</button>{"  "}
            <button className="btn btn-success sign-up-button" onClick={this.accountform}>SIGNUP FOR NEW SHOP</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
