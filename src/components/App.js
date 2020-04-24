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

  onChangeType = type => {
	this.setState({
		filters: {
			type
		}
	})
  }

	onFindPetsClick = () => {
		let petURL = '/api/pets'
		if (this.state.filters.type !== 'all') {
			petURL = `/api/pets?type=${this.state.filters.type}`
		}
		fetch(petURL)
		.then(resp => resp.json())
		.then(pets => this.setState({
			pets
		}))
	}

	onAdoptPet = (petID) => {
		console.log(petID)
		let petArray = this.state.pets.map(pet => {
			if (pet.id === petID) {
				pet.isAdopted = true
			}
			return pet
		})
		this.setState({
			pets: petArray
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
					<Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
				</div>
				<div className="twelve wide column">
					<PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
				</div>
				</div>
			</div>
			</div>
		)
	}
}

export default App
