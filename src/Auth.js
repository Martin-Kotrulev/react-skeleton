class Auth {
  static saveUser (user) {
    window.localStorage.setItem('user', JSON.stringify(user))
  }

  static getUser () {
    return JSON.parse(window.localStorage.getItem('user'))
  }

  static removeUser (user) {
    window.localStorage.removeItem('user')
  }

  static authenticateUser (token) {
    window.localStorage.setItem('token', token)
  }

  static isAuthenticated () {
    return window.localStorage.getItem('token') !== null
  }

  static deauthenticateUser () {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
  }

  static getToken () {
    return window.localStorage.getItem('token')
  }
}

export default Auth
