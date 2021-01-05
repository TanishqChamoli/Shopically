import React, {Component} from 'react'
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    render() {
        return(
            <div className="btn-group-vertical">
                <Link to="/"><button type="button" className="nav-btn">Dashboard</button></Link><br></br>
                <Link to="/addproduct"><button type="button" className="nav-btn">Add Products</button></Link><br></br>
                <Link to="/orders"><button type="button" className="nav-btn">Orders</button></Link><br></br>
                <Link to="/productlist"><button type="button" className="nav-btn">Product List</button></Link><br />
                <Link to="/owndetails"><button type="button" className="nav-btn">Your Details</button></Link><br />
            </div>
        )
    }
}

export default Navbar