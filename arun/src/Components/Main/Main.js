import React from 'react';
import './Main.css'
import Card from './Card';
import Random from './Random';
import Search from '../Header/Search'
import ShopName from './Shop-Name';
import Sidebar from './Sidebar';
 const  Main = () =>{
    return (
        <div>
            <ShopName/>
            <div className ="d-flex">
                <Random/>
                <div className="R-search">
                <Search/>
                </div>
            </div>
            <div className="side-card">
            <Sidebar/>
            <div className="d-flex">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="d-flex">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="d-flex">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="d-flex">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="d-flex">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="d-flex">
                    <Card />
                    <Card />
                    <Card />
                </div>
                </div>
    </div>
    );
 }
 export default Main;