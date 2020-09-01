import React, {Component} from 'react'

class ProductDetail extends Component {
     constructor(props) {
    super(props)
    
  }

    render() {
        return (
            <div>
                <p>{this.props.code}</p>
            </div>
        )
    }
}

export default ProductDetail