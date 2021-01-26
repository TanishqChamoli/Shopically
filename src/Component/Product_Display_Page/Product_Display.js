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
              
              <img src="https://images-na.ssl-images-amazon.com/images/I/71K788r-zAL._UX569_.jpg" className="prdt_img" />
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