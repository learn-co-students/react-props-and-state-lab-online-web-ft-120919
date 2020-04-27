import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="ui cards">
        {this.props.pets.map((pet) => {
          return (
            <Pet
              onAdoptPet={this.props.onAdoptPet}
              type={pet.type}
              name={pet.name}
              age={pet.age}
              weight={pet.weight}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default PetBrowser;
