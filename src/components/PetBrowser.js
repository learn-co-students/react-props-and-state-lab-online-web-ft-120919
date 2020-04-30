import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  renderPets = () => {
    if(this.props.pets) {
      return this.props.pets.map((pet, i) => {
        return (<Pet pet={pet} onAdoptPet={this.props.onAdoptPet} key={i} />);
      });
    }
  }
  
  render() {
    return (
      <div>
        {this.renderPets()}
      </div>
    )
  }
}

export default PetBrowser
