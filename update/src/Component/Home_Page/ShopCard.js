import React from 'react';
import {
    Card,Button
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import './shopcard.css'

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <Col sm={3}>
                <a style={{
                    cursor: 'pointer',textDecoration: 'none' }} href={"/shop?id="+this.props.id}>
                    <Card className="shop-card" id={this.props.id}>
                        <Card.Img className="shop-card-img" variant="top" src={this.props.imageURL} style={{height:'120px' }} fluid="true"/>
                        <Card.Body className="shop-card-dtls">
                            <Card.Title className="shop-name">{this.props.shopName}</Card.Title>
                            <Card.Text className="shop-add">{this.props.location}</Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        )
    }
}