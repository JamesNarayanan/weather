import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';

class Schedule extends Component {
	render() {
		var days = [];
		for(var i = 0; i<this.props.days.length; i++){
			days.push(<Day dayNum={i} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick} unit={this.props.unit}/>);
		};
		
		return (
			<div id="scheduleWrapper">
				{days}
			</div>
		);
	}
}

export default Schedule;