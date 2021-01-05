import React, { Component } from 'react'

export class AddProduct extends Component {
    render() {
        return (
            <div>
                 < div class = "w3-container w3-card-4 w3-light-gray w3-padding-64" >
                    <div class="w3-container w3-blue">
                        <h2>Add Product</h2>
                    </div>
                        <form class="w3-container"><br />
                            <label>Product Name</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Caategory</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Phone no.</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Tag</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Price</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Size</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Fit</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Colour</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>FIbre</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Sleeve Length</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <button class="w3-btn w3-blue">Add</button><br />
                        </form>
                    </div>              
            </div>
        )
    }
}

export default AddProduct
