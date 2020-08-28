import React from 'react';
import SearchHome from './SearchHome.js';
import CardsHome from './CardsHome.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchHome />
        <CardsHome />
      </div>
    );
  }
}
export default App;
