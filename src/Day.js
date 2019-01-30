import React, { Component } from 'react';
import './Day.css';

class Day extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="dayWrapper">
				<div id="dow">{this.props.dow}</div>
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