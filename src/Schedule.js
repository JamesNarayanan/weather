import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';
import Weather from './Weather';

class Schedule extends Component {
	constructor(props) {
		super(props)

		var filler = [];
		for(var i = 0; i<8; i++)
			filler.push({});
		this.state = {days: filler};

		Weather.searchWeather("New York").then(data => {
			this.setState({days: data});
		});
	}

	render() {
		return (
			<div id="scheduleWrapper">
				<Day time={this.state.days[0].time} low={this.state.days[0].low} high={this.state.days[0].high} unit="F" precip="rain"/>
				<Day time={this.state.days[1].time} low={this.state.days[1].low} high={this.state.days[1].high} unit="F" precip="rain"/>
				<Day time={this.state.days[2].time} low={this.state.days[2].low} high={this.state.days[2].high} unit="F" precip="rain"/>
				<Day time={this.state.days[3].time} low={this.state.days[3].low} high={this.state.days[3].high} unit="F" precip="rain"/>
				<Day time={this.state.days[4].time} low={this.state.days[4].low} high={this.state.days[4].high} unit="F" precip="rain"/>
			</div>
		);
	}
}

export default Schedule;