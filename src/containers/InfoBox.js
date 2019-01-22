/* eslint-disable no-unused-vars */
import React from 'react';
import Details from '../components/Details';
import { Segment } from 'semantic-ui-react';
/* eslint-disable no-unused-vars */

const InfoBox = props => {
	const renderSomething = () => props.creature
		? <Details creature={props.creature} addToEncounter={props.addToEncounter}/>
		: <Segment placeholder></Segment>;
	return (
		<div>
			{renderSomething()}
		</div>
	);
};

export default InfoBox;
