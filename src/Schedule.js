import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';
import Weather from './Weather';

class Schedule extends Component {
	constructor(props) {
		super(props)

		this.state = {
			city: "",
			low: "",
			high: "",
			humidity: "",
			windSpeed: ""
		};

		Weather.searchWeather("New York").then(data => {
			this.setState({
				city: data.city,
				low: data.low,
				high: data.high,
				humidity: data.humidity,
				windSpeed: data.windSpeed
			});
		});
	}

	render() {
		return (
			<div id="scheduleWrapper">
				<Day dow="Monday" low={this.state.low} high={this.state.high} unit="F" precip="rain"/>
				<Day dow="Tuesday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Wednesday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Thursday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Friday" low="50" high="60" unit="F" precip="rain"/>
			</div>
		);
	}
}

export default Schedule;