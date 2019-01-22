/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Player from '../components/Player';
import InfoBox from './InfoBox';
/* eslint-enable no-unused-vars */

export default class PlayerList extends Component {
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

	render() {
		return (
			<div>
				<Segment>
					<Card.Group itemsPerRow={2}>
						{this.props.players.map(player => (
							<Player
								key={player.id}
								{...player}
							/>)
						)}
					</Card.Group>
				</Segment>
				<Segment>
          {this.state.selected
            ? <InfoBox creature={this.state.creatures.find(c => c.id === this.state.selected)} />
          : <InfoBox creature={null}/>}
				</Segment>
			</div>
		);
	}
}
