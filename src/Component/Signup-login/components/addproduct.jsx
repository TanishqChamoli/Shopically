import React, { Component } from "react";
import axios from "axios";

export class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      brand:"",
      category: "",
      price: "",
      tag: "",
      color: "",
      size: "",
      material: "",
      product_description:""
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
    formData.append("productname", this.state.productname);
    formData.append("brand", this.state.brand);
    formData.append("price", this.state.price);
    formData.append("category", this.state.category);
    formData.append("size", this.state.size);
    formData.append("color", this.state.color);
    formData.append("tag", this.state.tag);
    formData.append("material", this.state.material);
    formData.append("product_description", this.state.product_description);
    const url = "http://localhost/homepage/my-app/backend/addproduct.php";
    axios
      .post(url, formData)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="main_screen">
        <div>
          <div>
            <h2>Add Product</h2>
          </div>
          <form className="add_prdt_form">
            <br />
            <label>Product Name</label>
            <br />
          
            <input type="text" name="productname" onChange={this.handleAdd} />
            <br />
            <label>Brand</label>
            <br />
            
            <input type="text" name="brand" onChange={this.handleAdd} />
            <br />
            <label>Category</label>
            <br />
            
            <input type="text" name="category" onChange={this.handleAdd} />
            <br />
            <label>Price</label>
            <br />
           
            <input type="text" name="price" onChange={this.handleAdd} />
            <br />
            <label>Tag</label>
            <br />
           
            <input type="text" name="tag" onChange={this.handleAdd} />
            <br />
            <label>Colour</label>
            <br />
            
            <input type="text" name="color" onChange={this.handleAdd} />
            <br />
            <label>Size</label>
            <br />
           
            <input type="text" name="size" onChange={this.handleAdd} />
            <br />         
            <label>Material</label>
            <br />
           
            <input type="text" name="material" onChange={this.handleAdd} />
            <br />
            <label>Product Description</label>
            <br />
            
            <input type="text" name="product_description" onChange={this.handleAdd} />
            <br />
            <input
              id="sub"
              name="submit"
              type="submit"
              onClick={this.handleSubmit}
              value="Add Product"
            />
            <br />
          </form>
        </div>
      </div>
    );
  }
}

export default AddProduct;
