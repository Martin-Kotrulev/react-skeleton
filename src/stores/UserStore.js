import { EventEmitter } from 'events'
import Dispatcher from '../Dispatcher'
import UserActions from '../actions/UserActions'
import UserData from '../data/UserData'

class UserStore extends EventEmitter {
  registerUser (user) {
    UserData.registerUser(user)
      .then(data => this.emit(this.eventTypes.USER_REGISTERED, data))
  }

  handleAction (action) {
    switch (action.type) {
      case UserActions.types.REGISTER_USER:
        this.registerUser(action.payload)
        break
      default:
        break
    }
  }
}

let userStore = new UserStore()
userStore.eventTypes = {
  USER_REGISTERED: 'USER_REGISTERED'
}

Dispatcher.register(userStore.handleAction.bind(userStore))

export default userStore
