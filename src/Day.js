import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
	render() {
		function getWeekday(UNIX_timestamp){
			var date = new Date(UNIX_timestamp * 1000);
			var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
			return days[date.getUTCDay()];
		}

		var day = this.props.days[this.props.dayNum];

		var precip = day.precipType === undefined ? "Clear" : day.precipType;
		precip = precip.charAt(0).toUpperCase() + precip.slice(1);

		return (
			<div id="dayWrapper" onClick={()=>this.props.onClick(this.props.dayNum)} style={{backgroundColor: parseInt(this.props.selectedDay) === parseInt(this.props.dayNum) ? "rgba(0,0,0,.2)" : "transparent"}}>
				<div id="time">{getWeekday(day.time)}</div>
				<br/>
				<div id="temps">
					<div id="high">{Math.round(day.high)}°</div> &nbsp;&nbsp; <div id="low">{Math.round(day.low)}°</div>
				</div>
				<br/>
				<div id="precip">{precip}</div>
			</div>
		);
	}
}

export default Day;