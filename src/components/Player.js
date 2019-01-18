/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';
/* eslint-enable no-unused-vars */

export default class Player extends Component {
	render() {
		return (
			<Card>
				<Card.Content>
					<Card.Header>{this.props.name}</Card.Header>
					<Card.Meta>
						<span className="class">{this.props.player_class}</span>
					</Card.Meta>
					<Card.Description>
						<div>
							<Icon name="arrow alternate circle right" /> <span>{this.props.speed}</span>
						</div>
						<div>
							<Icon name="heart" /> <span>{this.props.hp}</span>
						</div>
						<div>
							<Icon name="shield" /> <span>{this.props.ac}</span>
						</div>
					</Card.Description>
				</Card.Content>
			</Card>
		);
	}
}