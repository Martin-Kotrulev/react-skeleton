import toastr from 'toastr'
import Auth from '../../Auth'

export default class ResponseHelper {
  static handleResponse (data, redirectPath) {
    if (data.success) {
      toastr.success(data.message)

      if (data.token) {
        Auth.authenticateUser(data.token)
      }

      if (data.user) {
        Auth.saveUser(data.user)
      }

      if (redirectPath) {
        this.props.history.push(redirectPath)
      }
    } else {
      if (data.errors) {
        let firstError = Object.keys(data.errors)
          .map(k => data.errors[k])[0]
        this.setState({ error: firstError })
      } else {
        this.setState({ error: data.message })
      }
    }
  }
}
