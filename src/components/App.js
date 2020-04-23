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

  handleFetch = () => {
    let url
    if (this.state.filters.type === 'cat'){
       url = '/api/pets?type=cat'
    } else if (this.state.filters.type === 'dog') {
       url = '/api/pets?type=dog'
    } else if (this.state.filters.type === 'micropig') {
       url = '/api/pets?type=micropig'
    } else {
      url = '/api/pets'
    }
    fetch(url)
    .then(resp=>resp.json())
    .then(jsonData=>
      this.setState({
        pets: jsonData
      })
      )
    
  }

  isAdoptedFunct = (petId) => {
    
    const newState = this.state.pets.map( pet => {
      if (pet.id === petId) {
        pet.isAdopted = true
      }
      return pet 
    })
    this.setState({
      pets: newState
    })
    
  }
  // console.log(this.state.pets)
  // return this.state.pets

  handleOnChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value 
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
              <Filters 
              onChangeType={this.handleOnChangeType}
              onFindPetsClick={this.handleFetch}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.isAdoptedFunct}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
