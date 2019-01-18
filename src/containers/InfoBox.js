import React from 'react'
import Details from '../components/Details'
import { Segment } from 'semantic-ui-react'

const InfoBox = (props) => {

  const renderSomething = () => props.creature
    ? <Details creature={props.creature}/>
    : <Segment placeholder></Segment>
  return (
    <div>
      {renderSomething()}
    </div>
  )
}

export default InfoBox
