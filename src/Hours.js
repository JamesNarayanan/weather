import React, { Component } from 'react';
import Hour from './Hour';

class Hours extends Component {
	render() {
		var height = 100;

		var hours = [];
		for(var i = 0; i<this.props.hours.length; i++){
			hours.push(<Hour hour={this.props.hours[i]} unit={this.props.unit} height={height}/>);
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

export default Hours;