import React,{Component} from 'react';
import './App.css';
import Image from './component/Image'
import ShopHeader from './component/Shop_Header'
import './Style/Shop_Header.css'
import ProductName from './component/Product_Name'
import ProductDetail from './component/Product_Discription'
import ShopDetail from './component/Shop_detail'



class Shop extends Component {

constructor(props) {
    super(props)
    this.state = {
      products:this.props.products,
      errors: {}
    }

    /*this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)*/
  }





render(){
  console.log(this.state.products)
  return (

    <div className="App">
    
      
      <ShopHeader name={this.state.products[0].shop} />
      
       <div>
       
       {
       this.props.products.map(product=>(
        <d>
      
      <Image source={require('./'+product.scode+product.code+'.jpg')} />
      <ProductName  name={product.name} />
      <ProductDetail code={product.code+' X'+product.count} />
      <ShopDetail shopecode={product.scode} />
      
        </d>
        ))
      
     }
    </div>




</div>

    )
}

}

export default Shop
