import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <p className="quantity" style={{ padding: "20px" }}>
          {this.formatCount()}
        </p>
        <br />
        <div style={{ position: "absolute", right: "0px" }}>
          <button
            className="btn-sm  btn-primary m-2"
            onClick={this.doHandleIncrement}
          >
            Increment
          </button>
          <button className="btn-sm  btn-primary m-2" onClick={this.decrement}>
            Decremnet
          </button>
          <button className="btn-sm  btn-danger m-2" onClick={this.toDelete}>
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
  formatCount() {
    return this.state.count === 0 ? 0 : this.state.count;
  }
  doHandleIncrement = () => {
    this.increment({ id: 1 });
  };
  increment = (product) => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };
  // under const.
  toDelete = () => {
    console.log("Delete has been called");
  };
}

export default Counter;
