import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Contact } from './Components/Contact'
import { About } from './Components/About'
import { AccountForm } from './Components/AccountForm'
import { AddProduct } from './Components/AddProduct'
import { Orders } from './Components/Orders'
function App() {
    return ( 
    <div className = "App" >
        <Header />
        <Orders />
        <AccountForm />
        <AddProduct />
        <About />
        <Contact />
        <Footer />
        </div>
    );
}

export default App;
