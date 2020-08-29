import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Checkout from "./componets/checkout";
import Final from "./componets/productFinal";
ReactDOM.render(<Checkout />, document.getElementById("checkout"));
ReactDOM.render(<Final />, document.getElementById("product_details"));
