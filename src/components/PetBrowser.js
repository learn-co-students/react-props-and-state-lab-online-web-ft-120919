import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  
  render() {

    let arr = this.props.pets.map( pet => <Pet onAdoptPet={this.props.onAdoptPet} pet={pet}/>)
    
    return <div className="ui cards">
      {arr}
      </div>
  }
}

export default PetBrowser
