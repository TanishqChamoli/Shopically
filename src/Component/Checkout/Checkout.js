import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import "./buy.css"
import { config } from '../common/Constants'

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',useraddress:'',userpincode:'',useremail:'',usermobile:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        let formData = new FormData();
        formData.append("uid", sessionStorage.getItem("uid"));
        formData.append("productsInCart", localStorage.getItem("productsInCart"));
        const phpurl = config.url.API_URL +"shopically/my-app/backend/orderplaced.php";
        axios.post(phpurl,formData)
            .then(response => {
                if(response.data!="FAIL")
                    alert("Order Placed Succesfully");
                else
                    alert("Error Occured, try again later");
            })
            .catch(error => {
                console.log(error);
            });
        event.preventDefault();
    }
    componentDidMount() {
        const phpurl = config.url.API_URL +"shopically/my-app/backend/checkout.php";
        axios.post(phpurl,"uid="+sessionStorage.getItem("uid"))
            .then(response => {
                this.setState({
                    username: response.data["user_name"],
                    useraddress: response.data["address"],
                    userpincode: response.data["pincode"],
                    useremail: response.data["email"],
                    usermobile: response.data["mobile"],
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            // <div>
            //     <form onSubmit={this.handleSubmit}>
            //         <input type="text" name="useraddress" value={this.state.useraddress} onChange={this.handleChange} />
            //         <input type="text" name="userpincode" value={this.state.userpincode} onChange={this.handleChange} />
            //         <input type="text" name="usermobile" value={this.state.usermobile} onChange={this.handleChange} />
            //         <input type="text" name="useremail" value={this.state.useremail} onChange={this.handleChange} />
            //         <input type="submit" value="Confirm" /><br />
            //     </form>
            // </div>
            <div class="buy-main">
                <h1 class="title">Order Details</h1>
                <form className="buynowform" onSubmit={this.handleSubmit} method="post">
                    <label className="buynowlablel">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="buynowinput" value={this.state.username} type="text" ></input>
                    </label>
                    <br />
                    <label className="buynowlablel">Phone No.:&nbsp;&nbsp;
                            <input className="buynowinput" value={this.state.usermobile} type="text" ></input>
                    </label>
                    <br />
                    <label className="buynowlablel">Address: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="buynowinput" value={this.state.useraddress} type="text" ></input>
                    </label>
                    <br />
                    <label className="buynowlablel">e-mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="buynowinput" value={this.state.useremail} type="text" ></input>
                    </label>
                    <br />
                    <p>
                        Payment only cash on delivery
                        </p>
                    <button type="submit" className="btn btn-primary buynowbutton">Confirm Order</button>
                </form>
            </div>
        );
    }
}
export default withRouter(Checkout);