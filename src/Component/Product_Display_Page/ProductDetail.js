import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { config } from '../common/Constants'
import single from '../../single.jpg'
import second_img from '../../second_pic.jpg'
import third_img from '../../third_pic.jpg'
class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_info: {}
        };
        this.SaveToCart = this.SaveToCart.bind(this);
        this.openCart = this.openCart.bind(this);
    }
    componentDidMount() {
        let url = this.props.location.search;
        let params = queryString.parse(url);
        let formData = new FormData();
        formData.append("id", params["id"]);
        const phpurl = config.url.API_URL +"shopically/my-app/backend/productdisplaypage.php";
        axios.post(phpurl, formData)
            .then(response => {
                this.setState({
                    product_info: response.data[0]
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    SaveToCart(event) {
        let old = localStorage.getItem("productsInCart");
        let productId = event.target.value;
        if (old === null || old === '')
            localStorage.setItem("productsInCart", productId);
        else if (old.match((productId.toString())) == null)
            localStorage.setItem("productsInCart", old + "," + productId);
        console.log(localStorage.getItem("productsInCart"));
        event.preventDefault();
    }
    openCart(event) {
        let old = localStorage.getItem("productsInCart");
        let productId = event.target.value;
        if (old === null)
            localStorage.setItem("productsInCart", productId);
        else if (old.match((productId.toString())) == null)
            localStorage.setItem("productsInCart", old + "," + productId);
        console.log(localStorage.getItem("productsInCart"));
        window.open("/buynow", "_self");
        event.preventDefault();
    }
    render() {
        return (
                <div  className="prdt_img_detail">
                <div className="sm-prdt-img-container">
                    <img className="sm-prdt-img" src={single} />
                    <img className="sm-prdt-img" src={second_img} />
                    <img className="sm-prdt-img" src={third_img} />
                </div>
                <img className="prdt_img" src={single} />
                {/* <img className="prdt_img" src={config.url.API_URL +"shopically/my-app/image/"+this.state.product_info.product_image}  fluid="true" /> */}
                    <div className="prdt_sum">
                        <h1 className="prdt_name">{this.state.product_info.productName}</h1><br /><br />
                        <p className="prdt_details">{this.state.product_info.desc}</p>
                        <h3 id="prdt_price">{this.state.product_info.price}</h3>
                        <button onClick={this.openCart.bind(this)} value={this.state.product_info.id}>Buy</button>
                        <button onClick={this.SaveToCart.bind(this)} value={this.state.product_info.id}>Add to Cart</button>
                    </div>  
                </div>
        );
    }
}
export default withRouter(ShopPage);
//https://upload.wikimedia.org/wikipedia/commons/d/d8/Charity_shop_in_West_Street_%286%29_-_geograph.org.uk_-_1504815.jpg
//{this.state.product_info.imageURL}