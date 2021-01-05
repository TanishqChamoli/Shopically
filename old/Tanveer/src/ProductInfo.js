import React from 'react';
import {
    Card, Button
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

export default class Cards extends React.Component {
    render(props) {
        return (
            <Col sm={2}>
                <Card id={this.props.id}>
                    <a style={{ cursor: 'pointer' }} href={"/product?id=" + this.props.id}>
                        <Card.Img variant="top" src={this.props.imageURL} style={{ height: '120px' }} fluid="true" />
                    </a>
                    <Card.Body>
                        <Card.Title>{this.props.productName}</Card.Title>
                        <Card.Text>{this.props.desc}</Card.Text>
                        <Card.Text>{this.props.price}</Card.Text>
                        <Button variant="primary">Buy</Button>
                        <Button variant="primary">Wishlist</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}