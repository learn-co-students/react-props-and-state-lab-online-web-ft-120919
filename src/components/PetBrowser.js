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
        // <Pet name={petInfo.name} 
        //   type={petInfo.type}
        //   age={petInfo.age}
        //   weight={petInfo.weight}
        //   gender={petInfo.gender}
        //   onAdoptPet={this.props.onAdoptPet}
        // />
      )//return
    })//map
  }//render
}//class

export default PetBrowser
