import React,{Fragment} from 'react';
import './Main.css';
import Card from './Card';
import Sidebar from './Sidebar';
import ShopButton from './Shop_button';
import ProductButton from './Product_button';
const main=()=>{
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="main-div">
                <div className="d-flex">
                    <ProductButton /> 
                    <ShopButton />
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