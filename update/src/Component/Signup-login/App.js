import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/form";
import Signup from "./components/signup";
import Forgot from "./components/forgot_pass";
import AccountForm from "./components/Accountform";
import AddProduct from "./components/addproduct"

class App extends Component {
  // 

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route exact path="/form" component={Form} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/accountform" component={AccountForm} />
            <Route exact path="/addproduct" component={AddProduct} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
