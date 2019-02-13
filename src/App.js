import React, { Component } from 'react';
import './App.css';
import Schedule from './Schedule';
import DayInfo from './DayInfo';
import Weather from './Weather';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {selectedDay: 0};

		var loading = setInterval(function() {
			let dots = document.getElementById("dots").innerHTML;
			if(dots.length >= 3) {
				document.getElementById("dots").innerHTML = "";
			}
			else {
				document.getElementById("dots").innerHTML = dots + ".";
			}
		}, 200);

		var lat, lon;
		navigator.geolocation.getCurrentPosition(position => {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			Weather.searchWeather(lat, lon).then(data => {
				this.setState({days: data});
			});
			clearInterval(loading);
		});

		this.handleDayClick = this.handleDayClick.bind(this);
	}

	handleDayClick(dayNumber) {
		this.setState({selectedDay: dayNumber});
	}

	render() {
		if(this.state.days) {
			return (
				<div id="appWrapper">
					<div id="appContainer">
						<DayInfo day={this.state.days[this.state.selectedDay]}/>
						<Schedule days={this.state.days} onDayClick={this.handleDayClick} selectedDay={this.state.selectedDay}/>
					</div>
				</div>
			);
		} else {
			return (
				<div id="loadingWrapper">
					<div id="loading">Loading<span id="dots"></span></div>
				</div>
			);
		}
	}
}

export default App;