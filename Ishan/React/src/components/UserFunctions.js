import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/register', {
      name: newUser.name,
      address: newUser.address,
      mobile: newUser.mobile,
      email: newUser.email,
      password: newUser.password,
      types:newUser.types
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('/login', {
      email: user.email,
      password: user.password,
      type:user.type
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}


export const regotp = uotp => {
  return axios
    .post('/otp', {
      otp: uotp.otp
    })
    .then(response => {
      //localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}