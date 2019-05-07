import React, { Component } from 'react';

class Hour extends Component {
    render() {
        var width = 10;
        var height = this.props.height;
        var temp = this.props.hour.apparentTemperature;

        return (
            <div className="col m-0 p-0" style={{maxWidth: width, height: height}}>
                <svg style={{width: width, height: height}}>
                    <circle cx={width/2} cy={height - temp} r={width/2 - .5} style={{fill: "rgba(0,0,0,.2)"}}/>
                </svg>
            </div>
        );
    }
}

export default Hour;