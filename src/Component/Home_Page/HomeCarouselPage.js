import React from 'react';
import ShopCard from './ShopCard';
import Header from '../Header/Header'
import axios from 'axios';
import { config } from '../common/Constants'

export default class HomeCarouselPage extends React.Component {
    constructor() {
        super()
        this.state = {
            itemsData: []
        }
    }

    componentDidMount() {
        const url = config.url.API_URL+"shopically/my-app/backend/homepagedata.php";
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
            // imageURL={item.shop_image} 
            imageURL="https://upload.wikimedia.org/wikipedia/commons/d/d8/Charity_shop_in_West_Street_%286%29_-_geograph.org.uk_-_1504815.jpg"
            shopName={item.shop_name} 
                location={item.shop_location} />)

        return (
            <div>
                <Header />
                <div className="simple-text">
                    <center>
                        Shops Available
                    </center>
                </div>
                <div className="show_cards">
                    {itemData}
                </div>
            </div>
        )
    }
}