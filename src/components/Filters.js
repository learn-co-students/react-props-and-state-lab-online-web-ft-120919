import React from 'react'

class Filters extends React.Component {
  handleSelectionChange = (event) => {
    this.props.onChangeType(event.target.value)
  }//handleSelectionChange

  handleButtonClick = (event) => {
    this.props.onFindPetsClick()
  }//handleButtonClick

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleSelectionChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button"
            onClick={this.handleButtonClick}
          >
          Find pets
          </button>
        </div>
      </div>
    )//return
  }//render
}//class 

export default Filters
