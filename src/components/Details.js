import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const Details = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.creature.name}</Card.Header>
        <Card.Meta>{props.creature.creature_type || props.creature.player_class}</Card.Meta><hr />
        <Card.Description><span>STR: {props.creature.str}</span>  <span>CON: {props.creature.con}</span>  <span>DEX: {props.creature.dex}</span></Card.Description><br/>
        <Card.Description><span>INT: {props.creature.int}</span>  <span>WIS: {props.creature.wis}</span>  <span>CHA: {props.creature.cha}</span></Card.Description><hr />
        <Card.Description>{props.creature.cr != null ? "Challenge rating: " + props.creature.cr : "Level: " + props.creature.level}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='shield' />{props.creature.ac}
          {" "}<Icon name='heartbeat' />{props.creature.hp}<br />
        <Icon name='arrow alternate circle right' />{props.creature.speed}
        </a>
      </Card.Content>
    </Card>
  )
}

export default Details
