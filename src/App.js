import React, { Component } from 'react';
import './App.css';
import Schedule from './Schedule';

class App extends Component {
	render() {
		return (
			<div id="appWrapper">
				<Schedule/>
			</div>
		);
	}
}

export default App;