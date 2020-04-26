import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  constructor() {
    super()

    this.state = {
      pet: "none"
    }

  }

  handlePet = () => {
    let petsArray = this.props.pets
    petsArray.forEach(pet => {
      this.setState({
        pet: pet
      })
      this.render()
    })

  }



  render() {

    return <div className="ui cards">
      <Pet pet={this.handlePet} onAdoptPet={this.props.onAdoptPet} />
    </div>


  }
}

export default PetBrowser
