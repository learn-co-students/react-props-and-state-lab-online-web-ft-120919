import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPets = () => {
    return this.props.pets.map(function(petInfo){
      return <Pet pet={petInfo} onAdoptPet={this.props.onAdoptPet}/>
    }, this)
  }

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
