import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { location,loc } from './UserFunctions'
import Shop from './ShopProduct/Shop'


 function Decide(props){


  if (props.type=='Shop Owner'){

      return (<Shop products={props.name.state.products} />)
  }

else{

  return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{props.name.state.first_name}</td>
              </tr>
              
              <tr>
                <td>Email</td>
                <td>{props.name.state.date}</td>
              </tr>
            
            

            

            </tbody>
          </table>
        </div>
      </div>


    )

}

  }


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      present_location: {},
      products:[]
    }

    this.getlocation=this.getlocation.bind(this)
    this.sendposition=this.sendposition.bind(this)
     //this.decide=this.decide.bind(this)
  }

  sendposition(position){
    this.setState({

    present_location: location(position)
  })
  
  }
  
  getlocation(){

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.sendposition)
    }
    else{


    }
  }

  

 



  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    
    



    this.setState({
      first_name: decoded.identity.data['name'],
      //last_name: decoded.identity.last_name,
      date: decoded.identity.data['register'],
      type:decoded.identity.types,
      orders:decoded.identity.data['orders'],
      products:decoded.identity.data['products']

    })
  
     /*if (this.state.type!='Shop Owner'){
     this.getlocation()
     //console.log(this.present_location)
     loc(m).then(res=>{


       const tlist = jwt_decode(res)


       this.setState({

       products: tlist.identity.products  })

     })

   }*/

  }

 /* design(){
    return(

  this.names=  {

    this.state.orders.map((order,key)=>(


        <tr> <td>{order.name}</td> </tr>




    ))

    }


      )
  }*/

  render() {
    /*return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              
              <tr>
                <td>Email</td>
                <td>{this.state.date}</td>
              </tr>
            
            

            

            </tbody>
          </table>
        </div>
      </div>


    )*/

    return  <Decide type={this.state.type} name={this}  />
  }
}

export default Profile