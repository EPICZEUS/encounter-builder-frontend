import React from 'react'
import { Form, Segment, Button } from 'semantic-ui-react'

class NewPlayer extends React.Component {

  state = {
    name: '',
    race: '',
    player_class: '',
    level: 1,
    hp: 0,
    ac: 0,
    speed: '',
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    fetch('http://localhost:4000/api/v1/players', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(this.state)
    })
  }

  render () {
    return (
      <Segment >
        <Form style={{ maxWidth: 700 }} onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input
              name='name'
              label='Name'
              placeholder='Name'
              onChange={this.handleChange}
             />
            <Form.Input
              name='race'
              label='Race'
              placeholder='Race'
              onChange={this.handleChange}
             />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              name='player_class'
              label='Class'
              placeholder='Class'
              onChange={this.handleChange}
             />
            <Form.Input
              name='level'
              label='Level'
              placeholder='Level'
              onChange={this.handleChange}
             />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              name='hp'
              label='Hit Points'
              placeholder='Hit Points'
              onChange={this.handleChange}
             />
            <Form.Input
              name='ac'
              label='Armor Class'
              placeholder='Armor Class'
              onChange={this.handleChange}
             />
            <Form.Input
              name='speed'
              label='Speed'
              placeholder='Speed'
              onChange={this.handleChange}
             />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              name='str'
              label='Strength'
              placeholder='Strength'
              onChange={this.handleChange}
             />
            <Form.Input
              name='dex'
              label='Dexterity'
              placeholder='Dexterity'
              onChange={this.handleChange}
             />
            <Form.Input
              name='con'
              label='Constitution'
              placeholder='Constitution'
              onChange={this.handleChange}
             />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input
              name='int'
              label='Intelligence'
              placeholder='Intelligence'
              onChange={this.handleChange}
             />
            <Form.Input
              name='wis'
              label='Wisdom'
              placeholder='Wisdom'
              onChange={this.handleChange}
             />
            <Form.Input
              name='cha'
              label='Charisma'
              placeholder='Charisma'
              onChange={this.handleChange}
             />
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default NewPlayer;
