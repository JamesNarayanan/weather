import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';

class Schedule extends Component {
	render() {
		return (
			<div id="scheduleWrapper">
				<Day time={this.props.days[0].time} low={this.props.days[0].low} high={this.props.days[0].high} precipType={this.props.days[0].precipType}/>
				<Day time={this.props.days[1].time} low={this.props.days[1].low} high={this.props.days[1].high} precipType={this.props.days[1].precipType}/>
				<Day time={this.props.days[2].time} low={this.props.days[2].low} high={this.props.days[2].high} precipType={this.props.days[2].precipType}/>
				<Day time={this.props.days[3].time} low={this.props.days[3].low} high={this.props.days[3].high} precipType={this.props.days[3].precipType}/>
				<Day time={this.props.days[4].time} low={this.props.days[4].low} high={this.props.days[4].high} precipType={this.props.days[4].precipType}/>
				<Day time={this.props.days[5].time} low={this.props.days[5].low} high={this.props.days[5].high} precipType={this.props.days[5].precipType}/>
				<Day time={this.props.days[6].time} low={this.props.days[6].low} high={this.props.days[6].high} precipType={this.props.days[6].precipType}/>
				<Day time={this.props.days[7].time} low={this.props.days[7].low} high={this.props.days[7].high} precipType={this.props.days[7].precipType}/>
			</div>
		);
	}
}

export default Schedule;