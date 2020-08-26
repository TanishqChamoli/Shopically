import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.identity.data['name'],
      //last_name: decoded.identity.last_name,
      date: decoded.identity.data['register'],

      orders:decoded.identity.data['orders'],

      one:decoded.identity.data['orders'][0].name,
      two:decoded.identity.data['orders'][1].name
    })
  
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
                <td>{this.state.first_name}</td>
              </tr>
              
              <tr>
                <td>Email</td>
                <td>{this.state.date}</td>
              </tr>
            
            <tr><td>{this.state.one}</td></tr>
            <tr><td>{this.state.two}</td></tr>

            

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile