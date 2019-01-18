import React from 'react'
import PropTypes from 'prop-types'
import { Card, Icon } from 'semantic-ui-react'

const Creature = (props) => {
  return (
    <Card link onClick={() => props.selectCreature(props.id)}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.creature_type}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='shield' />{props.ac}
          <Icon name='heartbeat' />{props.hp}<br />
          <Icon name='arrow alternate circle right' />{props.speed}
        </a>
      </Card.Content>
    </Card>
  )
}

export default Creature
