import React, { Component } from "react";
// import Product from "./productDetails";
import Counter from "./counter";
import "bootstrap/dist/css/bootstrap.css";

class Productcombine extends Component {
  render(props) {
    const w = "60%";
    return (
      <React.Fragment>
        <div className="card mb-3 row" style={{ width: w }}>
          <div className="row no-gutters justify-content-between">
            <div className="col-md-4">
              <img
                className="img-thumbnail"
                alt=".."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.productName}</h5>
                <p className="card-text">{this.props.desc}</p>
                <p className="card-text">{this.props.shopName}</p>
                <strong>
                  <p className="card-text ">Price</p>
                </strong>
                <p className="cost">{this.props.price}</p>
              </div>
            </div>
          </div>
        <Counter className="col" style={{ maxWidth: "40%" }} />
      </div>
      </React.Fragment>
    );
  }
}
export default Productcombine;
