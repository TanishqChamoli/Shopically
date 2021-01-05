import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import CardsItem from '../common/CardsItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './ShopDisplay.css';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], shop_info: {}, querySearch: '', colours: [], brands: [],sid:'' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleFilterChange(event) {
        this.setState({ [event.target.name]: Array.from(event.target.selectedOptions, (item) => item.value) });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.querySearch != ''){
            let formData = new FormData();
            formData.append("q", this.state.querySearch);
            formData.append("sid", this.state.sid);
            if (this.state.colours != null && this.state.colours != '')
                formData.append("colours", this.state.colours);
            if (this.state.brands != null && this.state.brands != '')
                formData.append("brands", this.state.brands);

            const phpurl = "http://localhost:80/shopically/my-app/backend/shopdisplaypage.php";
            axios.post(phpurl, formData)
                .then(response => {
                    if (response.data.products != this.state.items)
                        this.setState({
                            items: response.data.products,
                            shop_info: response.data.shop_info[0], });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
    componentDidMount() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        let formData = new FormData();
        formData.append("sid", params["id"]);
        const phpurl = "http://localhost:80/shopically/my-app/backend/shopdisplaypage.php";
        axios.post(phpurl, formData)
            .then(response => {
                this.setState({
                    items: response.data.products,
                    shop_info: response.data.shop_info[0],
                    sid: params["id"]
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
        return (
            <div>
                <div className="shop-head">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <h1>{this.state.shop_info.shop_name}</h1>
                                <p>{this.state.shop_info.shop_location}</p>
                                <p>{this.state.shop_info.owner_name}</p>
                            </Col>
                            <Col sm={6}>
                                <img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Charity_shop_in_West_Street_%286%29_-_geograph.org.uk_-_1504815.jpg" style={{ height: '120px' }} fluid="true" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col className="searchBar" sm={12}>
                            <center>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" placeholder="Search" name="querySearch" value={this.state.querySearch} onChange={this.handleChange} />
                                <button type="submit">Search</button>
                            </form>
                            </center>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <form onSubmit={this.handleFilter}>
                                <label for="colours">Colour:</label><br/>
                                <select name="colours" id="colours" multiple={true} value={this.state.value} onChange={this.handleFilterChange}>
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </select>
                                <br />
                                <label for="brands">Brand:</label><br />
                                <select name="brands" id="brands" multiple={true} value={this.state.value} onChange={this.handleFilterChange}>
                                    <option value="adidas">Adidas</option>
                                    <option value="nike">Nike</option>
                                    <option value="levis">Levis</option>
                                </select>
                                <br />
                            </form>
                        </Col>
                        <Col className="prdt-cards" sm={9}>
                            <h2>Products</h2>
                            <Row>
                                {itemData}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default withRouter(ShopPage);

//Sample Image
//{this.props.imageURL}
//https://upload.wikimedia.org/wikipedia/commons/d/d8/Charity_shop_in_West_Street_%286%29_-_geograph.org.uk_-_1504815.jpg
