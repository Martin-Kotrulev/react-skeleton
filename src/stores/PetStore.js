import { EventEmitter } from 'events'
import Dispatcher from '../Dispatcher'
import PetActions from '../actions/PetActions'
import PetData from '../data/PetData'

class PetStore extends EventEmitter {
  createPet (pet) {
    PetData.createPet(pet)
      .then(data => this.emit(this.eventTypes.PET_CREATED, data))
  }

  all (page) {
    PetData.all(page)
      .then(data => this.emit(this.eventTypes.PETS_LISTED, data))
  }

  handleAction (action) {
    switch (action.type) {
      case PetActions.types.CREATE_PET:
        this.createPet(action.payload)
        break
      case PetActions.types.LIST_PETS:
        this.all(action.payload)
      default:
        break
    }
  }
}

let petStore = new PetStore()

petStore.eventTypes = {
  PET_CREATED: 'PET_CREATED',
  PETS_LISTED: 'PETS_LISTED'
}

Dispatcher.register(petStore.handleAction.bind(petStore))

export default petStore
