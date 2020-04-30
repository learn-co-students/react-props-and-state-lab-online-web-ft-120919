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

  setTypeInApp(newType) {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    })
  }

  fetchPets = async () => {
    let url = '/api/pets';
    if(this.state.filters.type && this.state.filters.type !== 'all') {
       url += `?type=${this.state.filters.type}`;
    }
    console.log(url);
    try {
      const resp = await fetch(url);
      const petsArray = await resp.json();
      this.setState({
        pets: [...petsArray]
      })
    } catch(err) {
      console.log(err);
    }
  }

  adoptPet = (id) => {
    let updatedPets = this.state.pets;
    updatedPets.find(pet => pet.id === id)["isAdopted"] = true;
    this.setState({pets: updatedPets});
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
              <Filters onChangeType={this.setTypeInApp.bind(this)} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
