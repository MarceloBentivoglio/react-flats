import React, { Component } from 'react';

import Flat from './flat.jsx';

const FlatList = (props) => {

		return (
			<div className="flat-list">
				{props.flats.map(flat => 
					<Flat 
					  flat={flat.flat} 
					  key={flat.lat}
					  imageUrl={flat.imageUrl} 
					/>
				)}
			</div>
		);
};

export default FlatList;