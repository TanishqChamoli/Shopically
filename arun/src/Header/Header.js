import React from 'react';
import Search from './search';
import './header.css';
const Header = ()=>{
    return (
        <header class = "header">
        <nav class = "main-nav">
            <h1 class = "logo">Shopically</h1>
            
            <p class = "location">Your Location</p>
           < Search></Search>
    
        <ul class = "list">
                <li>User</li>
            </ul>
        </nav>
    </header>
    );
}
export default Header;