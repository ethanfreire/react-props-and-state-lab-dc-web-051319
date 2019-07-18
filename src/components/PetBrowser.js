import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  generatePetsCards = (petsArray) => {
    return petsArray.map(petEntry => {
      return <Pet pet = {petEntry} onAdoptPet={this.props.onAdoptPet}/>

    })

  }

  render() {
    return <div className="ui cards">
    {this.generatePetsCards(this.props.pets)}
    </div>
  }
}

export default PetBrowser
