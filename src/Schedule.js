import React, { Component } from 'react';
import './Schedule.css';
import Day from './Day';

class Schedule extends Component {
    render() {
        return (
            <div id="scheduleWrapper">
                <Day dow="Monday" low="50" high="60" unit="F" precip="rain"/>
                <Day dow="Tuesday" low="50" high="60" unit="F" precip="rain"/>
                <Day dow="Wednesday" low="50" high="60" unit="F" precip="rain"/>
                <Day dow="Thursday" low="50" high="60" unit="F" precip="rain"/>
                <Day dow="Friday" low="50" high="60" unit="F" precip="rain"/>
            </div>
        );
    }
}

export default Schedule;