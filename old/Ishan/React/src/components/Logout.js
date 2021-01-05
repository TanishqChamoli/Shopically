import React, { Component } from 'react'
//import { regotp } from './UserFunctions'
import {Redirect} from 'react-router-dom'

class Logout extends Component {
  constructor() {
    super()
    
     
    localStorage.removeItem('usertoken')
  }




render(){



return (<Redirect to={{pathname: '/login'}} />)


}

}

export default Logout