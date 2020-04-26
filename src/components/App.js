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

  handleChangeType = (petType) => {
    this.setState = ({
      filters: {
        type: petType
      }
    })
  }

  findPets = () => {
    if (this.state.filters.type === "cat") {
      fetch("/api/pets?type=cat")
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            pets: data
          })
        })
    } else if (this.state.filters.type === "dog") {
      fetch("/api/pets?type=dog")
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            pets: data
          })
        })
    } else if (this.state.filters.type === "micropig") {
      fetch("/api/pets?type=micropig")
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            pets: data
          })
        })
    } else {
      fetch("/api/pets")
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            pets: data
          })
        })
    }
  }

  // handleData = (data) => {
  //   this.setState({
  //     pets: data
  //   })
  // }

  handleAdopt = (id) => {
    this.state.pets.find(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdopt} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
