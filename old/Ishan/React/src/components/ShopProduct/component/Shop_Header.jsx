import React, {Component} from 'react';
import '../Style/Shop_Header.css';

class ShopHeader extends Component {
    constructor(props) {
    super(props)
    
  }
    render() {
        return(
            <div>
                <image src="logo" className="pimg"/>
                <p className="shopName" >{this.props.name}</p>
                <button className="sign" >Sighup/Login</button>
            </div>
        )
    }
}
export default ShopHeader;