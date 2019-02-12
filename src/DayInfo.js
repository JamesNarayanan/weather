import React, { Component } from 'react';

class DayInfo extends Component {
    render() {
        function getWeekday(UNIX_timestamp){
			var date = new Date(UNIX_timestamp * 1000);
			var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			return days[date.getUTCDay()];
        }
        
        return (
            <div id="dayInfoWrapper">
                {getWeekday(this.props.day.time)}
            </div>
        );
    }
}

export default DayInfo;