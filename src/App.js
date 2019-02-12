import React, { Component } from 'react';
import './App.css';
import Schedule from './Schedule';
import Weather from './Weather';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};

		Weather.searchWeather("New York").then(data => {
			this.setState({days: data});
		});
	}

	render() {
		if(this.state.days) {
			return (
				<div id="appWrapper">
					<Schedule days={this.state.days}/>
				</div>
			);
		} else {return null;}
	}
}

export default App;