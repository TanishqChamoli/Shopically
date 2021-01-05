/*This is the search page main component
when product button is clicked then the cards should show products
and if shop button is clicked the shop info should be retrieved from the database.
Try to apply the infinite loop of product retrieval as discussed
side filter has been discussed in side bar component.
Hint:- you can retrieve the information in this file for the card and apply a loop in which different productID are passed it as attribute in the card tag
*/


import React,{Fragment} from 'react';
import './Main.css';
import Card from './Card';
import Sidebar from './Sidebar';
import ShopButton from './Shop_button';
import ProductButton from './Product_button';
const main=()=>{
    return (
        <div className="d-flex">
            <Sidebar />// the side filter component
            <div className="main-div">
                <div className="d-flex">
                    <ProductButton /> //the product button
                    <ShopButton /> //the shop button
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
                <div className="d-flex">
                    <Card />
                    <Card />
                    <Card />
                </div>
                
            </div>
        </div>
    );
}
export default main;
