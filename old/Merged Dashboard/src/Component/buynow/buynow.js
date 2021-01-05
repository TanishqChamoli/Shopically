import React from 'react';
import { withRouter } from 'react-router-dom';
import BuyCards from './BuyCards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class buynow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.handleCheckout = this.handleCheckout.bind(this);
    }
    handleCheckout(event) {
        /*const phpurl = "http://localhost:80/shopically/my-app/backend/checkforlogin.php";
        axios.get(phpurl)
            .then(response => {
                if (response.data === "UserLoggedIn"){
                    window.open("/cartpage", "_self");
                }
                else{
                    window.open("/login","_self");
                }
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });*/
        if (sessionStorage.getItem("uid")) 
            window.open("/cartpage", "_self");
        else
            window.open("/login", "_self");
        event.preventDefault();
    }
    componentDidMount() {
        let cartItems = localStorage.getItem("productsInCart");
        let formData = new FormData();
        formData.append("cartItems", cartItems);
        const phpurl = "http://localhost:80/shopically/my-app/backend/buynow.php";
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
        let emptyCart="true"
        const itemData = this.state.items.map(item =>
            <BuyCards key={item.id}
                id={item.id}
                imageURL={item.product_image}
                productName={item.product_name}
                desc={item.category} price={item.price} />)
        if(itemData.length!=0)
            emptyCart=""
        var totalPrice = this.state.items.reduce(function (sum, item) {
            return sum = sum + item.price;
        }, 0);
        return (
            <div>
                <Container>
                    <h2>Products in your Cart</h2>
                    <Row>
                        {itemData}
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <p>Total Price: ₹<span>{totalPrice}</span></p>
                        </Col>
                        <Col sm={3} className="offset-3">
                            <button type="button" onClick={this.handleCheckout.bind(this)} disabled={emptyCart}>Proceed for Payment</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default withRouter(buynow);