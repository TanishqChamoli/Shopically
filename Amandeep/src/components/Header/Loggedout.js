import React from 'react';
import './Header.css';
const Loggedout=(props)=>{
    return (
        <ul className="navbar_ul">
            <li className="navbar_ul_li">Login</li>
            <li className="navbar_ul_li">Signup</li>
        </ul>
    );
};

export default Loggedout;