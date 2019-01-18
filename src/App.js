/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Encounter from './containers/Encounter';
import CreatureList from './containers/CreatureList'
import { Card } from 'semantic-ui-react'
/* eslint-enable no-unused-vars */

class App extends Component {
	state = {
		players: [],
		creatures: [],
		selected: {
			type: null,
			id: null
		}
	}

	async componentDidMount() {
		const players = await fetch("http://localhost:4000/api/v1/players").then(r => r.json());
		const creatures = await fetch("http://localhost:4000/api/v1/creatures").then(r => r.json());

		this.setState({ players, creatures });
	}

	render() {
		return (
			<Fragment>
				<Router>
					<Fragment>
						<nav>
							<Link to="/">Encounter</Link>
							<Link to="/create">Create Character</Link>
						</nav>
						<Route exact path="/" render={() => <Encounter players={this.state.players} creatures={this.state.creatures} />} />
						<CreatureList />
					</Fragment>
				</Router>
			</Fragment>
		);
	}
}

export default App;
