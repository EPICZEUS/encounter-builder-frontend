/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CreatureList from '../containers/CreatureList';
import PlayerList from './PlayerList';
import CurrentEncounter from '../containers/CurrentEncounter';
import { Grid } from 'semantic-ui-react';
/* eslint-enable no-unused-vars */

export default class Encounter extends Component {
	render() {
		return (
			<Grid celled>
				<Grid.Row>
					<Grid.Column width={3}>
						<PlayerList addToEncounter={this.props.addToEncounter}/>
					</Grid.Column>
					<Grid.Column width={10}>
						<CurrentEncounter
							creatures={this.props.creatures}
							players={this.props.players}
						/>
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
