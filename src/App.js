import React, { Component } from 'react';
import './App.css';
import Day from './Day';

class App extends Component {
	render() {
		return (
			<div id="appWrapper">
				<Day dow="Monday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Monday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Monday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Monday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Monday" low="50" high="60" unit="F" precip="rain"/>
			</div>
		);
	}
}

export default App;