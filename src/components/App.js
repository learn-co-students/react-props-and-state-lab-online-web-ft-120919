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

  // update this.state.filters.type
  onChangeType = (val) => {
    this.setState({filters: { type: val }})
    console.log(`changed type to ${val}`)
  }

  // update this.state.pets from data
  fetchPets = () => {
    const BaseURL = '/api/pets'
    const queryParam = this.state.filters.type !== 'all' ? `?type=${this.state.filters.type}` : ''

    fetch(BaseURL + queryParam)
      .then(res => res.json())
      .then(json => {
        this.setState({ pets: json })
      })

  }

  adoptPet = (petId) => {
    const pets = this.state.pets.map((p) => {
      return p.id === petId ? {...p, isAdopted: true } : p
    })
    this.setState({ pets: pets})
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
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.adoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
