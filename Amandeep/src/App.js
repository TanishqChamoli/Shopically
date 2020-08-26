import React , {Component} from 'react';
import './App.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
class app extends Component{
  render(){
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  }

export default app;
