/*this is a shop display page
make this function a class and pass the shop id in the constructor and retrieve the products of this shop on this page and show them using cards
Reminder-cards of this directory will not be used
filter menu of this shop will contain only those thags that are available in the shop
infinite loop will be used here too*/

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
            <div>
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
    </div>
    );
 }
 export default Main;
