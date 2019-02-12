import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';

class Schedule extends Component {
	render() {
		return (
			<div id="scheduleWrapper">
				<Day day={this.props.days[0]} onClick={()=>this.props.onDayClick(0)}/>
				<Day day={this.props.days[1]} onClick={()=>this.props.onDayClick(1)}/>
				<Day day={this.props.days[2]} onClick={()=>this.props.onDayClick(2)}/>
				<Day day={this.props.days[3]} onClick={()=>this.props.onDayClick(3)}/>
				<Day day={this.props.days[4]} onClick={()=>this.props.onDayClick(4)}/>
				<Day day={this.props.days[5]} onClick={()=>this.props.onDayClick(5)}/>
				<Day day={this.props.days[6]} onClick={()=>this.props.onDayClick(6)}/>
				<Day day={this.props.days[7]} onClick={()=>this.props.onDayClick(7)}/>
			</div>
		);
	}
}

export default Schedule;