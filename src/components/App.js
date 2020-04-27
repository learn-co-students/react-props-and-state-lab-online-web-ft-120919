import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
    this.onChangeType = this.onChangeType.bind(this);
    // this.onFindPetsClick = this.onFindPetsClick.bind(this);
  }
  onChangeType = (e) => {
    console.log(e.target.value);
    this.setState({
      ...this.state,
      filters: {
        type: e.target.value,
      },
    });
  };
  onFindPetsClick = () => {
    console.log("clicked");
    let url = "/api/pets";
    let type = this.state.filters.type;
    if (type !== "all") {
      url += `?type=${type}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          pets: data,
        });
      });
  };
  onAdoptPet = (id) => {
    let pets = this.state.pets.map(pet =>{
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    })
    this.setState({ pets: pets });
  };

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
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
