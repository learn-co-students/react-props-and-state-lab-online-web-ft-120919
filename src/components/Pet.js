import React from 'react'

class Pet extends React.Component {

  handleAdoption = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {

    let genderIcon 
    if (this.props.pet.gender==='male') {
      genderIcon = '♂'
    } else {
      genderIcon ='♀'
    }

    // let button
    // if (this.props.pet.isAdopted===false) {
    //   button = <button 
    //   // onAdoptPet is put here?
      
    //   className="ui primary button">Adopt pet</button>
    // } else {
    //   button = <button className="ui disabled button">Already adopted</button>
    // }

    return (
      <div
      pet={this.props.pet}
      // onAdoptPet={this.props.onAdoptPet}
       className="card">
      <p>{this.props.onAdoptPet}</p>
         
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.name}
          </a>
          <p> {genderIcon}</p>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">

         
          {this.props.pet.isAdopted===false ? (

            <button 
            onClick={this.handleAdoption}
            className="ui primary button">Adopt pet
            </button>
            ) : ( 
          <button className="ui disabled button">Already adopted</button> 
          )
        }
        </div>
      </div>
    )
  }
}

export default Pet
