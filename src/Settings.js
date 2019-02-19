import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
    render() {
        return (
            <div id="settingsWrapper">
                <div style={{display: "flex", flexDirection: "row"}}>
                    <button id="F" onClick={()=>this.props.onTempClick("F")} style={{border: this.props.unit === "im" ? "1px solid black" : "none"}}>F°</button>
                    <button id="C" onClick={()=>this.props.onTempClick("C")} style={{border: this.props.unit === "si" ? "1px solid black" : "none"}}>C°</button>
                </div>
            </div>
        );
    }
}

export default Settings;