import React, { Component } from "react";
import Productcombine from "./combined";
// import axios from 'axios';
class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: []
    };
  }
  componentDidMount() {
    const phpurl = "http://localhost:80/homepage/my-app/backend/cartpage.php";
    fetch(phpurl)
    .then(response => response.json())
    .then(data =>{ 
      this.setState({
        items:data,
      })  
      }
    )
  }

  Signup() {
    console.log("Function is called");
  }
  render() {
    console.log(this.state.items[0])
    const itemData = this.state.items.map(item =>
      <Productcombine id={item.product_id}
          imageURL={item.product_image}
          productName={item.product_name}
          desc={item.product_description} price={item.price} />)
    return (
      <React.Fragment>
        {itemData}
      </React.Fragment>
    );
  }
}

export default Final;
