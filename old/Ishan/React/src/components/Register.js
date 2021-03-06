import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      mobile:'',
      hno:'',
      sector:'',
      email: '',
      password: '',
      types:'',
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

    const newUser = {
      name: this.state.name,
      mobile: this.state.mobile,
      hno: this.state.hno,
      sector:this.state.sector,
      email: this.state.email,
      password: this.state.password,
      types:this.state.types
    }

    register(newUser).then(res => {
      this.props.history.push(`/otp`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">mobile</label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  placeholder="Enter your mobile"
                  value={this.state.mobile}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="types">types</label>
                <input
                  type="text"
                  className="form-control"
                  name="types"
                  placeholder="type"
                  value={this.state.types}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Enter House No"
                  value={this.state.hno}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Sector"
                  value={this.state.sector}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
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

export default Register