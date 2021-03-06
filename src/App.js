import React, {Component} from "react";
import "./css/App.css";
import Schedule from "./components/Schedule";
import Hours from "./components/Hours";
import Minutes from "./components/Minutes";
import DayInfo from "./components/DayInfo";
import Weather from "./Weather";
import Loading from "./components/Loading";
import Settings from "./components/Settings";

import darkSkyLogo from "./img/darkSky.png";

class App extends Component {
	constructor(props) {
		super(props);

		this.handleDayClick = this.handleDayClick.bind(this);
		this.handleTempClick = this.handleTempClick.bind(this);
		this.handleHourlyClick = this.handleHourlyClick.bind(this);
		this.handleHourlyGraphTypeClick = this.handleHourlyGraphTypeClick.bind(
			this
		);
		this.handleMinutelyClick = this.handleMinutelyClick.bind(this);
		this.getLocation = this.getLocation.bind(this);
		this.getCurrentLocation = this.getCurrentLocation.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);

		function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(";");
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) === " ") {
					c = c.substring(1);
				}
				if (c.indexOf(name) === 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}

		var lat = getCookie("lat");
		var lon = getCookie("lon");

		var unit = getCookie("unit");
		if (unit === "") unit = "im";

		var hourlyType = getCookie("hourlyType") || "individual";
		var hourlyGraphType = parseInt(getCookie("hourlyGraphType")) || 0;
		var minutelyType = getCookie("minutelyType") || "individual";

		if (lat && lon) {
			this.state = {
				selectedDay: 0,
				unit: unit,
				haveLocation: true,
				lat: lat,
				lon: lon,
				type: {
					hourly: hourlyType,
					minutely: minutelyType,
					hourlyGraph: hourlyGraphType
				}
			};
			this.getLocation();
		} else
			this.state = {
				selectedDay: 0,
				unit: unit,
				haveLocation: false,
				lat: "",
				lon: "",
				type: {
					hourly: hourlyType,
					minutely: minutelyType,
					hourlyGraph: hourlyGraphType
				}
			};
	}

	handleDayClick(dayNumber) {
		this.setState({selectedDay: dayNumber});
	}

	handleTempClick(choice) {
		this.setState({unit: choice === "F" ? "im" : "si"});
		document.cookie = "unit=" + (choice === "F" ? "im" : "si");
	}

	handleHourlyClick(choice) {
		this.setState({
			type: {
				hourly: choice,
				minutely: this.state.type.minutely,
				hourlyGraph: this.state.type.hourlyGraph
			}
		});
		document.cookie = "hourlyType=" + choice;
	}
	handleHourlyGraphTypeClick(choice) {
		this.setState({
			type: {
				hourly: this.state.type.hourly,
				minutely: this.state.type.minutely,
				hourlyGraph: choice
			}
		});
		document.cookie = "hourlyGraphType=" + choice;
	}

	handleMinutelyClick(choice) {
		this.setState({
			type: {
				hourly: this.state.type.hourly,
				minutely: choice,
				hourlyGraph: this.state.type.hourlyGraph
			}
		});
		document.cookie = "minutelyType=" + choice;
	}

	getLocation() {
		var lat = this.state.lat;
		var lon = this.state.lon;
		if (!lat || !lon) return;
		this.setState({haveLocation: true});
		Weather.searchWeather(lat, lon).then(data => {
			if (data == null) {
				this.setState({haveLocation: false});
				document.getElementById("console").style.display = "block";
				document.getElementById("console").innerHTML =
					"Invalid Location";
			} else {
				this.setState({
					days: data.days.data,
					hours: data.hours.data,
					minutes: data.minutes.data
				});
				document.cookie = "lat=" + this.state.lat;
				document.cookie = "lon=" + this.state.lon;
			}
		});
	}

	getCurrentLocation() {
		this.setState({haveLocation: true});
		navigator.geolocation.getCurrentPosition(position => {
			this.setState({
				lat: position.coords.latitude,
				lon: position.coords.longitude
			});
			this.getLocation();
		});
	}

	handleKeyPress(event) {
		if (event.key === "Enter") this.getLocation();
	}

	render() {
		function DarkSkyLogo(props) {
			return (
				<a
					href="https://darksky.net/poweredby/"
					target="_blank"
					rel="noopener noreferrer"
					className="d-none d-sm-block"
				>
					<img
						src={darkSkyLogo}
						alt="Dark Sky Logo"
						id="darkSkyLogo"
						className="mt-3 mr-3 rounded"
					></img>
				</a>
			);
		}

		if (!this.state.haveLocation) {
			return (
				<div className="container-fluid d-flex flex-column align-items-center">
					<div id="console"></div>
					<button
						className="btn mt-3 bg-shade"
						onClick={this.getCurrentLocation}
					>
						Get Current Location
					</button>
					<div className="m-4">Or</div>
					<div className="container p-3 d-flex flex-column align-items-center bg-shade">
						<div>Enter a location</div>
						<div className="row my-2">
							<input
								className="col-12 col-md mx-md-2 px-2 py-1 border-0 bg-shade"
								placeholder="Latitude"
								type="number"
								value={this.state.lat}
								onChange={event =>
									Math.abs(event.target.value) > 180
										? this.setState({
												lat:
													(event.target.value /
														Math.abs(
															event.target.value
														)) *
													180
										  })
										: this.setState({
												lat: event.target.value
										  })
								}
								onKeyPress={this.handleKeyPress}
							></input>
							<input
								className="col-12 col-md mx-md-2 mt-1 mt-md-0 px-2 py-1 border-0 bg-shade"
								placeholder="Longitude"
								type="number"
								value={this.state.lon}
								onChange={event =>
									Math.abs(event.target.value) > 180
										? this.setState({
												lon:
													(event.target.value /
														Math.abs(
															event.target.value
														)) *
													180
										  })
										: this.setState({
												lon: event.target.value
										  })
								}
								onKeyPress={this.handleKeyPress}
							></input>
						</div>
						<button
							className="btn bg-shade"
							onClick={this.getLocation}
						>
							Submit
						</button>
					</div>
					<DarkSkyLogo />
				</div>
			);
		} else if (this.state.days) {
			return (
				<div className="container-fluid p-3 d-flex flex-column justify-content-center align-items-center">
					<Settings
						hourlyType={this.state.type.hourly}
						hourlyGraphType={this.state.type.hourlyGraph}
						minutelyType={this.state.type.minutely}
						onTempClick={this.handleTempClick}
						onHourlyClick={this.handleHourlyClick}
						onHourlyGraphTypeClick={this.handleHourlyGraphTypeClick}
						onMinutelyClick={this.handleMinutelyClick}
						unit={this.state.unit}
					/>

					<div className="container h-auto mt-4 p-3 d-flex flex-column border border-dark rounded">
						<div className="display-3 text-center mb-1">Weekly</div>
						<DayInfo
							day={this.state.days[this.state.selectedDay]}
							unit={this.state.unit}
						/>
						<Schedule
							days={this.state.days}
							onDayClick={this.handleDayClick}
							selectedDay={this.state.selectedDay}
							unit={this.state.unit}
						/>
					</div>

					<div className="container px-3 pb-3 h-auto mt-4 border border-dark rounded">
						<div className="display-3 text-center mb-1">Hourly</div>
						<Hours
							hours={this.state.hours}
							unit={this.state.unit}
							type={this.state.type.hourly}
							graphType={this.state.type.hourlyGraph}
						/>
					</div>
					<div className="container px-3 pb-3 h-auto mt-4 border border-dark rounded">
						<div className="display-3 text-center mb-1">
							Minutely
						</div>
						<Minutes minutes={this.state.minutes} />
					</div>
					<DarkSkyLogo />
				</div>
			);
		} else {
			return <Loading />;
		}
	}
}

export default App;
