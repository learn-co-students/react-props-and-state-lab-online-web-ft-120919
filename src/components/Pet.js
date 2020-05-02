import React from 'react'

class Pet extends React.Component {

  handleAdoptClick = (event) => {
    this.props.onAdoptPet(this.props.pet.id)
  }//handleAdoptClick

  renderButton = () => {
    if (this.props.pet.isAdopted) {
        return <button className="ui disabled button">Already adopted</button>
    } else {
        return <button className="ui primary button" onClick={this.handleAdoptClick}>Adopt pet</button>
    }
  }//renderButton

  renderSymbol = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }//renderSymbol

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.renderSymbol()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
          
          {/* if ({this.props.pet.isAdopted}) { */}
          {/* //   <button className="ui disabled button">Already adopted</button> */}
          {/* // } else { */}
          {/* //   <button className="ui primary button" onClick={this.handleAdoptClick}>Adopt pet</button> */}
          {/* // } */}
        </div>
      </div>
    )
  }
}

export default Pet