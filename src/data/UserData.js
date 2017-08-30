import Http from '../Http'

const registerUrl = '/auth/signup'
const loginUrl = '/auth/login'

class UserData {
  static registerUser (user) {
    return Http.post(registerUrl, user)
  }

  static loginUser (user) {
    return Http.post(loginUrl, user)
  }
}

export default UserData
