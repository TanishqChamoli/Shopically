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
import Header from './Component/Dashboard/seller/header'
import Navbar from './Component/Dashboard/seller/navbar'
import SalesThisMonth from './Component/Dashboard/seller/salesThisMonth'
import OrdersThisMonth from './Component/Dashboard/seller/OrdersThisMonth'
import NewOrders from './Component/Dashboard/seller/NewOrders'
import TotalSales from './Component/Dashboard/seller/TotalSales'
import TotalOrders from './Component/Dashboard/seller/TotalOrders'
import NoProductDisplay from './Component/Dashboard/seller/NoProductsDisplay'
import SearchBar from './Component/Dashboard/seller/SearchBar'
// vasu
import { Contact } from './Component/Dashboard/Components/Contact'
import { About } from './Component/Dashboard/Components/About'
// not needed
// import { AccountForm } from './component/Components/AccountForm'
// import { AddProduct } from './Dashboard/Components/AddProduct'
import { Orders } from './Component/Dashboard/Components/Orders'
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
        <Route exact path="/shop" render={props =>
            <div className="App">
              <Header name="RK Clothing" />
              <Navbar />
              <SearchBar />
              <div className="card-show">
                <SalesThisMonth />
                <OrdersThisMonth />
                <NewOrders />
                <TotalSales />
                <TotalOrders />
                <NoProductDisplay />
                <About />
              </div>
            </div>
            } />

            <Route exact path="/shop/addproduct" render={props =>
            <div className="App">
              <Header name="RK Clothing" />
              <Navbar />
              <SearchBar />
              <div className="card-show">
                <AddProduct />
                <About />
              </div>
            </div>
            } />
            <Route exact path="/shop/orders" render={props =>
            <div className="App">
              <Header name="RK Clothing" />
              <Navbar />
              <SearchBar />
              <div className="card-show">
                <Orders />
                <About />
              </div>
            </div>
            } />
            
            <Route exact path="/shop/productlist" render={props =>
            <div className="App">
              <Header name="RK Clothing" />
              <Navbar />
              <SearchBar />
              <div className="card-show">
                <NoProductDisplay />
                <About />
              </div>
            </div>
            } />
            <Route exact path="/shop/owndetails" render={props =>
            <div className="App">
              <Header name="RK Clothing" />
              <Navbar />
              <SearchBar />
              <div className="card-show">
                <About />
                <Contact />
              </div>
            </div>
            } />
      </Router>
    );
  }
}

export default App;