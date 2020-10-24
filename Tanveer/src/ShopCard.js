import React from 'react';
import {
    Card,Button
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <Col sm={2}>
                <a style={{ cursor: 'pointer' }} href={"/shop?id="+this.props.id}>
                    <Card id={this.props.id}>
                        <Card.Img variant="top" src={this.props.imageURL} style={{height:'120px' }} fluid="true"/>
                        <Card.Body>
                            <Card.Title>{this.props.shopName}</Card.Title>
                            <Card.Text>{this.props.location}</Card.Text>
                        </Card.Body>
                    </Card>
                </a>
            </Col>
        )
    }
}