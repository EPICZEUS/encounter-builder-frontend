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
		selected: null,
		filter: ''
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
			// selected: encounters[0] ? encounters[0].id : null,
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

	handleEncounterSelect = id => {
		const selectedEncounter = this.state.encounters.find(e => e.id === id);
		this.setState({
			selected: id,
			addedPlayers: selectedEncounter.players,
			addedCreatures: selectedEncounter.creatures
		});
	}

	handleDeselect = () => {
		this.setState({
			selected: null,
			addedPlayers: [],
			addedCreatures: []
		});
	}

	handleSave = (id, name) => {
		const newOption = {
			key: id,
			value: id,
			text: name
		};
		this.setState({ options: [ ...this.state.options, newOption ]}, () => this.handleDeselect());
	}

	handleChange = event => {
		const filter = event.target.value;
		this.setState({ filter });
	}

	render() {
		// find encounter
		return (
			<Router>
				<Fragment>
					<nav>
						<Link to="/">Encounter</Link>
						<Link to="/create">Create Character</Link>
					</nav>
					<Route exact path="/" render={() => <Encounter
						players={this.state.players.filter(player => !this.state.addedPlayers.some(aPlay => aPlay.id === player.id))}
						creatures={this.state.creatures.filter(c => c.name.toLowerCase().includes(this.state.filter))}
						encounters={this.state.encounters}
						options={this.state.options}
						selected={this.state.selected}
						addedPlayers={this.state.addedPlayers}
						filter={this.state.filter}
						handleChange={this.handleChange}
						handleDeselect={this.handleDeselect}
						handleSave={this.handleSave}
						handleEncounterSelect={this.handleEncounterSelect}
						addedCreatures={this.state.addedCreatures}
						addToEncounter={this.addToEncounter} />}
					/>
					<Route path="/create" render={() => <NewPlayer />} />
				</Fragment>
			</Router>
		);
	}
}

export default App;
