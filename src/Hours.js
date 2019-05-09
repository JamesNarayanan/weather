import React, { Component } from 'react';
import Skycons from 'react-skycons';

class Hours extends Component {
	render() {
		if(this.props.type === "individual") {
			let hours = [];
			
			hours.push(
				<div className="col px-0 position-sticky d-flex flex-column align-items-center text-center border-right border-dark" style={{minWidth: "140px", left: 0, backgroundColor: "rgb(0,238,238)", zIndex: 1}}>
					<div className="w-75 border-bottom border-dark">Time</div>
					<div>AM/PM</div>
					<Skycons style={{width: "80px", height: "40px"}} color="white" icon={"CLOUDY"} autoplay={true}/>
					<div>Temp °{this.props.unit === "si" ? "C" : "F"}</div>
					<div className="w-100 border-top border-dark">Precip Chance</div>
					<div className="w-100 border-top border-dark">Humidity</div>
					<div className="w-100 border-top border-dark">Wind Speed {this.props.unit === "si" ? "m/s" : "m/h"}</div>
				</div>
			);

			for(let i = 0; i<this.props.hours.length; i++) {
				let hour = this.props.hours[i];
				let date = new Date(hour.time * 1000);
				let hourTime = date.getHours();
				let timePostFix = "AM";
				if(hourTime >= 12) {
					hourTime -= 12;
					timePostFix = "PM";
				}
				if(hourTime === 0)
					hourTime = 12;

				let temp = hour.apparentTemperature;
				let windSpeed = hour.windSpeed;
				if(this.props.unit === "si") {
					temp = (temp - 32) * (5/9);
					windSpeed /= 2.237;
				}
				
				let icon = hour.icon;
				function replaceAll(str, find, replace) {
					return str.replace(new RegExp(find, 'g'), replace);
				}
				icon = replaceAll(icon, "-","_");
				icon = icon.toUpperCase();

				hours.push(
					<div className={`col px-0 d-flex flex-column align-items-center text-center ${i !== this.props.hours.length - 1 ? "border-right border-dark" : ""}`} style={{minWidth: "65px"}}>
						<div className="w-75 border-bottom border-dark">{hourTime}</div>
						<div>{timePostFix}</div>
						<Skycons style={{width: "80px", height: "40px"}} color="white" icon={icon} autoplay={true}/>
						<div>{temp.toFixed(1)}°</div>
						<div className="w-100 border-top border-dark">{Math.round(hour.precipProbability*100)}%</div>
						<div className="w-100 border-top border-dark">{Math.round(hour.humidity*100)}%</div>
						<div className="w-100 border-top border-dark">{windSpeed.toFixed(2)}</div>
					</div>
				);
			}

			return (
				<div className="mb-3 d-flex flex-row border border-dark" style={{overflow: "scroll"}}>
					{hours}
				</div>
			);
		}
		else if(this.props.type === "graph") {
			let hours = [];

			let height = 100;
			let width = 10;
			for(let i = 0; i<this.props.hours.length; i++) {
				let temp = this.props.hours[i].apparentTemperature;
				hours.push(
					<div className="col m-0 p-0" style={{maxWidth: width, height: height}}>
						<svg style={{width: width, height: height}}>
							<circle cx={width/2} cy={height - temp} r={width/2 - .5} style={{fill: "rgba(0,0,0,.2)"}}/>
						</svg>
					</div>
				);
			};
			
			return (
				<div className="row p-2 flex-nowrap justify-content-center align-items-center">
					<div className="d-flex mr-3 flex-column justify-content-between text-right" style={{marginTop: -20, height: height + 15}}>
						<div>100°</div>
						<div>0°</div>
					</div>
					<div className="d-flex flex-column">
						<div className="row flex-nowrap border border-dark px-2" style={{height: height}}>
							{hours}
						</div>
						<div className="row justify-content-between">
							<div>Now</div>
							<div>48 h</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Hours;