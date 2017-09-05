import Dispatcher from '../Dispatcher'

const petActions = {
  types: {
    CREATE_PET: 'CREATE_PET',
    LIST_PETS: 'LIST_PETS'
  },
  createPet (pet) {
    Dispatcher.dispatch({
      type: this.types.CREATE_PET,
      payload: pet
    })
  },
  all (page) {
    page = page || 1

    Dispatcher.dispatch({
      type: this.types.LIST_PETS,
      payload: page
    })
  }
}

export default petActions
