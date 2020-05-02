import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  handleQuerySubmit = () => {
    let url = '/api/pets'
    switch(this.state.filters.type) {
      case 'all':
        break;
      case 'dog':
        url += '?type=dog'
        break
      case 'cat':
        url += '?type=cat'
        break
      case 'micropig':
        url += '?type=micropig'
        break
    }

    return fetch(url)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pets: json
        })
      })
  }

  handleAdoptPet = (petID) => {

    let pets = this.state.pets.map(pet => {
      return pet.id === petID ? {...pet, isAdopted: true} : pet
    })
    // set pet state to adopted
    this.setState({
      pets: pets
    })

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={e => this.handleChangeType(e)} onFindPetsClick={this.handleQuerySubmit} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
