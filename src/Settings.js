import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
    render() {
        return (
            <div /* id="settingsWrapper" */ className="mx-auto col-12 col-sm-6 col-md-3 col-lg-2 p-3 border rounded border-dark">
                {/* <div style={{display: "flex", flexDirection: "row"}}> */}
                <div className="row d-flex justify-content-center">
                    <button className="col-4 btn" /* id="F" */ onClick={()=>this.props.onTempClick("F")} style={{border: this.props.unit === "im" ? "1px solid black" : "none"}}>F°</button>
                    <button className="col-4 btn" /* id="C" */ onClick={()=>this.props.onTempClick("C")} style={{border: this.props.unit === "si" ? "1px solid black" : "none"}}>C°</button>
                </div>
            </div>
        );
    }
}

export default Settings;