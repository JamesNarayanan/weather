import React, { Component } from 'react';
import './App.css';
import Schedule from './Schedule';
import DayInfo from './DayInfo';
import Weather from './Weather';
import Loading from './Loading';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {selectedDay: 0, haveLocation: false, lat: '', lon: ''};

		this.handleDayClick = this.handleDayClick.bind(this);
		this.getLocation = this.getLocation.bind(this);
		this.getCurrentLocation = this.getCurrentLocation.bind(this);
	}

	handleDayClick(dayNumber) {
		this.setState({selectedDay: dayNumber});
	}

	getLocation() {
		var lat = this.state.lat;
		var lon = this.state.lon;
		if(!lat || !lon)
			return;
		this.setState({haveLocation: true});
		Weather.searchWeather(lat, lon).then(data => {
			this.setState({days: data});
		});
	}

	getCurrentLocation() {
		navigator.geolocation.getCurrentPosition(position => {
			this.setState({lat: position.coords.latitude, lon: position.coords.longitude});
			this.getLocation();
		});
	}

	render() {
		if(!this.state.haveLocation) {
			return (
				<div id="getLocWrapper" className="wrapper">
					<div onClick={this.getCurrentLocation} className="button">Get Current Location</div>
					<div style={{margin: "20px"}}>Or</div>
					<div id="otherLoc">
						<div>Enter a location</div>
						<div>
							<input placeholder="Latitude" type="number" value={this.state.lat} onChange={event => this.setState({lat: event.target.value})}></input>
							<input placeholder="Longitude" type="number" value={this.state.lon} onChange={event => this.setState({lon: event.target.value})}></input>
						</div>
						<div onClick={this.getLocation} className="button" style={{marginTop: "10px"}}>Submit</div>
					</div>
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