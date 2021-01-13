import React, {Component} from 'react'

class Header extends Component {
    render(){
        return(
            <div className="shp-header">
                <div className="shop-name">
                    <p>
                        {this.props.name}-abc
                    </p>
                </div>
            </div>
        )
    }
}

export default Header