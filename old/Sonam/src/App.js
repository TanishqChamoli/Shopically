import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/form";
import Signup from "./components/signup";
import Forgot from "./components/forgot_pass";
import AccountForm from "./components/Accountform";
// import 

class App extends Component {
  // 

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/" component={Form} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/accountform" component={AccountForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
