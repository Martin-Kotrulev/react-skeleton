import Dispatcher from '../Dispatcher'

const userActions = {
  types: {
    REGISTER_USER: 'REGISTER_USER'
  },
  register (user) {
    Dispatcher.dispatch({
      type: this.types.REGISTER_USER,
      payload: user
    })
  }
}

export default userActions
