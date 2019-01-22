/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Encounter from './containers/Encounter';
import { Card } from 'semantic-ui-react';
import NewPlayer from './components/NewPlayer';
/* eslint-enable no-unused-vars */

class App extends Component {
	state = {
		encounters: [],
		players: [],
		creatures: [],
		addedPlayers: [],
		addedCreatures: [],
		options: [],
		selected: null
	}

	async componentDidMount() {
		const encounters = await fetch("http://localhost:3000/api/v1/encounters").then(r => r.json());
		const players = await fetch("http://localhost:3000/api/v1/players").then(r => r.json());
		const creatures = await fetch("http://localhost:3000/api/v1/creatures").then(r => r.json());
		// const { players = [], creatures = []} = encounters[0] || {};

		const options = encounters.map(encounter => ({
			key: encounter.id,
			value: encounter.id,
			text: encounter.name
		}));

		this.setState({
			selected: encounters[0] ? encounters[0].id : null,
			encounters,
			players,
			creatures,
			options
		});
	}

	addToEncounter = combatant => {
		const prop = combatant.player_class ? "addedPlayers" : "addedCreatures";

		this.setState({ [prop]: [ ...this.state[prop], combatant ]});
	}

	render() {
		return (
			<Router>
				<Fragment>
					<nav>
						<Link to="/">Encounter</Link>
						<Link to="/create">Create Character</Link>
					</nav>
					<Route exact path="/" render={() => <Encounter players={this.state.players} creatures={this.state.creatures} encounters={this.state.options} addedPlayers={this.state.addedPlayers} addedCreatures={this.state.addedCreatures} addToEncounter={this.addToEncounter}/>} />
					<Route path="/create" render={() => <NewPlayer />} />
				</Fragment>
			</Router>
		);
	}
}

export default App;
