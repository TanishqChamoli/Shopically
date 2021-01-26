import React, {Component} from 'react';
import "logo.svg"

class ShopHeader extends Component {
    render() {
        return(
            <div className="Shop_Header">
                {/* <image src="polo_shirt.png" className="pimg" alt="..."/> */}
                <p className="shopName" >{this.props.name}Shopically Clothings</p>
            </div>
        )
    }
}
export default ShopHeader;