import React from 'react';
import './App.css';
import Image from './component/Image'
import ShopHeader from './component/Shop_Header'
import './Style/Shop_Header.css'
import ProductName from './component/Product_Name'
import ProductDetail from './component/Product_Discription'
import ShopDetail from './component/Shop_detail'

function App() {
  return (
    <div className="App">
      <ShopHeader name="" />
      <Image />
      <ProductName />
      <ProductDetail />
      <ShopDetail />
    </div>
  );
}

export default App;
