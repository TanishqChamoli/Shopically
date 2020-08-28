import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Contact } from './Components/Contact'
function App() {
    return ( 
    <div className = "App" >
        <Header />
        <Contact />
        <Footer />
        </div>
    );
}

export default App;