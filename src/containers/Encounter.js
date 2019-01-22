import React, { Component } from 'react';
import CreatureList from '../containers/CreatureList'
import PlayerList from './PlayerList';
import CurrentEncounter from '../containers/CurrentEncounter'
import { Grid } from 'semantic-ui-react'

export default class Encounter extends Component {

	render() {
		return (
			<Grid celled>
				<Grid.Row>
					<Grid.Column width={3}>
						<PlayerList />
					</Grid.Column>
					<Grid.Column width={10}>
						<CurrentEncounter creatures={this.props.creatures}/>
					</Grid.Column>
					<Grid.Column width={3}>
						<CreatureList addToEncounter={this.props.addToEncounter}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>

		);
	}
}

// <PlayerList players={this.props.players} />
