/* eslint-disable no-unused-vars */
import React from 'react';
import Creature from '../components/Creature';
import { Card, Segment } from 'semantic-ui-react';
import InfoBox from './InfoBox';
/* eslint-enable no-unused-vars */

class CreatureList extends React.Component {
	state = { selected: null }

	selectCreature = selected => {
		this.setState({ selected });
	}

	render () {
		return (
			<div>
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
