import React from 'react';
import {
    Button
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../common/Card.css'
import './Buynow.css'

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    }
    handleDeleteProduct(event) {
        let oldCart = localStorage.getItem("productsInCart");
        let productId = event.target.value.toString();
        if (oldCart.match((productId+",")) != null)
        {
            let newCart=oldCart.replace(productId + ",",'');
            localStorage.setItem("productsInCart", newCart);
        }
        else if (oldCart.match((productId)) != null) {
            let newCart = oldCart.replace(productId, '');
            localStorage.setItem("productsInCart", newCart);
        }
        console.log(localStorage.getItem("productsInCart"));
        window.open("/buynow", "_self");
        event.preventDefault();
    }
    render(props) {
        return (
            <div className="buynow-prdt-card" id={this.props.id}>
                <Row>
                    <Col sm={4}>
                    <a style={{ cursor: 'pointer' }} href={"/product?id=" + this.props.id}>
                        <img className="prdt-img" src={this.props.imageURL} style={{ height: '120px' }} fluid="true" />
                    </a>
                    </Col>
                    <Col sm={8} style={{textAlign:'right'}}>
                        <h1 className="prdt-name">{this.props.productName}</h1>
                        <p className="prdt-summ">{this.props.desc}</p>
                        <p className="prdt-price">{this.props.price}</p>
                        <Button onClick={this.handleDeleteProduct.bind(this)} value={this.props.id} className="prdt-btns" variant="primary">Delete</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}