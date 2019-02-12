import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
	render() {
		function timeConverter(UNIX_timestamp){
			var a = new Date(UNIX_timestamp * 1000);
			var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
			var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
			var year = a.getFullYear();
			var month = months[a.getMonth()];
			var date = a.getDate();
			var hour = a.getHours();
			var min = a.getMinutes();
			var sec = a.getSeconds();
			var weekDay = days[a.getUTCDay()];
			// var time = weekDay + ', ' + date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
			return {
				weekDay: weekDay,
				date: date,
				month: month,
				year: year,
				hour: hour,
				min: min,
				sec: sec
			};
		}

		return (
			<div id="dayWrapper">
				<div id="time">{timeConverter(this.props.time).weekDay}</div>
				<br/>
				<div id="temps">
					<div id="high">{this.props.high}°{this.props.unit}</div> &nbsp;&nbsp; <div id="low">{this.props.low}°{this.props.unit}</div>
				</div>
				<br/>
				<div id="precip">{this.props.precip}</div> 
			</div>
		);
	}
}

export default Day;