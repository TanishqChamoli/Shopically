import React from 'react';
import {
    Card, Button
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './Card.css'

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.SaveToCart = this.SaveToCart.bind(this);
        this.openCart = this.openCart.bind(this);
    }
    SaveToCart(event) {
        let old=localStorage.getItem("productsInCart");
        let productId = event.target.value;
        if(old===null || old==='')
            localStorage.setItem("productsInCart", productId);
        else if (old.match((productId.toString())) == null)
            localStorage.setItem("productsInCart", old + "," + productId);
        console.log(localStorage.getItem("productsInCart"));
        event.preventDefault();
    }
    openCart(event) {
        let old=localStorage.getItem("productsInCart");
        let productId = event.target.value;
        if (old === null || old === '')
            localStorage.setItem("productsInCart",productId);
        else if (old.match((productId.toString()))==null)
            localStorage.setItem("productsInCart", old+","+productId);
        console.log(localStorage.getItem("productsInCart"));
        window.open("/buynow", "_self");
        event.preventDefault();
    }
    render(props) {
        return (
            <Col xs={6} sm={4} md={3}>
                <Card className="prdt-card" id={this.props.id}>
                    <a style={{ cursor: 'pointer' }} href={"/product?id=" + this.props.id}>
                        <Card.Img className="prdt-img" variant="top" src={this.props.imageURL} style={{ height: '120px' }} fluid="true" />
                    </a>
                    <Card.Body>
                        <Card.Title className="prdt-name">{this.props.productName}</Card.Title>
                        <Card.Text className="prdt-summ">{this.props.desc}</Card.Text>
                        <Card.Text className="prdt-price">{this.props.price}</Card.Text>
                        <Button onClick={this.openCart.bind(this)} value={this.props.id} className="prdt-btns" variant="primary">Buy</Button>
                        <Button onClick={this.SaveToCart.bind(this)} value={this.props.id} className="prdt-btns" variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}