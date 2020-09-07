import React, { Component } from 'react'
import axios from "axios";
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
            shop_phone: "",
            shop_type: "",
            shop_pincode: ""
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.forgotPassword = this.forgotPassword.bind(this);
        // this.signup = this.signup.bind(this);
    }
    handleAdd = async (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.fname);
        console.log(this.state.lname);
        console.log(this.state.gender);
        console.log(this.state.phone);
        console.log(this.state.email);
        console.log(this.state.shop_name);
        console.log(this.state.shop_address);
        console.log(this.state.shop_phone);
        console.log(this.state.shop_type);
        console.log(this.state.shop_pincode);
        let formData = new FormData();
        formData.append("fname", this.state.fname);
        formData.append("lname", this.state.lname);
        formData.append("gender", this.state.gender);
        formData.append("phone", this.state.phone);
        formData.append("email", this.state.email);
        formData.append("shop_name", this.state.shop_name);
        formData.append("shop_address", this.state.shop_address);
        formData.append("shop_phone", this.state.shop_phone);
        formData.append("shop_type", this.state.shop_type);
        formData.append("shop_pincode", this.state.shop_pincode);
        const url = "http://localhost:80/Website_backend/account_form_backend.php";
        axios
            .post(url, formData)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };
    render() {
        return (
            <div>
                < div className="w3-container w3-card-4 w3-light-gray w3-padding-64" >
                    <div className="w3-container w3-blue">
                        <h2>Account Details</h2>
                    </div>
                    <form className="w3-container"><br />
                        <label>First Name</label><br /><br />
                        <input className="w3-input" type="text" name="fname" onChange={this.handleAdd} /><br />
                        <label>Last Name</label><br /><br />
                        <input className="w3-input" type="text" name="lname" onChange={this.handleAdd} /><br />
                        <label>Gender</label><br /><br />
                        <input className="w3-radio w3-white" type="radio" name="gender" value="male" onChange={this.handleAdd} />
                        <label>&nbsp;Male&nbsp;&nbsp;</label>
                        <input className="w3-radio w3-white" type="radio" name="gender" value="female" onChange={this.handleAdd} />
                        <label>&nbsp;Female</label><br /><br />
                        <label>Phone no.</label><br /><br />
                        <input className="w3-input" type="text" name="phone" onChange={this.handleAdd} /><br />
                        <label>Email</label><br /><br />
                        <input className="w3-input" type="text" name="email" onChange={this.handleAdd} /><br />
                        <label>Shop Name</label><br /><br />
                        <input className="w3-input" type="text" name="shop_name" onChange={this.handleAdd} /><br />
                        <label>Shop Address</label><br /><br />
                        <input className="w3-input" type="text" name="shop_address" onChange={this.handleAdd} /><br />
                        <label>Shop Phone no.</label><br /><br />
                        <input className="w3-input" type="text" name="shop_phone" onChange={this.handleAdd} /><br />
                        <label>Shop Type</label><br /><br />
                        <input className="w3-input" type="text" name="shop_type" onChange={this.handleAdd} /><br />
                        <label>Shop Picncode</label><br /><br />
                        <input className="w3-input" type="text" name="shop_pincode" onChange={this.handleAdd} /><br />
                        {/* <button class="w3-btn w3-blue">Register</button><br /> */}
                        <input type="submit" name="submit" onClick={this.handleSubmit} value="New shop register" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AccountForm
