import { Component } from 'react'
import Auth from '../../Auth'

class Logout extends Component {
  componentWillMount() {
    Auth.deauthenticateUser()
    this.props.history.push('/users/login')
  }

  render () {
    return null
  }
}

export default Logout