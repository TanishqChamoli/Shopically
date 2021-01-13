import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import './ProductPage.css';
import Header from '../Header/Header'
import { config } from '../common/Constants'

class ProductPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="Shop_Header">
                    {/* <image src="polo_shirt.png" className="pimg" alt="..."/> */}
                    <p className="shopName" >{this.props.name}Shopically Clothings</p>
                </div>
                <br />
                <ProductDetail />
                <br />
            <br />
              <div className="dtls">
              <div class="product-details">
            <h1 class="title">Product Details</h1><br />
            <table class="product-table">
            </table>
          </div>
               
          <div class="shop-details">
            <h1 class="title">Shop Details</h1>
            <br />
            <table class="shop-table">
            </table>
          </div>
              </div>
            </div>
        );
    }
}
export default withRouter(ProductPage);