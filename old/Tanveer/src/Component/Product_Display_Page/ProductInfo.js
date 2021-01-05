import React from 'react';
import Col from 'react-bootstrap/Col';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.SaveToCart = this.SaveToCart.bind(this);
        this.openCart = this.openCart.bind(this);
    }
    SaveToCart(event) {
        let old = localStorage.getItem("productsInCart");
        let productId = event.target.value;
        if (old === null || old === '')
            localStorage.setItem("productsInCart", productId);
        else if (old.match((productId.toString())) == null)
            localStorage.setItem("productsInCart", old + "," + productId);
        console.log(localStorage.getItem("productsInCart"));
        event.preventDefault();
    }
    openCart(event) {
        let old = localStorage.getItem("productsInCart");
        let productId = event.target.value;
        if (old === null)
            localStorage.setItem("productsInCart", productId);
        else if (old.match((productId.toString())) == null)
            localStorage.setItem("productsInCart", old + "," + productId);
        console.log(localStorage.getItem("productsInCart"));
        window.open("/buynow", "_self");
        event.preventDefault();
    }

    render(props) {
        return (
            <Col sm={2}>
                <div id={this.props.id}>
                        <img variant="top" src={this.props.imageURL} style={{ height: '120px' }} fluid="true" />
                    <div>
                        <h1>{this.props.productName}</h1>
                        <p>{this.props.desc}</p>
                        <p>{this.props.price}</p>
                        <button onClick={this.openCart.bind(this)} value={this.props.id}>Buy</button>
                        <button onClick={this.SaveToCart.bind(this)} value={this.props.id}>Wishlist</button>
                    </div>
                </div>
            </Col>
        )
    }
}