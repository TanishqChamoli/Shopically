import React, { Component } from "react";
import axios from "axios";
class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            cpassword: ""
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
    }
    login() {
        let path = '/';
        this.props.history.push(path);
    }
    handleAdd = async (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.cpassword);
        let formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("pass", this.state.password);
        formData.append("cpass", this.state.cpassword);
        const url = "http://localhost:80/Website_backend/forgot_pass_backend.php";
        axios
            .post(url, formData)
            .then((res) => alert(res.data))
            .catch((err) => console.log(err));
    };
    render() {
        return (
            <form id="for">
                <b>CREATE NEW PASSWORD </b><br /><br />
                <input type="text" name="email" placeholder="E-mail" onChange={this.handleAdd} /><br /><br />
                {/* <input type="text" name="lname" placeholder="Last Name" onChange={this.handleAdd} /><br /><br /> */}
                <input type="password" name="pass" placeholder="Password" onChange={this.handleAdd} /><br /><br />
                <input type="password" name="cpass" placeholder="Confirm Password" onChange={this.handleAdd} /><br /><br />
                <input type="submit" name="submit" value="Create Password" onClick={this.handleSubmit} />
                <button onClick={this.login}>Go to Login</button><br /><br />
            </form>
        );
    }
}
export default Forgot;