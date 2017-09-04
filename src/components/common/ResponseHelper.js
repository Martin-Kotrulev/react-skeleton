import toastr from 'toastr'
import Auth from '../../Auth'

class ResponseHelper {
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
      } else {
        this.setState({error: data.message})
      }
    }
  }
}

export default ResponseHelper