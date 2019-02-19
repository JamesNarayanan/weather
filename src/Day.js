import React, { Component } from 'react';
import Skycons from 'react-skycons';
import './Day.css';

class Day extends Component {
	render() {
		function getWeekday(UNIX_timestamp){
			var date = new Date(UNIX_timestamp * 1000);
			var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
			return days[date.getUTCDay()];
		}

		var day = this.props.days[this.props.dayNum];

		var iconName = day.iconName;
		function replaceAll(str, find, replace) {
			return str.replace(new RegExp(find, 'g'), replace);
		}
		iconName = replaceAll(iconName, "-","_");
		iconName = iconName.toUpperCase();

		var high = day.high;
		var low = day.low;

		if(this.props.unit === "si") {
			high = (high - 32) * (5/9);
			low = (low - 32) * (5/9);
		}

		return (
			<div id="dayWrapper" onClick={()=>this.props.onClick(this.props.dayNum)} style={{backgroundColor: this.props.selectedDay === this.props.dayNum ? "rgba(0,0,0,.2)" : "transparent"}}>
				<div id="time">{getWeekday(day.time)}</div>
				<br/>
				<Skycons height="75px" width="100%" color="white" icon={iconName} autoplay={true}/>
				<div id="temps">
					<div id="high">{Math.round(high)}°</div> &nbsp;&nbsp; <div id="low">{Math.round(low)}°</div>
				</div>
				<br/>
			</div>
		);
	}
}

export default Day;