import React, { Component } from 'react';
import './App.css';
import Schedule from './Schedule';
import DayInfo from './DayInfo';
import Weather from './Weather';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {selectedDay: 0};

		Weather.searchWeather("New York").then(data => {
			this.setState({days: data});
		});

		this.handleDayClick = this.handleDayClick.bind(this);
	}

	handleDayClick(dayNumber) {
		this.setState({selectedDay: dayNumber});
		console.log(dayNumber);
	}

	render() {
		if(this.state.days) {
			return (
				<div id="appWrapper">
					<DayInfo day={this.state.days[this.state.selectedDay]}/>
					<Schedule days={this.state.days} onDayClick={this.handleDayClick} selectedDay={this.selectedDay}/>
				</div>
			);
		} else {return null;}
	}
}

export default App;