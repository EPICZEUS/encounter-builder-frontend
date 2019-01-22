import React from 'react'
import PropTypes from 'prop-types'
import Creature from '../components/Creature'

class CurrentEncounter extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        {this.props.creatures.map(creature => <Creature key={creature.id} {...creature} />)}
      </div>

    )
  }
}

export default CurrentEncounter;
