import React, {Component} from 'react';

class ProductName extends Component {
    render() {
        return (
            <div className="prdt_sum">
                <h2 id="prdt_name">Product Name</h2><br /><br />
                <h3 id="prdt_price">Price - Rs. </h3><br />
                <h3 id="prdt_size">Size - XL</h3><br />
                <h3 id="prdt_color">color - Black</h3><br />
                <button class="bttn">Buy now</button>&nbsp;&nbsp;&nbsp;
                <button class="bttn">Add to Cart</button>
            </div>
        )
    }
}

export default ProductName;