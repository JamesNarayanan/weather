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
					<Day time={this.state.days[0].time} low={this.state.days[0].low} high={this.state.days[0].high} precipType={this.state.days[0].precipType}/>
					<Day time={this.state.days[1].time} low={this.state.days[1].low} high={this.state.days[1].high} precipType={this.state.days[1].precipType}/>
					<Day time={this.state.days[2].time} low={this.state.days[2].low} high={this.state.days[2].high} precipType={this.state.days[2].precipType}/>
					<Day time={this.state.days[3].time} low={this.state.days[3].low} high={this.state.days[3].high} precipType={this.state.days[3].precipType}/>
					<Day time={this.state.days[4].time} low={this.state.days[4].low} high={this.state.days[4].high} precipType={this.state.days[4].precipType}/>
					<Day time={this.state.days[5].time} low={this.state.days[5].low} high={this.state.days[5].high} precipType={this.state.days[5].precipType}/>
					<Day time={this.state.days[6].time} low={this.state.days[6].low} high={this.state.days[6].high} precipType={this.state.days[6].precipType}/>
					<Day time={this.state.days[7].time} low={this.state.days[7].low} high={this.state.days[7].high} precipType={this.state.days[7].precipType}/>
				</div>
			);
		}
		else {
			return null;
		}
	}
}

export default Schedule;