import React, { Component } from 'react'
import CreatePetForm from './CreatePetForm'
import FormHelper from '../common/FormHelper'
import ResponseHelper from '../common/ResponseHelper'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'

class CreatePet extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pet: {
        name: 'Pesho',
        age: 2,
        type: 'Cat',
        image: 'https://static.pixels.com/photos/126407/pixels-photo-126407.jpeg',
        breed: 'Street'
      },
      error: ''
    }

    this.handlePetCreated.bind(this)

    petStore.on(
      petStore.eventTypes.PET_CREATED,
      this.handlePetCreated
    )
  }

  componentWillUnmount () {
    petStore.removeListener(
      petStore.eventTypes.PET_CREATED,
      this.handlePetCreated
    )
  }

  handlePetCreated (data) {
    ResponseHelper.handleResponse.call(this, data)
  }

  handleFormSubmit (event) {
    event.preventDefault()
    
    // validate pet data
    petActions.createPet(this.state.pet)
  }

  handleFormChange (event) {
    FormHelper.handleFormChange.call(this, event, 'pet')
  }

  render () {
    return (
      <div>
        <h1>Create new pet</h1>
        <CreatePetForm
          pet={this.state.pet}
          onChange={this.handleFormChange.bind(this)}
          error={this.state.error}
          onSubmit={this.handleFormSubmit.bind(this)} />
      </div>
    )
  }
}

export default CreatePet