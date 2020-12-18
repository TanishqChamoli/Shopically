import React, { Component } from 'react';
import './App.css';
import HomePage from './Component/Home_Page/HomePage';
import SearchPage from './Component/Search_Page/SearchPage';
import ProductDisplay from './Component/Product_Display_Page/ProductPage'
import ShopDisplay from './Component/Shop_Display_Page/ShopPage'
import CheckoutPage from './Component/Checkout/CheckoutPage'
import Form from './Component/Signup-login/components/form'
import Signup from './Component/Signup-login/components/signup'
import Forgot from './Component/Signup-login/components/forgot_pass'
import AccountForm from './Component/Signup-login/components/Accountform'
import Buynow from './Component/buynow/buy'
import AddProduct from "./Component/Signup-login/components/addproduct"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/product">
              <ProductDisplay />
            </Route>
            <Route path="/shop">
              <ShopDisplay />
            </Route>
            <Route path="/cartpage">
              <CheckoutPage/>
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Form />
            </Route>
            <Route path="/forgot">
              <Forgot />
            </Route>
            <Route path="/accountform">
              <AccountForm />
            </Route>
            <Route path="/buynow">
              <Buynow/>
            </Route>
            <Route exact path="/addproduct" component={AddProduct} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;