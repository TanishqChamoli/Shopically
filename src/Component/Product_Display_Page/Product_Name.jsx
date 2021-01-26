import React, {Component} from 'react';

class ProductName extends Component {
    render() {
        return (
            <div className="prdt_sum">
                <h2 id="prdt_name">Product Name</h2><br /><br />
                <h3 id="prdt_price">Price - Rs. </h3><br />
                <h3 id="prdt_size">Size - XL</h3><br />
                <h3 id="prdt_color">color - Black</h3><br />
                <div class="btn-group">
                <button class="btn btn-success btn-lg">Buy now</button>
                <button class="btn btn-success btn-lg">Add to Cart</button>
                </div>                
            </div>
        )
    }
}

export default ProductName;