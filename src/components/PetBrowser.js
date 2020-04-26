import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  constructor() {
    this.state = {
      pet: pet
    }
  }

  handlePets = () => {
    this.props.pets.forEach(pet => pet)
  }

  render() {
    debugger

    return <div className="ui cards">
      <Pet pet={this.handlePets} onAdoptPet={this.props.onAdoptPet} />
    </div>


  }
}

export default PetBrowser
