import React, { Component } from 'react'
import { regotp } from './UserFunctions'
import {Redirect} from 'react-router-dom'

class Otp extends Component {
  constructor() {
    super()
    
     
    this.state = {
      otp: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const uotp = {
      otp: this.state.otp
    }

    regotp(uotp).then(res => {
      console.log(res);
      if (res['result']==='success'){
        this.props.history.push(`/login`)
      }
      else{
        this.props.history.push(`/register`)
      }
      
    })
  }

  render() {
     /*if (window.sessionStorage.getItem("registered") === null) {
          return (<Redirect to={{pathname: '/register'}} />)
        } */

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="otp">otp</label>
                <input
                  type="text"
                  className="form-control"
                  name="otp"
                  placeholder="Enter otp"
                  value={this.state.otp}
                  onChange={this.onChange}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Otp