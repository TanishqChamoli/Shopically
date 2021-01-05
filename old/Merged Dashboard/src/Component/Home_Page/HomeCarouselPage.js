import React from 'react';
import ShopCard from './ShopCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export default class HomeCarouselPage extends React.Component {
    constructor() {
        super()
        this.state = {
            itemsData: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:80/shopically/my-app/backend/homepagedata.php";
        axios.get(url)
        .then(response => {
            this.setState({
                itemsData: response.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        
        const itemData = this.state.itemsData.map(item => 
            <ShopCard id={item.id} 
            imageURL={item.shop_image} 
            shopName={item.shop_name} 
                location={item.shop_location} />)

        return (
            <Container>
                <div className="simple_text">
                    <center>
                        Shops Available
                    </center>
                </div>
                <Row className="show_cards">
                    {itemData}
                </Row>
            </Container>
        )
    }
}