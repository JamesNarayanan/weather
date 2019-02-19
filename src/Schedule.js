import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';

class Schedule extends Component {
	render() {
		return (
			<div id="scheduleWrapper">
				<Day dayNum={0} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick} unit={this.props.unit}/>
				<Day dayNum={1} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick} unit={this.props.unit}/>
				<Day dayNum={2} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick} unit={this.props.unit}/>
				<Day dayNum={3} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick} unit={this.props.unit}/>
				<Day dayNum={4} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick} unit={this.props.unit}/>
				<Day dayNum={5} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick} unit={this.props.unit}/>
				<Day dayNum={6} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick} unit={this.props.unit}/>
				<Day dayNum={7} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick} unit={this.props.unit}/>
			</div>);
	}
}

export default Schedule;