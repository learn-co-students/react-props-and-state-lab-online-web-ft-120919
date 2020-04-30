import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.pet = this.props.pet;
  }

  adoptPet = () => {
    this.props.onAdoptPet(this.pet.id)
  }

  renderGender = () => {
    if(this.pet.gender === "male") {
      return '♂';
    } else if(this.pet.gender === "female") {
      return '♀';
    } else {
      return null;
    }
  }

  renderButton = () => {
    if(this.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.adoptPet}>Adopt pet</button>
    } 
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.renderGender() + this.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.pet.age}</p>
            <p>Weight: {this.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
