import React,{Fragment} from 'react';
import {Component} from 'react'
import Logo from './Logo';
import Location from './Location';
import Search from './Search';
import User from './User'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Component } from 'react';

class header extends Component {
    render() {
        return(
            <nav className="navbar">
                <div className="flex-container">
                    <Logo />
                    <Location/>
                    <Search />
                    <User />
                </div>
            </nav>
        )
    }
}

export default header;
