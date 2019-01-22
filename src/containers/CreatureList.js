import React from 'react';
import Creature from '../components/Creature';
import { Card, Segment } from 'semantic-ui-react';
import InfoBox from './InfoBox';

class CreatureList extends React.Component {
  state = {
  	creatures: [],
  	selected: null
  }

  componentDidMount() {
  	fetch('http://localhost:3000/api/v1/creatures')
  		.then(res => res.json())
  		.then(creatures => {
  			this.setState({ creatures });
  		});
  }

  selectCreature = id => {
  	this.setState({ selected: id });
  }

  render () {
  	return (
  		<div>
  			<Segment style={{ overflow: 'auto', maxHeight: 700 }}>
  				<Card.Group itemsPerRow={1}>
  					{this.state.creatures.map(creature => <Creature key={creature.id} {...creature} selectCreature={this.selectCreature}/>)}
  				</Card.Group>
  			</Segment>
  			<Segment>
  				{this.state.selected
  					? <InfoBox creature={this.state.creatures.find(c => c.id === this.state.selected)} addToEncounter={this.props.addToEncounter} />
  					: <InfoBox creature={null}/>}

  			</Segment>
  		</div>
  	);
  }
}

export default CreatureList;
