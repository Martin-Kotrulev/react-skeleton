import { Component } from 'react'
import Auth from '../../Auth'

export default class Logout extends Component {
  componentWillMount () {
    Auth.deauthenticateUser()
    this.props.history.push('/users/login')
  }

  render () {
    return null
  }
}
