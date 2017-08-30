import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'

class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      error: ''
    }

    this.handleUserRegistration = this.handleUserRegistration.bind(this)
    userStore.on(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_REGISTERED,
      this.handleUserRegistration
    )
  }

  handleUserChange (event) {
    const target = event.target
    const field = target.name
    const value = target.value

    const user = this.state.user
    user[field] = value

    this.setState(this.state)
  }

  handleUserRegistration (data) {
    console.log(data)
  }

  onSubmit (event) {
    event.preventDefault()
    // TODO: Validation
    userActions.register(this.state.user)
  }

  render () {
    return (
      <div>
        <h1>Register User</h1>
        <RegisterForm
          user={this.state.user}
          onChange={this.handleUserChange.bind(this)}
          error={this.state.error}
          onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default Register
