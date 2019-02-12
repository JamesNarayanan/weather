import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
	render() {
		function getWeekday(UNIX_timestamp){
			var date = new Date(UNIX_timestamp * 1000);
			var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
			return days[date.getUTCDay()];
		}

		var precip = this.props.day.precipType === undefined ? "Clear" : this.props.day.precipType;
		precip = precip.charAt(0).toUpperCase() + precip.slice(1);

		return (
			<div id="dayWrapper" onClick={this.props.onClick}>
				<div id="time">{getWeekday(this.props.day.time)}</div>
				<br/>
				<div id="temps">
					<div id="high">{Math.round(this.props.day.high)}°</div> &nbsp;&nbsp; <div id="low">{Math.round(this.props.day.low)}°</div>
				</div>
				<br/>
				<div id="precip">{precip}</div>
			</div>
		);
	}
}

export default Day;