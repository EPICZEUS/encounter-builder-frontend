import React from 'react'
import Creature from '../components/Creature'
import { Card } from 'semantic-ui-react'

class CreatureList extends React.Component {

  state = {
    creatures: [],
    selected: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/creatures')
    .then(res => res.json())
    .then(creatures => {
      this.setState({ creatures })
    })
  }

  render () {
    return (
      <Card.Group itemsPerRow={5}>
        {this.state.creatures.map(creature => {
          return <Creature key={creature.id} {...creature} />
        })}
      </Card.Group>
    )
  }
}

export default CreatureList;
