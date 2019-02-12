import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
	render() {
		function getWeekday(UNIX_timestamp){
			var date = new Date(UNIX_timestamp * 1000);
			var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
			return days[date.getUTCDay()];
		}

		var precip = this.props.precipType === undefined ? "Clear" : this.props.precipType;
		precip = precip.charAt(0).toUpperCase() + precip.slice(1);

		return (
			<div id="dayWrapper">
				<div id="time">{getWeekday(this.props.time)}</div>
				<br/>
				<div id="temps">
					<div id="high">{Math.round(this.props.high)}°</div> &nbsp;&nbsp; <div id="low">{Math.round(this.props.low)}°</div>
				</div>
				<br/>
				<div id="precip">{precip}</div>
			</div>
		);
	}
}

export default Day;