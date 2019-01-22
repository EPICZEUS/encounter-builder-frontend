/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Player from '../components/Player';
import InfoBox from './InfoBox';
/* eslint-enable no-unused-vars */

export default class PlayerList extends Component {
	state = {
		players: [],
		selected: null
	}

	// componentDidMount() {
	// 	fetch('http://localhost:3000/api/v1/players')
	// 		.then(res => res.json())
	// 		.then(players => this.setState({ players }));
	// }

	selectPlayer = selected => {
		this.setState({ selected });
	}

	render() {
		return (
			<div>
				<Segment style={{ overflow: 'auto', maxHeight: 700 }}>
					<Card.Group itemsPerRow={1}>
						{this.props.players.map(player => (
							<Player
								key={player.id}
								selectPlayer={this.selectPlayer}
								{...player}
							/>)
						)}
					</Card.Group>
				</Segment>
				<Segment>
					{this.state.selected
						? <InfoBox creature={this.props.players.find(c => c.id === this.state.selected)} addToEncounter={this.props.addToEncounter} />
						: <InfoBox creature={null}/>}
				</Segment>
			</div>
		);
	}
}
