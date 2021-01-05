import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import CardsItem from './CardsItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_info: []
        };
    }
    componentDidMount() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        let formData = new FormData();
        formData.append("id", params["id"]);
        const phpurl = "http://localhost:80/homepage/my-app/backend/productdisplaypage.php";
        axios.post(phpurl, formData)
            .then(response => {
                this.setState({
                    product_info: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const itemData = this.state.product_info.map(item =>
            <CardsItem key={item.id}
                id={item.id}
                imageURL={item.product_image}
                productName={item.product_name}
                desc={item.category} price={item.price} />)
        return (
                <div>
                    <Container>
                        <Row>
                            {itemData}
                        </Row>
                    </Container>
                </div>
        );
    }
}
export default withRouter(ShopPage);
