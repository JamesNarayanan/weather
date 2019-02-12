import React, { Component } from 'react';
import './DayInfo.css';

class DayInfo extends Component {
	render() {
		function getWeekday(UNIX_timestamp){
			var date = new Date(UNIX_timestamp * 1000);
			var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			return days[date.getUTCDay()];
		}
		
		return (
			<div id="dayInfoWrapper">
				<div id="dow">{getWeekday(this.props.day.time)}</div>
				<div id="temp">{Math.round((this.props.day.apparentHigh + this.props.day.apparentLow) / 2)}°</div>
				<div id="summary">{this.props.day.summary}</div>
			</div>
		);
	}
}

export default DayInfo;