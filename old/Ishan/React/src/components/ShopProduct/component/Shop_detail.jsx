import React, {Component} from 'react'

class ShopDetail extends Component {
     constructor(props) {
    super(props)
    
  }
    render() {
        return (
            <div>
                <p>{this.props.scode}</p>
            </div>
        )
    }
}

export default ShopDetail