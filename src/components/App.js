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


  // not sure about this part, how to set state.pets to result of fetch???
  // setPetsFromFetch = () => {
  //   this.setState({
  //     pets: handleFetch()
  //   })
  // }


  handleFetch = () => {
    if (this.state.filters.type === 'cat'){
      fetch('/api/pets?type=cat')
    } else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog')
    } else if (this.state.filters.type === 'micropig') {
      fetch('/api/pets?type=micropig')
    } else {
      fetch('/api/pets')
    }
  }

  // need to find first not just check equality for each pets????
  isAdoptedFunct = (petId) => {
    if (this.state.pets.id===petId) {
      this.state.pets.isAdopted=true
    }


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
              onChangeType={this.state.filters.type}
              onFindPetsClick={this.handleFetch}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
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
