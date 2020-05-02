import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      this.props.pets.map((pet, i) => {
        return(
          <div className="ui cards">
            <Pet key={i} pet={pet} onAdoptPet={this.props.onAdoptPet} />
          </div>
        )
      })
    )
  }
}

export default PetBrowser
