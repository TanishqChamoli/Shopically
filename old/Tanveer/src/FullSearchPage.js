import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import CardsItem from './CardsItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

class FullSearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], locationSelect: 'chd', searchBySelect: 'shop', querySearch: '', colours: [], brands: [] };

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
            formData.append("sby", this.state.searchBySelect);
            formData.append("loc", this.state.locationSelect);
            if (this.state.colours != null && this.state.colours != '')
                formData.append("colours", this.state.colours);
            if (this.state.brands != null && this.state.brands != '')
                formData.append("brands", this.state.brands);

            const phpurl = "http://localhost:80/homepage/my-app/backend/searchpage.php";
            axios.post(phpurl, formData)
                .then(response => {
                    if (response.data != this.state.items)
                        this.setState({ items: response.data });
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
    render() {
        const itemData = this.state.items.map(item =>
            <CardsItem key={item.id}
                id={item.id}
                imageURL={item.product_image}
                productName={item.product_name}
                desc={item.category} price={item.price} />)
        return (
            <div>
             <div className="searchSection">
                <form onSubmit={this.handleSubmit}>
                <select name="locationSelect" value={this.state.locationSelect} onChange={this.handleChange}>
                    <option value="chd">Chandigarh</option>
                    <option value="moh">Mohali</option>
                    <option value="pun">Panchkula</option>
                </select>
                <select name="searchBySelect" value={this.state.searchBySelect} onChange={this.handleChange}>
                    <option value="shop">Shop</option>
                    <option value="product">Product</option>
                </select>
                <input type="text" name="querySearch" value={this.state.querySearch} onChange={this.handleChange} />
                <input type="submit" value="Search" /><br/>

                <label for="colours">Choose the colours:</label>
                <select name="colours" id="colours" multiple={true} value={this.state.value} onChange={this.handleFilterChange}>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>

                <label for="brands">Choose the brands:</label>
                <select name="brands" id="brands" multiple={true} value={this.state.value} onChange={this.handleFilterChange}>
                    <option value="adidas">Adidas</option>
                    <option value="nike">Nike</option>
                    <option value="levis">Levis</option>
                </select>
                </form>
            </div>
            <div>
                <Container>
                    <h2>Result</h2>
                    <Row>
                        {itemData}
                    </Row>
                </Container>
            </div>
            </div>
        );
    }
}
export default withRouter(FullSearchPage);
