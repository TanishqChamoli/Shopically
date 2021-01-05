import React from "react";
import CarouselPage from "./CarouselPage";
import SearchHome from './SearchHome';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchHome />
        <CarouselPage/>
      </div>
    );
  }
}

export default HomePage;