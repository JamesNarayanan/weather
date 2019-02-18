import React, { Component } from 'react';
import './App.css';
import Schedule from './Schedule';
import DayInfo from './DayInfo';
import Weather from './Weather';
import Loading from './Loading';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {selectedDay: 0, haveLocation: false};

		this.handleDayClick = this.handleDayClick.bind(this);
		this.getLocation = this.getLocation.bind(this);
		this.getCurrentLocation = this.getCurrentLocation.bind(this);
	}

	handleDayClick(dayNumber) {
		this.setState({selectedDay: dayNumber});
	}

	getLocation(lat, lon) {
		this.setState({haveLocation: true});
		Weather.searchWeather(lat, lon).then(data => {
			this.setState({days: data});
		});
	}

	getCurrentLocation() {
		this.setState({haveLocation: true});
		var lat, lon;
		navigator.geolocation.getCurrentPosition(position => {
			lat = position.coords.latitude;
			lon = position.coords.longitude;
			Weather.searchWeather(lat, lon).then(data => {
				this.setState({days: data});
			});
		});
	}

	render() {
		if(!this.state.haveLocation) {
			return (
				<div id="getLocWrapper" className="wrapper">
					<div onClick={this.getCurrentLocation} id="getCurLocBtn">Get Current Location</div>
				</div>
			);
		} else if(this.state.days) {
			return (
				<div className="wrapper">
					<div id="appContainer">
						<DayInfo day={this.state.days[this.state.selectedDay]}/>
						<Schedule days={this.state.days} onDayClick={this.handleDayClick} selectedDay={this.state.selectedDay}/>
					</div>
				</div>
			);
		} else {
			return <Loading/>;
		}
	}
}

export default App;