import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/form";
import Signup from "./components/signup";
// import 

class App extends Component {
  // 

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
