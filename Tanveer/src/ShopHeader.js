import React from 'react';
import {
    Card,Button
} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

export default class Cards extends React.Component {
    render(props) {
        return (
            <Col sm={12}>
                <Card id={this.props.id}>
                    <Card.Img variant="top" src={this.props.imageURL} style={{height:'120px' }} fluid="true"/>
                    <Card.Body>
                        <Card.Title>{this.props.productName}</Card.Title>
                        <Card.Text>{this.props.desc}</Card.Text>
                        <Card.Text>{this.props.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}