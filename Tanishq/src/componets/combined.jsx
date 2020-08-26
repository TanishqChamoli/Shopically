import React, { Component } from "react";
import Product from "./productDetails";
import Counter from "./counter";
import "bootstrap/dist/css/bootstrap.css";

class Productcombine extends Component {
  state = {
    items: [
      { price: 1000, shopName: "A", productName: "Pants" },
      { price: 820, shopName: "B", productName: "Shirt" },
      { price: 600, shopName: "C", productName: "Jeans" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {/* for loop to be inserted here */}
        {this.state.items.map((item) => (
          <div className="row" style={{ height: "15%", margin: "15px" }}>
            <Product
              price={item.price}
              shopName={item.shopName}
              productName={item.productName}
              className="col-6"
              style={{ maxWidth: "60%" }}
            />
            <Counter className="col" style={{ maxWidth: "40%" }} />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Productcombine;
