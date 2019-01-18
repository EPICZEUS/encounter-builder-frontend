import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Creature = (props) => {
  return (
    <Card link>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.creature_type}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='shield' />{props.ac}
          {" "}<Icon name='heartbeat' />{props.hp}<br />
          <Icon name='arrow alternate circle right' />{props.speed}
        </a>
      </Card.Content>
    </Card>
  )
}

export default Creature
