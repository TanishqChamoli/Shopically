import React, { Component } from "react";
class Form extends Component {
  state = {};
  return() {
    return window.location.reload(true);
  }
  render() {
    return (
      <div>
        <div id="animation">
          {/* <marquee direction="right" scrollamount="35"> */}
          SHOPICALLY
          <br />
          (SHOP LOCALLY)
          {/* </marquee> */}
          <form id="form_login">
            Email: <input id="mail" type="email" name="Email" />
            <br />
            <br />
            <br />
            Password: <input id="pass" type="password" name="Password" />
            <br />
            <br />
            <br />
            <button onClick={this.return}>Go back</button>
            <input id="sub" type="submit" name="DONE !!" />
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
