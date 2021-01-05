import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import CardsItem from './CardsItem';
import ShopHeader from './ShopHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            shop_info: []
        };
    }
    componentDidMount() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        let formData = new FormData();
        formData.append("id", params["id"]);
        const phpurl = "http://localhost:80/homepage/my-app/backend/shopdisplaypage.php";
        axios.post(phpurl, formData)
            .then(response => {
                this.setState({
                    items: response.data.products,
                    shop_info: response.data.shop_info
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const itemData = this.state.items.map(item =>
            <CardsItem key={item.id}
                id={item.id}
                imageURL={item.product_image}
                productName={item.product_name}
                desc={item.category} price={item.price} />)

        const shopData = this.state.shop_info.map(item =>
            <ShopHeader key={item.shop_name}
                id={item.shop_name}
                imageURL={item.shop_image}
                productName={item.shop_name}
                desc={item.shop_location} price={item.owner_name} />)
        return (
                <div>
                    <Container>
                        <Row>
                            {shopData}
                        </Row>
                        <h2>Products</h2>
                        <Row>
                            {itemData}
                        </Row>
                    </Container>
                </div>
        );
    }
}
export default withRouter(ShopPage);
