import React from 'react';
import './App.css';
import Image from './Dashboard/Image'
import ShopHeader from './Dashboard/Shop_Header'
import './Style/Shop_Header.css'
import ProductName from './Dashboard/Product_Name'
import ProductDetail from './Dashboard/Product_Discription'
import ShopDetail from './Dashboard/Shop_detail'
import Header from './Dashboard/seller/header'
import Navbar from './Dashboard/seller/navbar'
import SalesThisMonth from './Dashboard/seller/salesThisMonth'
import OrdersThisMonth from './Dashboard/seller/OrdersThisMonth'
import NewOrders from './Dashboard/seller/NewOrders'
import TotalSales from './Dashboard/seller/TotalSales'
import TotalOrders from './Dashboard/seller/TotalOrders'
import NoProductDisplay from './Dashboard/seller/NoProductsDisplay'
import SearchBar from './Dashboard/seller/SearchBar'
// vasu
import { Contact } from './Dashboard/Components/Contact'
import { About } from './Dashboard/Components/About'
// not needed
// import { AccountForm } from './component/Components/AccountForm'
import { AddProduct } from './Dashboard/Components/AddProduct'
import { Orders } from './Dashboard/Components/Orders'

// dependencies
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";

function App() {
  return (
    <Router>
            <Route exact path="/" render={props =>
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

            <Route exact path="/addproduct" render={props =>
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
            <Route exact path="/orders" render={props =>
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
            
            <Route exact path="/productlist" render={props =>
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
            <Route exact path="/owndetails" render={props =>
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

export default App;
