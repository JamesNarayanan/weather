import React, { Component } from 'react';

class Hours extends Component {
	render() {
		if(this.props.type === "individual") {
			return (
				<div className="text-center m-2">
					Hourly Forecast
				</div>
			);
		}
		else if(this.props.type === "graph") {
			var height = 100;
			var width = 10;

			var hours = [];
			for(var i = 0; i<this.props.hours.length; i++){
				var temp = this.props.hours[i].apparentTemperature;
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