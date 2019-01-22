/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Encounter from './containers/Encounter';
import { Card } from 'semantic-ui-react'
import NewPlayer from './components/NewPlayer'
/* eslint-enable no-unused-vars */

class App extends Component {
	state = {
		encounters: [],
		players: [],
		creatures: [],
		options: [],
		selectedEncounter: null,
		selected: {
			type: null,
			id: null
		}
	}

	async componentDidMount() {
		const encounters = await fetch("http://localhost:3000/api/v1/encounters").then(r => r.json());
		const { players = [], creatures = []} = encounters[0] || {};

		const options = encounters.map(encounter => ({
			key: encounter.id,
			value: encounter.id,
			text: encounter.name
		}));

		this.setState({
			selectedEncounter: encounters[0] ? encounters[0].id : null,
			encounters,
			players,
			creatures,
			options
		});
	}

	addToEncounter = (combatant) => {
		console.log(combatant);
		if (combatant.player_class) {
			this.state.players.push(combatant)
			this.setState({
				players: this.state.players
			})
		} else {
			this.state.creatures.push(combatant)
			this.setState({
				creatures: this.state.creatures
			})
		}
	}

	render() {
		return (
			<Router>
				<Fragment>
					<nav>
						<Link to="/">Encounter</Link>
						<Link to="/create">Create Character</Link>
					</nav>
					<Route exact path="/" render={() => <Encounter players={this.state.players} creatures={this.state.creatures} addToEncounter={this.addToEncounter}/>} />
					<Route path="/create" render={() => <NewPlayer />} />
				</Fragment>
			</Router>
		);
	}
}

export default App;
