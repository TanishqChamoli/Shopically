import React, { Component } from 'react';
import './App.css';
import HomePage from './Component/Home_Page/HomePage';
import SearchPage from './Component/Search_Page/Main';
import ProductDisplay from './Component/Product_Display_Page/Product_Display'
import ShopDisplay from './Component/Shop_Display_Page/Main'
import Final from './Component/Checkout/productFinal'
import Form from './Component/Signup-login/components/form'
import Signup from './Component/Signup-login/components/signup'
import Forgot from './Component/Signup-login/components/forgot_pass'
import AccountForm from './Component/Signup-login/components/Accountform'
import Buynow from './Component/buynow/buy'
import AddProduct from "./Component/Signup-login/components/addproduct"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  render() {
    function Home() {
      return (
        <div>
          <HomePage/>
        </div>
      );
    }
    function Search() {
      return (
        <SearchPage />
      );
    }
    function Product() {
      return (
        <ProductDisplay />
      );
    }
    function Shop() {
      return (
        <ShopDisplay />
      );
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route exact path="/cartpage" component={Final} />
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Form />
            </Route>
            <Route path="/forgot">
              <Forgot />
            </Route>
            <Route path="/accountform">
              <AccountForm />
            </Route>
            <Route path="/buynow">
              <Buynow/>
            </Route>
            <Route exact path="/addproduct" component={AddProduct} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


/*state={
text:""
};
handleAdd= async e=>{
await this.setState({
  text:e.target.value
})
}
handleSubmit=e=>{
e.preventDefault();
console.log(this.state.text);
let formData=new FormData();
formData.append("text",this.state.text);
const url="http://localhost:80/homepage/my-app/backend/";
axios.post(url,formData)
.then(res=>console.log(res.data))
.catch(err=>console.log(err));
}
render(){
return(
  <div className="App-header">
    <input type="text" id="text" onChange={this.handleAdd}/>
    <button type="submit" id="submit" onClick={this.handleSubmit}>Save</button>
  </div>
);
}*/
