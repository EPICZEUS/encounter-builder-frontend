import React, { Component } from 'react';
import CreatureList from '../containers/CreatureList'
import PlayerList from './PlayerList';

export default class Encounter extends Component {
	render() {
		return (
			<CreatureList />
			<PlayerList players={this.props.players} />
		);
	}
}
