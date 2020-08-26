import React, { Component } from "react";
import Productcombine from "./combined";
class Final extends Component {
  state = {
    id: [1, 2, 3, 4],
  };
  render() {
    return (
      <React.Fragment>
        <Productcombine />
      </React.Fragment>
    );
  }
}

export default Final;
