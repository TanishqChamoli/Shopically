import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import CardsItem from './CardsItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

class SearchItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        let formData = new FormData();
        formData.append("q", params["q"]);
        formData.append("sby", params["sby"]);
        formData.append("loc", params["loc"]);
        const phpurl = "http://localhost:80/homepage/my-app/backend/searchpage.php";
        axios.post(phpurl, formData)
            .then(response => {
                this.setState({
                    items: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });

    }
    componentDidUpdate() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        let formData = new FormData();
        formData.append("q", params["q"]);
        formData.append("sby", params["sby"]);
        formData.append("loc", params["loc"]);
        const phpurl = "http://localhost:80/homepage/my-app/backend/searchpage.php";
        axios.post(phpurl,formData)
            .then(response => {
                this.setState({
                    items: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
        
    }
    render() {
        const itemData = this.state.items.map(item =>
            <CardsItem id={item.product_id}
                imageURL={item.product_image}
                productName={item.product_brand}
                desc={item.product_name} price={item.product_price} />)
        return (
            <div>
                <Container>
                    <h2>Clothes</h2>
                    <Row>
                        {itemData}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default withRouter(SearchItems);