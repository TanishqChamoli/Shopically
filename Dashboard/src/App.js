import React from 'react';
import './App.css';
import Image from './component/Image'
import ShopHeader from './component/Shop_Header'
import './Style/Shop_Header.css'
import ProductName from './component/Product_Name'
import ProductDetail from './component/Product_Discription'
import ShopDetail from './component/Shop_detail'
import Header from './component/seller/header'
import Navbar from './component/seller/navbar'
import SalesThisMonth from './component/seller/salesThisMonth'
import OrdersThisMonth from './component/seller/OrdersThisMonth'
import NewOrders from './component/seller/NewOrders'
import TotalSales from './component/seller/TotalSales'
import TotalOrders from './component/seller/TotalOrders'
import NoProductDisplay from './component/seller/NoProductsDisplay'
import SearchBar from './component/seller/SearchBar'
// vasu
import { Contact } from './component/Components/Contact'
import { About } from './component/Components/About'
// not needed
// import { AccountForm } from './component/Components/AccountForm'
import { AddProduct } from './component/Components/AddProduct'
import { Orders } from './component/Components/Orders'

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
