import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import ShopPage from './ShopPage';
import ProductPage from './ProductPage';
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
    function Shop() {
      return (
        <ShopPage />
      );
    }
    function Product() {
      return (
        <ProductPage />
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
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
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