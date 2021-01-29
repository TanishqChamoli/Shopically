import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import CardsItem from '../common/CardsItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { config } from '../common/Constants'

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

            const phpurl = config.url.API_URL +"shopically/my-app/backend/searchpage.php";
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
        const phpurl = config.url.API_URL +"shopically/my-app/backend/searchpage.php";
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
            <div className="bg-search">
                <div className="searchSection">
                    <img src="logo final.png" className="header_logo" />
                    <form onSubmit={this.handleSubmit} className="header_search_form">
                        <select className="acity" name="locationSelect" value={this.state.locationSelect} onChange={this.handleChange}>
                            <option value="chd">Chandigarh</option>
                            <option value="moh">Mohali</option>
                            <option value="pun">Panchkula</option>
                        </select>
                        <select className="aitem" name="searchBySelect" value={this.state.searchBySelect} onChange={this.handleChange}>
                            <option value="shop">Shop</option>
                            <option value="product">Product</option>
                        </select>
                        <input type="text" className="searchBar" name="querySearch"  placeholder="Search" value={this.state.querySearch} onChange={this.handleChange} />
                        <button className="sButton" type="submit">Search</button>
                    </form>
                </div>
            <div className="pre-search" >
                Searched for "Gold"
            </div>
            <div className="d-flex d-flex-div">    
                <aside className="aside">
                    <h2 className="aside-h2">Filters</h2>
                    <form>
                        <ul>
                            <li>
                            <label for="colours">Choose the colours:</label>
                            <select name="colours" id="colours" multiple={true} value={this.state.value} onChange={this.handleFilterChange}>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </select>
                            </li>
                            <li>
                            <label for="brands">Choose the brands:</label>
                            <select name="brands" id="brands" multiple={true} value={this.state.value} onChange={this.handleFilterChange}>
                                <option value="adidas">Adidas</option>
                                <option value="nike">Nike</option>
                                <option value="levis">Levis</option>
                            </select>
                            </li>
                        </ul>
                    </form>
                </aside>
                <div className="main-div">
                
                        <h2 className="aside-h2">Result</h2>
                        <div className="card-displays">
                            {itemData}
                            {itemData}
                            {itemData}
                            {itemData}
                            {itemData}
                            {itemData}
                        </div>
                        </div>
                </div>  
              
           
            </div>
        );
    }
}
export default withRouter(FullSearchPage);
