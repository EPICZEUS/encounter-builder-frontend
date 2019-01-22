import React from 'react'
import PropTypes from 'prop-types'
import Creature from '../components/Creature'
import Player from '../components/Player'
import { Segment, Form, Card, Grid } from 'semantic-ui-react'

class CurrentEncounter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: ''
    }
  }

  render () {
    return (
      <div>
        <Segment>
          <Form>
            <Form.Input
              name='name'
              label='Name'
              placeholder='Name'
            />
          <Form.TextArea
              name='description'
              label='Description'
              placeholder='Description of the enounter, enemies, loot, notes, etc...'/>
          </Form>
        </Segment>
        <Segment>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Card.Group itemsPerRow={1}>
                  {this.props.players.map(player => <Player key={player.id} {...player} />)}
                </Card.Group>
              </Grid.Column>
              <Grid.Column>
                <Card.Group itemsPerRow={1}>
                  {this.props.creatures.map(creature => <Creature key={creature.id} {...creature} />)}
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default CurrentEncounter;
