import React, { Component } from 'react';

class Settings extends Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-3 mx-auto p-3 border border-dark rounded">
                <div className="row d-flex justify-content-center">
                    <button className="btn col-4 bg-shade" onClick={()=>this.props.onTempClick("F")} style={{border: this.props.unit === "im" ? "1px solid black" : "none"}}>F°</button>
                    <button className="btn col-4 bg-shade" onClick={()=>this.props.onTempClick("C")} style={{border: this.props.unit === "si" ? "1px solid black" : "none"}}>C°</button>
                </div>
                <div className="mt-3 text-center">Hourly Forecast</div>
                <div className="row justify-content-center">
                    <button className="btn col-4 col-sm-6 col-lg-5 col-xl-4 bg-shade" onClick={()=>this.props.onHourlyClick("individual")} style={{border: this.props.hourlyType === "individual" ? "1px solid black" : "none"}}>Individual</button>
                    <button className="btn col-4 col-sm-5 col-lg-4 col-xl-4 bg-shade" onClick={()=>this.props.onHourlyClick("graph")} style={{border: this.props.hourlyType === "graph" ? "1px solid black" : "none"}}>Graph</button>
                </div>
                {/* <div className="mt-3 text-center">Minutely Forecast</div>
                <div className="row justify-content-center mt-2">
                    <button className="btn col-4 col-sm-6 col-lg-5 col-xl-4 bg-shade" onClick={()=>this.props.onMinutelyClick("individual")} style={{border: this.props.minutelyType === "individual" ? "1px solid black" : "none"}}>Individual</button>
                    <button className="btn col-4 col-sm-5 col-lg-4 col-xl-4 bg-shade" onClick={()=>this.props.onMinutelyClick("graph")} style={{border: this.props.minutelyType === "graph" ? "1px solid black" : "none"}}>Graph</button>
                </div> */}
            </div>
        );
    }
}

export default Settings;