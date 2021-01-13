import React, { Component } from 'react'
import axios from "axios";
import './Accountform.css'
import { config } from '../common/Constants'

export class AccountForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            gender: "",
            phone: "",
            email: "",
            shop_name: "",
            shop_address: "",
            city:"",
            state:"",
            shop_phone: "",
            mobile: "",
            shop_pincode: "",
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAdd = async (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("fname", this.state.fname);
        formData.append("lname", this.state.lname);
        formData.append("gender", this.state.gender);
        formData.append("phone", this.state.phone);
        formData.append("email", this.state.email);
        formData.append("shop_name", this.state.shop_name);
        formData.append("shop_address", this.state.shop_address);
        formData.append("shop_phone", this.state.shop_phone);
        formData.append("mobile", this.state.mobile);
        formData.append("shop_pincode", this.state.shop_pincode);
        formData.append("city", this.state.city);
        formData.append("state", this.state.state);
        const url = config.url.API_URL +"shopically/my-app/backend/shop_signup.php";
        axios
            .post(url, formData)
            .then((res) => alert(res.data))
            .catch((err) => console.log(err));
    };
    render() {
        return (
            <div>
                <div class="signup-header">
                    <h1 class="signupName">SHOPICALLY</h1>
                    <h1 class="signupName2">(Shop Locally)</h1>
                </div>
                <div className="account-form-div">
                    <h1>Account Details</h1>
                    <br/>
                    <form className="account-form">
                        <label className="account-label">First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  type="text" name="fname" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label">Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  type="text" name="lname" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label account-gender">Gender:&nbsp;&nbsp;&nbsp;Male
                            <input className="account-gender-input"
                            type="radio"
                            name="gender"
                            value="Male"
                            onClick={this.handleAdd}
                            />
                        </label>
                        <label className="account-label account-gender">
                        Female
                            <input className="account-gender-input"
                            type="radio"
                            name="gender"
                            value="Female"
                            onClick={this.handleAdd}
                            />
                        </label >
                        <br/><br/>
                        <label className="account-label">Phone no.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  type="text" name="mobile" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  type="text" name="email" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label">Shop Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  type="text" name="shop_name" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label">Shop Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  type="text" name="shop_address" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label">Shop Phone no.&nbsp;&nbsp;
                            <input  type="text" name="shop_phone" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label">City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  type="text" name="city" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label">State&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  type="text" name="state" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label">Shop Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input  type="text" name="shop_address" onChange={this.handleAdd} />
                        </label><br /><br />
                        <label className="account-label">Shop Pincode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" name="shop_pincode" onChange={this.handleAdd} />
                        </label><br /><br />
                        {/* <button class="w3-btn w3-blue">Register</button><br /> */}
                        <input className="btn btn-success" type="submit" name="submit" onClick={this.handleSubmit} value="New shop register" />
                    </form>
                </div> 
            </div>
        )
    }
}

export default AccountForm
