import React from 'react';
import {
    Card, Button
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './Card.css'
import { config } from '../common/Constants'

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
            <div className="prdt-card" id={this.props.id}>
                {/* <Card className="prdt-card" id={this.props.id}>
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
                </Card> */}
                <a style={{ cursor: 'pointer' }} href={"/product?id=" + this.props.id}>
                    {/* <img src={config.url.API_URL +"shopically/my-app/image/" + this.props.imageURL} className="prdt-img"/> */}
                    <img src="Product1.jpg" className="prdt-img"/>
                    <div className="card-dtls">
                    <div className="prdt-name">Name :{this.props.productName}</div>
                    <div className="prdt-btns">
                    <div className="prdt-price">Rs.{this.props.price}</div>
                    <Button type="button" onClick={this.openCart.bind(this)} value={this.props.id}  >Buy</Button>
                        <Button type="button" onClick={this.SaveToCart.bind(this)} value={this.props.id}  >Cart</Button>
                    </div>
                    </div>
                </a>
            </div>
        )
    }
}