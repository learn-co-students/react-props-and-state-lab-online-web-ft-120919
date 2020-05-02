import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return this.props.pets.map(petInfo => {
      return (
        <Pet 
          pet={petInfo} 
          onAdoptPet={this.props.onAdoptPet}
        />
       
      )
    })
  }
}

export default PetBrowser
