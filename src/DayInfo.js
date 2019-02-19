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
				<div id="left">
					<div id="dow">{getWeekday(this.props.day.time)}</div>
					<div id="precipType">{this.props.day.precipProb >= .3 ? this.props.day.precipType : ""}</div>
					<div id="temp">{Math.round((this.props.day.apparentHigh + this.props.day.apparentLow) / 2)}°</div>
					<div id="summary">{this.props.day.summary}</div>
				</div>
				<div id="right">
					<div>Precipitation: {Math.round(this.props.day.precipProb*100)}%</div>
					<div>Humidity: {Math.round(this.props.day.humidity*100)}%</div>
					<div>Wind Speed: {this.props.day.windSpeed} mph</div>
				</div>
				
			</div>
		);
	}
}

export default DayInfo;