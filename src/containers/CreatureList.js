/* eslint-disable no-unused-vars */
import React from 'react';
import Creature from '../components/Creature';
import { Card, Segment, Input, Icon } from 'semantic-ui-react';
import InfoBox from './InfoBox';
/* eslint-enable no-unused-vars */

class CreatureList extends React.Component {
	state = {
		selected: null,
		filter: ''
	}

	selectCreature = selected => {
		this.setState({ selected });
	}

	handleFilter = () => {
		const filteredCreatures = this.props.creatures.filter(c => c.name.includes(this.state.filter));
	}

	// handleChange = event => {
	// 	this.setState({ filter: event.target.value });
	// }

	render () {
		return (
			<div>
				<Input
					iconPosition="left"
					placeholder="Search"
					value={this.props.filter}
					onChange={this.props.handleChange} >
					<Icon name="search" />
					<input />
				</Input>
				<Segment style={{ overflow: 'auto', maxHeight: 700 }}>
					<Card.Group itemsPerRow={1}>
						{this.props.creatures.map(creature => <Creature key={creature.id} {...creature} selectCreature={this.selectCreature}/>)}
					</Card.Group>
				</Segment>
				<Segment>
					{this.state.selected
						? <InfoBox creature={this.props.creatures.find(c => c.id === this.state.selected)} addToEncounter={this.props.addToEncounter} />
						: <InfoBox creature={null}/>}
				</Segment>
			</div>
		);
	}
}

export default CreatureList;
