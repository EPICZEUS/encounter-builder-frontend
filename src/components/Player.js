/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
/* eslint-enable no-unused-vars */

export default class Player extends Component {
	render() {
		return (
			<Card link>
				<Card.Content>
					<Card.Header>{this.props.name}</Card.Header>
					<Card.Meta>
						<span className="class">{this.props.player_class}</span>
					</Card.Meta>
				</Card.Content>
				<Card.Content extra>
					<Icon name="shield" /><span>{this.props.ac}</span>
					{" "}<Icon name="heartbeat" /><span>{this.props.hp}</span><br />
					<Icon name="arrow alternate circle right" /><span>{this.props.speed}</span>
				</Card.Content>
			</Card>
		);
	}
}
