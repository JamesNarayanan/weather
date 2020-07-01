import React, {Component} from "react";

import "../css/Settings.css";

class Settings extends Component {
	render() {
		return (
			<div
				className="col-12 col-sm-6 col-md-3 mx-auto p-3 rounded"
				id="settings-container"
			>
				<div className="row d-flex justify-content-center">
					<button
						className="btn col-4 bg-shade"
						onClick={() => this.props.onTempClick("F")}
						style={{
							border:
								this.props.unit === "im"
									? "1px solid white"
									: "none"
						}}
					>
						F°
					</button>
					<button
						className="btn col-4 bg-shade"
						onClick={() => this.props.onTempClick("C")}
						style={{
							border:
								this.props.unit === "si"
									? "1px solid white"
									: "none"
						}}
					>
						C°
					</button>
				</div>
				<div className="mt-3 text-center">Hourly Forecast</div>
				<div className="row justify-content-center">
					<button
						className="btn col-4 col-sm-6 col-lg-5 col-xl-4 bg-shade"
						onClick={() => this.props.onHourlyClick("individual")}
						style={{
							border:
								this.props.hourlyType === "individual"
									? "1px solid white"
									: "none"
						}}
					>
						Individual
					</button>
					<button
						className="btn col-4 col-sm-5 col-lg-4 bg-shade"
						onClick={() => this.props.onHourlyClick("graph")}
						style={{
							border:
								this.props.hourlyType === "graph"
									? "1px solid white"
									: "none"
						}}
					>
						Graph
					</button>
				</div>
				{this.props.hourlyType === "graph" ? (
					<div className="row justify-content-center">
						<button
							className="btn col bg-shade"
							onClick={() => this.props.onHourlyGraphTypeClick(0)}
							style={{
								border:
									this.props.hourlyGraphType === 0
										? "1px solid white"
										: "none"
							}}
						>
							Temperature
						</button>
						<button
							className="btn col bg-shade"
							onClick={() => this.props.onHourlyGraphTypeClick(1)}
							style={{
								border:
									this.props.hourlyGraphType === 1
										? "1px solid white"
										: "none"
							}}
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
