/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Encounter from './containers/Encounter';
/* eslint-enable no-unused-vars */

class App extends Component {
	state = {
		encounters: [],
		players: [],
		creatures: [],
		selectedEncounter: null,
		selected: {
			type: null,
			id: null
		}
	}

	async componentDidMount() {
		const encounters = await fetch("http://localhost:3000/api/v1/encounters");
		const { players, creatures } = encounters;

		this.setState({ 
			encounters,
			players,
			creatures
		});
	}

	render() {
		return (
			<Fragment>
				<Router>
					<nav>
						<Link to="/">Encounter</Link>
						<Link to="/create">Create Character</Link>
					</nav>
					<Route exact path="/" render={() => <Encounter players={this.state.players} creatures={this.state.creatures} />} />
				</Router>
			</Fragment>
		);
	}
}

export default App;