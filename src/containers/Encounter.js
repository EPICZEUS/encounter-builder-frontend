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
						<PlayerList
							players={this.props.players}
							addToEncounter={this.props.addToEncounter}/>
					</Grid.Column>
					<Grid.Column width={10}>
						<CurrentEncounter
							creatures={this.props.addedCreatures}
							players={this.props.addedPlayers}
							encounters={this.props.encounters}
							options={this.props.options}
							selected={this.props.selected}
							handleEncounterSelect={this.props.handleEncounterSelect}
						/>
					</Grid.Column>
					<Grid.Column width={3}>
						<CreatureList
							creatures={this.props.creatures}
							filter={this.props.filter}
							handleChange={this.props.handleChange}
							addToEncounter={this.props.addToEncounter}/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

// <PlayerList players={this.props.players} />
