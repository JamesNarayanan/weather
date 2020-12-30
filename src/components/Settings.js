import React, {Component} from "react";

import "../css/Settings.css";

class Settings extends Component {
	render() {
		const imperial = this.props.unit === "im";
		const individual = this.props.hourlyType === "individual";
		return (
			<div className="col-12 col-sm-6 col-md-3 mx-auto p-3 rounded" id="settings-container">
				<div className="row d-flex justify-content-center">
					<button
						className={`btn col-4 bg-shade ${imperial && "selected-setting"}`}
						onClick={() => this.props.onTempClick("F")}
					>
						F°
					</button>
					<button
						className={`btn col-4 bg-shade ${!imperial && "selected-setting"}`}
						onClick={() => this.props.onTempClick("C")}
					>
						C°
					</button>
				</div>
				<div className="mt-3 text-center">Hourly Forecast</div>
				<div className="row justify-content-center">
					<button
						className={`btn col-4 col-sm-6 col-lg-5 col-xl-4 bg-shade ${individual && "selected-setting"}`}
						onClick={() => this.props.onHourlyClick("individual")}
					>
						Individual
					</button>
					<button
						className={`btn col-4 col-sm-5 col-lg-4 bg-shade ${!individual && "selected-setting"}`}
						onClick={() => this.props.onHourlyClick("graph")}
					>
						Graph
					</button>
				</div>
				{this.props.hourlyType === "graph" ? (
					<div className="row justify-content-center">
						<button
							className={`btn col bg-shade ${this.props.hourlyGraphType === 0 && "selected-setting"}`}
							onClick={() => this.props.onHourlyGraphTypeClick(0)}
						>
							Temperature
						</button>
						<button
							className={`btn col bg-shade ${this.props.hourlyGraphType === 1 && "selected-setting"}`}
							onClick={() => this.props.onHourlyGraphTypeClick(1)}
						>
							Precipitation Chance
						</button>
					</div>
				) : (
					""
				)}
				{/* <div className="mt-3 text-center">Minutely Forecast</div>
                <div className="row justify-content-center mt-2">
                    <button className="btn col-4 col-sm-6 col-lg-5 col-xl-4 bg-shade" onClick={()=>this.props.onMinutelyClick("individual")} style={{border: this.props.minutelyType === "individual" ? "1px solid white" : "none"}}>Individual</button>
                    <button className="btn col-4 col-sm-5 col-lg-4 bg-shade" onClick={()=>this.props.onMinutelyClick("graph")} style={{border: this.props.minutelyType === "graph" ? "1px solid white" : "none"}}>Graph</button>
                </div> */}
			</div>
		);
	}
}

export default Settings;
