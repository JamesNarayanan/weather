import React, { Component } from 'react';

class DayInfo extends Component {
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({width: window.innerWidth});
	}
	render() {
		function getWeekday(UNIX_timestamp){
			var date = new Date(UNIX_timestamp * 1000);
			var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			return days[date.getDay()];
		}

		var day = this.props.day;

		var temp = (day.apparentTemperatureHigh + day.apparentTemperatureLow) / 2;
		var windSpeed = day.windSpeed;
		var windSpeedUnit = "m/h";

		// var precipAccumulation = day.precipAccumulation ? day.precipAccumulation : 0;
		var precipAccumulation = day.precipAccumulation;
		var measurementUnit = "in";

		if(this.props.unit === "si") {
			temp = (temp - 32) * (5/9);

			windSpeed *= 2.237;
			windSpeedUnit = "m/s"

			precipAccumulation *= 2.54;
			measurementUnit = "cm";
		}
		var textSizing = "h1";
		if(this.state.width <= 767) {
			textSizing = this.state.width <= 575 ? "h4" : "h3";
		}

		return (
			<div className="row mx-2 mb-3">
				<div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column text-center text-md-left">
					<div className="display-4">{getWeekday(day.time)}</div>
					<div className="h3 text-capitalize">{day.precipProbability >= .3 ? day.precipType : ""}</div>
					<div className="display-1 mt-n3 mb-n2">{Math.round(temp)}°</div>
					<div>{day.summary}</div>
				</div>
				<div className={`col-12 col-md-6 ${textSizing} font-weight-normal d-flex flex-column text-center text-md-left`}>
					<div>Precipitation: {Math.round(day.precipProbability*100)}%</div>
					{precipAccumulation && day.precipType === "snow" && day.precipProbability >= .3 ? <div>Accumulation: {`${precipAccumulation.toFixed(2)} ${measurementUnit}`}</div> : ""}
					<div>Humidity: {Math.round(day.humidity*100)}%</div>
					<div>Wind Speed: {windSpeed.toFixed(2)} {windSpeedUnit}</div>
				</div>
				
			</div>
		);
	}
}

export default DayInfo;