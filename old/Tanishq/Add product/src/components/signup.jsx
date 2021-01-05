import axios from "axios";
import React, { Component } from "react";
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
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAdd = async (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.fname);
    console.log(this.state.lname);
    console.log(this.state.contact);
    console.log(this.state.password);
    console.log(this.state.cpassword);
    console.log(this.state.gender);
    let formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("pass", this.state.password);
    formData.append("fname", this.state.fname);
    formData.append("lname", this.state.lname);
    formData.append("cpass", this.state.cpassword);
    formData.append("contact", this.state.contact);
    formData.append("gender", this.state.gender);
    const url = "http://localhost:80/Website_backend/signup_backend.php";
    axios
      .post(url, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <form>
          First Name:{" "}
          <input type="text" name="fname" onChange={this.handleAdd} required />
          <br />
          <br />
          <br />
          Last Name:{" "}
          <input type="text" name="lname" onChange={this.handleAdd} />
          <br />
          <br />
          <br />
          Email: <input type="email" name="email" onChange={this.handleAdd} />
          <br />
          <br />
          <br />
          Phone no:{" "}
          <input type="tel" name="contact" onChange={this.handleAdd} />
          <br />
          <br />
          <br />
          Gender : Male
          <input
            type="radio"
            name="gender"
            value="Male"
            onClick={this.handleAdd}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Female"
            onClick={this.handleAdd}
          />
          <br />
          <br />
          <br />
          Password:{" "}
          <input type="password" name="password" onChange={this.handleAdd} />
          <br />
          <br />
          <br />
          Confirm Password:{" "}
          <input type="password" name="cpassword" onChange={this.handleAdd} />
          <br />
          <br />
          <br />
          <input
            id="sub"
            name="submit"
            type="submit"
            onClick={this.handleSubmit}
            value="Login"
          />
        </form>
      </div>
    );
  }
}

export default Signup;
