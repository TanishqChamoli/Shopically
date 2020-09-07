import React, { Component } from "react";
import CardsHome from "./CardsHome";
import SearchHome from "./SearchHome";
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <SearchHome />
        <CardsHome />
      </React.Fragment>
    );
  }
}

export default Home;
