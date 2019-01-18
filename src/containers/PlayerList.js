/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Player from '../components/Player';
/* eslint-enable no-unused-vars */

export default class PlayerList extends Component {
	render() {
		return (
			<Card.Group itemsPerRow={2}>
				{this.props.players.map(player => (
					<Player 
						key={player.id}
						{...player}
					/>)
				)}
			</Card.Group>
		);
	}
}