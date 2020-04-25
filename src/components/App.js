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
  }//constructor 

  updateFilters = (petType) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: petType
      }
    })
  }//udpateFilters

  fetchPets = () => {
    let petType = this.state.filters.type
    let url=""
    if (petType !== "all") {
      url = `/api/pets?type=${petType}`
    } else {
      url = '/api/pets'
    }
    return fetch(url)
    .then(resp => {
      return resp.json();
    })
    .then(json => {
      //console.log("Fetched pets: ", json)
      this.setState({
        pets: json
      })
      //console.log("Checking state: ", this.state.pets)
    })
  }//fetchPets

  changeAdoptedStatus = (petId) => {
    let adoptedPet = this.state.pets.find(pet => pet.id === petId)
    adoptedPet.isAdopted = true 
  }//changeAdoptedStatus

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.updateFilters}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.changeAdoptedStatus}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
