import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

const Creature = (props) => {
  return (
    <Card link onClick={() => props.selectCreature(props.id)}>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.creature_type}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
          <Icon name='shield' />{props.ac}
          {" "}<Icon name='heartbeat' />{props.hp}<br />
          <Icon name='arrow alternate circle right' />{props.speed}
      </Card.Content>
    </Card>
  )
}

export default Creature
