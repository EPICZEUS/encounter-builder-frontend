import React from 'react'
import { Card } from 'semantic-ui-react'

const Details = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.creature.name}</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default Details
