import React from 'react';
import './ShopDisplay.css';
const ShopName = () =>{
    return (
            <div class="shop-head">
              <div class="shop-img">
                <img src="logo512.png" className="shopImg"  />
              </div>
              <div className="shop-detail">
                <h1 class="display-4">Shopically Clothing</h1>
                <p class="lead">RATING  - *****</p>
                <p class = "lead">This shop deals with every type of clothes</p>
              </div>
            </div>              
    );
}
export default ShopName;