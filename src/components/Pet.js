import React from "react";

class Pet extends React.Component {
  handleAdopt = (e)=>{
    this.props.onAdoptPet(e.target.id)
    e.target.className= `ui disabled button`
    e.target.previousElementSibling.className='ui green button'

  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date"> {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button onChange={this.enable} className="ui disabled button">Already adopted</button>
          <button id = {this.props.id} onClick={this.handleAdopt} className="ui primary button">Adopt pet</button>
        </div>
      </div>
    );
  }
}

export default Pet;
