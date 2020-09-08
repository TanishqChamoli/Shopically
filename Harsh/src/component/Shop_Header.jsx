import React, {Component} from 'react';
import '../Style/Shop_Header.css';

class ShopHeader extends Component {
    render() {
        return(
            <div>
                <image src="logo" className="pimg"/>
                <p className="shopName" >{this.props.name}anil kapoor</p>
                <button className="sign" >Sighup/Login</button>
            </div>
        )
    }
}
export default ShopHeader;