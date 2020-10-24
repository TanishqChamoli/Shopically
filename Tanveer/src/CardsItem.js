import React from 'react';
import {
    Card,Button
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './Card.css'

export default class Cards extends React.Component {
    render(props) {
        return (
            <Col sm={3}>
                <Card className="prdt-card" id={this.props.id}>
                    <a style={{ cursor: 'pointer' }} href={"/product?id=" + this.props.id}>
                        <Card.Img className="prdt-img" variant="top" src={this.props.imageURL} style={{height:'120px' }} fluid="true"/>
                    </a>
                    <Card.Body>
                        <Card.Title className="prdt-name">{this.props.productName}</Card.Title>
                        <Card.Text className="prdt-summ">{this.props.desc}</Card.Text>
                        <Card.Text className="prdt-price">{this.props.price}</Card.Text>
                        <Button className="prdt-btns" variant="primary">Buy</Button>
                        <Button className="prdt-btns" variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}