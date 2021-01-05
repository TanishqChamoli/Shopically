import React from "react";
import HomeCarouselPage from "./HomeCarouselPage";
import HomeSearchBar from './HomeSearchBar';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomeSearchBar />
        <HomeCarouselPage/>
      </div>
    );
  }
}

export default HomePage;