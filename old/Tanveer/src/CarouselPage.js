import React from 'react';
import CardsItem from './CardsItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';


export default class CarouselPage extends React.Component {
    constructor() {
        super()
        this.state = {
            itemsData: [],
            itemsData2: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:80/homepage/my-app/backend/homepagedata.php";
        axios.get(url)
        .then(response => {
            this.setState({
                itemsData: response.data.first,
                itemsData2: response.data.second
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        
        const itemData = this.state.itemsData.map(item => 
            <CardsItem id={item.product_id} 
            imageURL={item.product_image} 
            productName={item.product_brand} 
            desc={item.product_name} price={item.product_price} />)

        const itemData2 = this.state.itemsData2.map(item => 
            <CardsItem id={item.product_id} 
            imageURL={item.product_image} 
            productName={item.product_brand} 
            desc={item.product_name} price={item.product_price} />)
        
        return (
            <Container>
                <h2>Clothes</h2>
                <Row>
                    {itemData2}
                </Row>
                <h2>Mobiles</h2>
                <Row>
                    {itemData}
                </Row>
            </Container>
        )
    }
}