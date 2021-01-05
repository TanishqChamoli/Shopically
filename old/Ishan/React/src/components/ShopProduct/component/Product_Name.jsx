import React, {Component} from 'react';

class ProductName extends Component {
     constructor(props) {
    super(props)
    
  }
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                
                <button>Remove</button>
                <button>update</button>
            </div>
        )
    }
}

export default ProductName;