import React, { Component } from "react";
class Signup extends Component {
  state = {};
  return() {
    return window.location.reload(true);
  }
  render() {
    return (
      <div>
        <form>
          Name: <input type="text" name="name" />
          <br />
          <br />
          <br />
          Email: <input type="email" name="email" />
          <br />
          <br />
          <br />
          Phone no: <input type="tel" name="phone" />
          <br />
          <br />
          <br />
          Password: <input type="password" name="password" />
          <br />
          <br />
          <br />
          Confirm Password: <input type="password" name="password" />
          <br />
          <br />
          <br />
          <button onClick={this.return}>Go back</button>
        </form>
      </div>
    );
  }
}

export default Signup;
