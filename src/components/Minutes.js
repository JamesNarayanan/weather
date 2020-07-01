import React, {Component} from "react";

class Minutes extends Component {
	render() {
		let minutes = [];

		minutes.push(
			<div
				className="col px-0 position-sticky d-flex flex-column align-items-center text-center border-right border-dark"
				style={{
					minWidth: "140px",
					left: 0,
					zIndex: 1,
					backgroundColor: "#5da3f3"
				}}
			>
				<div className="w-75 border-bottom border-dark">Time</div>
				<div>Precip Chance</div>
				<div>Precip Intensity (inches/hour)</div>
			</div>
		);

		for (let i = 0; i < this.props.minutes.length; i++) {
			let minute = this.props.minutes[i];
			let date = new Date(minute.time * 1000);
			let hourTime = date.getHours();
			if (hourTime >= 12) {
				hourTime -= 12;
			}
			if (hourTime === 0) hourTime = 12;
			let time = hourTime + ":" + date.getMinutes();

			minutes.push(
				<div
					className={`col px-0 d-flex flex-column align-items-center text-center ${
						i !== this.props.minutes.length - 1
							? "border-right border-dark"
							: ""
					}`}
					style={{minWidth: "65px"}}
				>
					<div className="w-75 border-bottom border-dark">{time}</div>
					<div>{Math.round(minute.precipProbability * 100)}%</div>
					<div>{minute.precipIntensity}</div>
				</div>
			);
		}

		return (
			<div
				className="d-flex flex-row border border-dark"
				style={{overflow: "scroll"}}
			>
				{minutes}
			</div>
		);
	}
}

export default Minutes;
