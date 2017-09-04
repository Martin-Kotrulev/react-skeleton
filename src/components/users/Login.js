import React, { Component } from 'react'
import LoginForm from './LoginForm'
import FormHelper from '../common/FormHelper'
import ResponseHelper from '../common/ResponseHelper'
import userActions from '../../actions/UserActions'
import userStore from '../../stores/UserStore'

class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: '',
        password: '',
      },
      error: ''
    }

    this.handleUserLogin = this.handleUserLogin.bind(this)

    userStore.on(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  componentWillUnmount () {
    userStore.removeListener(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  handleUserLogin (data) {
    ResponseHelper.handleResponse.call(this, data, '/')
  }

  handleFormChange (event) {
    FormHelper.handleFormChange.call(this, event, 'user')
  }

  handleFormSubmit (event) {
    event.preventDefault();
    userActions.login(this.state.user)
  }

  render () {
    return (
      <div>
        <h1>Login in to your account</h1>
        <LoginForm 
          user={this.state.user}
          onChange={this.handleFormChange.bind(this)}
          error={this.state.error}
          onSubmit={this.handleFormSubmit.bind(this)} />
      </div>
    )
  }
}

export default Login
