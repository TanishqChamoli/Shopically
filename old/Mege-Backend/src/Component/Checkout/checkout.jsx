import React, { Component } from "react";

class Checkout extends Component {
  state = {};
  total = () => {
    var x = document.getElementsByClassName("cost");
    var y = document.getElementsByClassName("quantity");
    var i;
    var sum = 0;
    for (i = 0; i < x.length; i++) {
      sum += Number(x[i].textContent) * Number(y[i].textContent);
    }
    document.getElementById("sum").textContent = sum;
    return sum;
  };
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-outline-dark m-2" onClick={this.total}>
          Calculate Total
        </button>
        <button className="btn btn-outline-warning m-2">Checkout</button>
      </React.Fragment>
    );
  }
}

export default Checkout;
