import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  render(){
    return (<div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
  }
    
}

export default App;
