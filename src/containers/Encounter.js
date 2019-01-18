import React, { Component } from 'react';
import PlayerList from './PlayerList';

export default class Encounter extends Component {
	render() {
		return (
			<PlayerList players={this.props.players} />
		);
	}
}