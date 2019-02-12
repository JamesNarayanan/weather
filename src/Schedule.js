import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';
import Weather from './Weather';

class Schedule extends Component {
	constructor(props) {
		super(props)

		Weather.searchWeather("New York").then(data => {
			this.setState({days: data});
		});
	}

	render() {
		if(this.state) {
			return (
				<div id="scheduleWrapper">
					<Day time={this.state.days[0].time} low={this.state.days[0].low} high={this.state.days[0].high} unit="F" precipType={this.state.days[0].precipType} precipProb={this.state.days[0].precipProb}/>
					<Day time={this.state.days[1].time} low={this.state.days[1].low} high={this.state.days[1].high} unit="F" precipType={this.state.days[1].precipType} precipProb={this.state.days[1].precipProb}/>
					<Day time={this.state.days[2].time} low={this.state.days[2].low} high={this.state.days[2].high} unit="F" precipType={this.state.days[2].precipType} precipProb={this.state.days[2].precipProb}/>
					<Day time={this.state.days[3].time} low={this.state.days[3].low} high={this.state.days[3].high} unit="F" precipType={this.state.days[3].precipType} precipProb={this.state.days[3].precipProb}/>
					<Day time={this.state.days[4].time} low={this.state.days[4].low} high={this.state.days[4].high} unit="F" precipType={this.state.days[4].precipType} precipProb={this.state.days[4].precipProb}/>
				</div>
			);
		}
		else {
			return null;
		}
	}
}

export default Schedule;