import React, { Component } from 'react'
export class Orders extends Component {

    Delivered()
    {

    }

    render() {
        return (
            <div className="main_screen">
                 <div class="w3-container  w3-light-gray w3-padding-64">
                    <h3 class="w3-wide w3-center">New Orders</h3>
                    {/* Loop */}
                    <div class="w3-content w3-panel w3-padding-16 w3-left-align w3-red" id="demo">
                        <h3 class="w3-text-Black">Order Name</h3>
                        <p>Order ID</p>
                        <p>Price</p>
                        <p>Date</p>
                        <p>Customer Name</p>
                        <p>Customer Address<button onClick={this.Delivered()} class="w3-btn  w3-right w3-blue">Delivered</button></p>                        
                    </div>
                     <br />
                     {/* Loop End */}
                    <h3 class="w3-wide w3-center">Orders Delivered</h3>
                    {/* Loop */}
                    <div class="w3-content w3-panel w3-left-align w3-teal">
                        <h3 class="w3-text-Black">Order Name</h3>
                        <p>Order ID</p>
                        <p>Price</p>
                        <p>Date</p>
                        <p>Customer Name</p>
                        <p>Customer Address</p>
                    </div>
                     {/* Loop End */}
                </div>                
            </div>
        )
    }
}

