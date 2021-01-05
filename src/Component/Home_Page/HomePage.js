import React from "react";
import HomeCarouselPage from "./HomeCarouselPage";
import HomeSearchBar from './HomeSearchBar';
import './home_page.css';

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