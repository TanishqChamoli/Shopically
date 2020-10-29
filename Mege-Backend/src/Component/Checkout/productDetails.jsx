import React, { Component } from "react";
class Product extends Component {
  state = {
    imageURL: "http://localhost:3000/Cartpage.jpeg",
  };

  render() {
    console.log(this.props);
    const w = "60%";
    return (
      <React.Fragment>
        <div className="card mb-3 row" style={{ width: w }}>
          <div className="row no-gutters justify-content-between">
            <div className="col-md-4">
              <img
                className="img-thumbnail"
                src={this.state.imageURL}
                alt=".."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.productName}</h5>
                <p className="card-text">{this.props.shopName}</p>
                <strong>
                  <p className="card-text ">Price</p>
                </strong>
                <p className="cost">{this.props.price}</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
