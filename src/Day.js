import React, { Component } from 'react';
import Skycons from 'react-skycons';
import './Day.css';

class Day extends Component {
	render() {
		function getWeekday(UNIX_timestamp){
			var date = new Date(UNIX_timestamp * 1000);
			var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
			return days[date.getDay()];
		}

		var day = this.props.days[this.props.dayNum];

		var iconName = day.icon;
		function replaceAll(str, find, replace) {
			return str.replace(new RegExp(find, 'g'), replace);
		}
		iconName = replaceAll(iconName, "-","_");
		iconName = iconName.toUpperCase();

		var high = day.apparentTemperatureMax;
		var low = day.apparentTemperatureMin;

		if(this.props.unit === "si") {
			high = (high - 32) * (5/9);
			low = (low - 32) * (5/9);
		}

		// Also change formatting to be a container with rows and columns
		return (
			<div id="dayWrapper" className="m-2 px-0 py-2 d-flex flex-column align-items-center rounded" onClick={()=>this.props.onClick(this.props.dayNum)} style={{backgroundColor: this.props.selectedDay === this.props.dayNum ? "rgba(0,0,0,.2)" : "", width: "100px"}}>
				<div className="h5 mb-0">{getWeekday(day.time)}</div>
				<Skycons className="w-100 h-auto my-2" color="white" icon={iconName} autoplay={true}/>
				<div className="my-0 d-flex h6">
					<div>{Math.round(high)}°</div> &nbsp;&nbsp; <div className="text-muted">{Math.round(low)}°</div>
				</div>
			</div>
		);
	}
}

export default Day;