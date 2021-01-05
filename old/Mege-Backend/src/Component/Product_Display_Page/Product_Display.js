import React, {Component} from 'react'
import Image from './Image'
import ShopHeader from './Shop_Header'
import ProductName from './Product_Name'
import ProductDetail from './Product_Discription'
import ShopDetail from './Shop_detail'
import Header from '../Header/Header'
import './Product_Display.css'
import '../Header/Header.css'
class ProductDisplay extends Component {
    render() {
        return (
          <div class="product">
            <Header />
            <ShopHeader name="" />
            <br />
            <div className="prdt_img_detail">
              <img src="polo_shirt.png" className="prdt_img" />
              {/* <Image src="logo512.png"/> */}
              <ProductName />
            </div>
            <br />
            <br />
              <div className="dtls">
                <ProductDetail />
                <ShopDetail />
              </div>
            <br />
          </div>
        );
    }
}

export default ProductDisplay