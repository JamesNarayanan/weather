import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';
import Weather from './Weather';

class Schedule extends Component {
	constructor(props) {
		super(props)

		this.state = {};

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
			var time = weekDay + ', ' + date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
			return time;
		}

		Weather.searchWeather("New York").then(data => {
			this.setState({
				city: data.city,
				low: data.low,
				high: data.high,
				humidity: data.humidity,
				windSpeed: data.windSpeed,
				time: timeConverter(data.time)
			});
		});
	}

	render() {
		return (
			<div id="scheduleWrapper">
				<Day dow={this.state.time} low={this.state.low} high={this.state.high} unit="F" precip="rain"/>
				<Day dow="Tuesday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Wednesday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Thursday" low="50" high="60" unit="F" precip="rain"/>
				<Day dow="Friday" low="50" high="60" unit="F" precip="rain"/>
			</div>
		);
	}
}

export default Schedule;