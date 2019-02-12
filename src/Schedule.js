import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';

class Schedule extends Component {
	render() {
		return (
			<div id="scheduleWrapper">
				<Day dayNum={0} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick}/>
				<Day dayNum={1} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick}/>
				<Day dayNum={2} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick}/>
				<Day dayNum={3} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick}/>
				<Day dayNum={4} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick}/>
				<Day dayNum={5} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick}/>
				<Day dayNum={6} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick}/>
				<Day dayNum={7} days={this.props.days} selectedDay={this.props.selectedDay} onClick={this.props.onDayClick}/>
			</div>);
	}
}

export default Schedule;