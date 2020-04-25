import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return this.props.pets.map(petInfo => {
      return (
        <Pet name={petInfo.name} 
          type={petInfo.type}
          age={petInfo.age}
          weight={petInfo.weight}
          gender={petInfo.gender}
        />
      )//return
    })//map
  }//render
}

export default PetBrowser
