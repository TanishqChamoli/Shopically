import React from 'react';
import CardsItem from './CardsItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default class CarouselPage extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            itemsData: []
        }
    }

    render() {

        const itemData = 
            <CardsItem id={this.state.itemsData.char_id}
                imageURL={this.state.itemsData.img}
                productName={this.state.itemsData.name}
                desc={this.state.itemsData.nickname} price={this.state.itemsData.birthday} />

        return (
            <Container>
                <Row>
                    {itemData}
                </Row>
            </Container>
        )
    }
}