import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import CardsItem from "./CardsItem";

class App extends Component {
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
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={CardsItem} />
      </Router>
    );
  }
}

export default App;
