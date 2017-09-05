import React, { Component } from 'react'
import queryString from 'query-string'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'

class PetsList extends Component {
  constructor (props) {
    super(props)

    const query = queryString.parse(this.props.location.search)
    const page = parseInt(query.page) || 1
    
    this.state = {
      pets: [],
      page
    }

    this.handlePetListing = this.handlePetListing.bind(this)

    petStore.on(
      petStore.eventTypes.PETS_LISTED,
      this.handlePetListing
    )
  }

  handlePetListing (pets) {
    console.log(pets)
    this.setState({ pets })
  }

  componentWillUnmount () {
    petStore.removeListener(
      petStore.eventTypes.PETS_LISTED,
      this.handlePetListing
    )
  }

  componentDidMount () {
    petActions.all(this.state.page)
  }

  render () {
    return (
      <div>Pets list</div>
    )
  }
}

export default PetsList
