import React, {Component} from "react";
import Skycons from "react-skycons";
import Chart from "react-google-charts";

class Hours extends Component {
	render() {
		if (this.props.type === "individual") {
			let hours = [];

			hours.push(
				<div
					className="col px-0 position-sticky d-flex flex-column align-items-center text-center border-right border-dark"
					style={{
						minWidth: "140px",
						left: 0,
						zIndex: 1,
						backgroundColor: "#75e8ff"
					}}
				>
					<div className="w-75 border-bottom border-dark">Time</div>
					<div>AM/PM</div>
					<Skycons style={{width: "80px", height: "40px"}} color="white" icon={"CLOUDY"} autoplay={true} />
					<div>Temp °{this.props.unit === "si" ? "C" : "F"}</div>
					<div className="w-100 border-top border-dark">Precip Chance</div>
					<div className="w-100 border-top border-dark">Humidity</div>
					<div className="w-100 border-top border-dark">
						Wind Speed {this.props.unit === "si" ? "m/s" : "m/h"}
					</div>
				</div>
			);

			for (let i = 0; i < this.props.hours.length; i++) {
				let hour = this.props.hours[i];
				let date = new Date(hour.time * 1000);
				let hourTime = date.getHours();
				let timePostFix = "AM";
				if (hourTime >= 12) {
					hourTime -= 12;
					timePostFix = "PM";
				}
				if (hourTime === 0) hourTime = 12;

				let temp = hour.apparentTemperature;
				let windSpeed = hour.windSpeed;
				if (this.props.unit === "si") {
					temp = (temp - 32) * (5 / 9);
					windSpeed /= 2.237;
				}

				let icon = hour.icon;
				function replaceAll(str, find, replace) {
					return str.replace(new RegExp(find, "g"), replace);
				}
				icon = replaceAll(icon, "-", "_");
				icon = icon.toUpperCase();

				hours.push(
					<div
						className={`col px-0 d-flex flex-column align-items-center text-center ${
							i !== this.props.hours.length - 1 ? "border-right border-dark" : ""
						}`}
						style={{minWidth: "65px"}}
					>
						<div className="w-75 border-bottom border-dark">{hourTime}</div>
						<div>{timePostFix}</div>
						<Skycons style={{width: "80px", height: "40px"}} color="white" icon={icon} autoplay={true} />
						<div>{temp.toFixed(1)}°</div>
						<div className="w-100 border-top border-dark">{Math.round(hour.precipProbability * 100)}%</div>
						<div className="w-100 border-top border-dark">{Math.round(hour.humidity * 100)}%</div>
						<div className="w-100 border-top border-dark">{windSpeed.toFixed(2)}</div>
					</div>
				);
			}

			return (
				<div className="d-flex flex-row border border-dark" style={{overflow: "scroll"}}>
					{hours}
				</div>
			);
		} else if (this.props.type === "graph") {
			let hours = [];
			let options = ["Temperature", "Precipitation Chance"];
			let graphType = parseInt(this.props.graphType);
			hours.push(["Hour", options[graphType], {role: "tooltip", type: "string", p: {html: true}}]);

			let vAxisFormat = "decimal";
			if (graphType === 1) vAxisFormat = "percent";

			let timeBase,
				day,
				dayNum = 0;
			let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

			for (let i = 0; i < this.props.hours.length; i++) {
				let hour = this.props.hours[i];
				if (i === 0) timeBase = hour.time;
				let hourTime = (hour.time - timeBase) / 3600; // Number of hours since the first data point
				let hourData = [hourTime];
				let yValue;

				if (graphType === 0) {
					yValue = hour.apparentTemperature;
					if (this.props.unit === "si") {
						yValue = (yValue - 32) * (5 / 9);
						yValue = parseFloat(yValue.toFixed(2));
					}
				} else if (graphType === 1) yValue = parseFloat(hour.precipProbability.toFixed(2));

				hourData.push(yValue);

				let dataPostFix = "°";
				if (graphType === 1) dataPostFix = "%";

				let date = new Date(hour.time * 1000);
				let hourAdjustedTime = date.getHours();
				let timePostFix = "AM";
				if (i === 0) {
					hourAdjustedTime = "Now";
					timePostFix = "";
				} else {
					if (hourAdjustedTime === 0 && i !== 0)
						day = dayNum++ === 0 ? " Tomorrow" : " " + daysOfWeek[date.getDay()];
					if (hourAdjustedTime >= 12) {
						hourAdjustedTime -= 12;
						timePostFix = "PM";
					}
					if (hourAdjustedTime === 0) hourAdjustedTime = 12;
				}
				// Tooltip
				hourData.push(`
					<div class="p-2 d-flex flex-column align-items-center text-center" style="font: 12pt Courier">
					<div class="w-75 mb-2 border-bottom border-dark">${hourAdjustedTime} ${timePostFix}${day || ""}</div>
					<div>${graphType === 1 ? yValue * 100 : yValue}${dataPostFix}${
					graphType === 1
						? hour.precipType
							? ` Chance of ${hour.precipType}`
							: " Chance of Precipitation"
						: ""
				}</div>
					</div>
				`);
				hours.push(hourData);
			}

			return (
				<div className="border border-dark rounded bg-shade">
					<Chart
						chartType="ScatterChart"
						loader={<div className="text-center">Loading Chart</div>}
						data={hours}
						options={{
							title: `${options[graphType]} over the next 48 hours`,
							hAxis: {title: "Hour", gridlines: {color: "black"}},
							vAxis: {
								title: options[graphType],
								format: vAxisFormat,
								gridlines: {color: "black"}
							},
							legend: "none",
							colors: ["white"],
							backgroundColor: "transparent",
							tooltip: {isHtml: true}
						}}
					/>
				</div>
			);
		}
	}
}

export default Hours;
