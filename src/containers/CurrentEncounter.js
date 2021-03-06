/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Creature from "../components/Creature";
import Player from "../components/Player";
import { Segment, Form, Card, Grid, Header, Dropdown, Menu, Button } from "semantic-ui-react";
/* eslint-disable no-unused-vars */

class CurrentEncounter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			description: ''
		};
	}

	handleChange = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({ [name]: value });
	}

	handleSubmit = () => {
		const data = {
			name: this.state.name,
			description: this.state.description,
			player_ids: this.props.players.map(player => player.id),
			creature_ids: this.props.creatures.map(creature => creature.id)
		};

		if (this.props.selected) {
			fetch(`http://localhost:3000/api/v1/encounters/${this.props.selected}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify(data)
			});
		} else {
			fetch("http://localhost:3000/api/v1/encounters", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json"
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(encounter => this.props.handleSave(encounter.id, encounter.name));
		}
	}

	handleDelete = () => {
		if (this.props.selected) {
			fetch(`http://localhost:3000/api/v1/encounters/${this.props.selected}`, { method: "DELETE" })
				.then(() => this.props.handleDeselect());
		}
	}

	handleClear = () => {
		this.setState({
			name: '',
			description: ''
		}, () => this.props.handleDeselect());
	}

	render () {
		const selectedEncounter = this.props.encounters.find(e => e.id === this.props.selected);
		return (
			<div>
				<Segment>
					<Menu secondary>
						<Dropdown item
							text="Saved Encounters"
							options={this.props.options}
							value={this.props.selected}
							onChange={(_, { value }) => this.props.handleEncounterSelect(value)}
						/>
					<Menu.Item name="new" onClick={this.handleClear} />
					</Menu>
				</Segment>
				<Segment>
					<Form onSubmit={this.handleSubmit}>
						<Form.Input
							name="name"
							label="Name"
							placeholder="Name"
							value={this.props.selected ? selectedEncounter.name : this.state.name}
							onChange={this.handleChange}
						/>
						<Form.TextArea
							name="description"
							label="Description"
							placeholder="Description of the enounter, enemies, loot, notes, etc..."
							value={this.props.selected ? selectedEncounter.description : this.state.description}
							onChange={this.handleChange}
						/>
						<Form.Group>
							<Form.Button>Save</Form.Button>
							<Button secondary
								onClick={this.handleDelete}>Delete</Button>
						</Form.Group>
					</Form>
				</Segment>
				<Segment>
					<Grid columns={2} divided>
						<Grid.Row>
							<Grid.Column>
								<Header as="h3" dividing>
                  Players
								</Header>
								<Card.Group itemsPerRow={1}>
									{this.props.players.map(player => <Player key={player.id} {...player} />)}
								</Card.Group>
							</Grid.Column>
							<Grid.Column>
								<Header as="h3" dividing>
                  Creatures
								</Header>
								<Card.Group itemsPerRow={1}>
									{this.props.creatures.map(creature => <Creature key={creature.id} {...creature} />)}
								</Card.Group>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
			</div>
		);
	}
}

export default CurrentEncounter;
