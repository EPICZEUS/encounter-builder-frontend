import React, { Component } from 'react';
import CreatureList from '../containers/CreatureList'
import PlayerList from './PlayerList';
import { Grid } from 'semantic-ui-react'

export default class Encounter extends Component {
	render() {
		return (
			<Grid celled>
				<Grid.Row>
					<Grid.Column width={3}>
						<h1>players go here</h1>
					</Grid.Column>
					<Grid.Column width={10}>
						<h1>map or some shit here</h1>
					</Grid.Column>
					<Grid.Column width={3}>
						<CreatureList />
					</Grid.Column>
				</Grid.Row>
			</Grid>

		);
	}
}

// <PlayerList players={this.props.players} />
