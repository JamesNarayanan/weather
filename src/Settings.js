import React, { Component } from 'react';

class Settings extends Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-3 col-lg-2 mx-auto p-3 border border-dark rounded">
                <div className="row d-flex justify-content-center">
                    <button className="btn col-4 bg-shade" onClick={()=>this.props.onTempClick("F")} style={{border: this.props.unit === "im" ? "1px solid black" : "none"}}>F°</button>
                    <button className="btn col-4 bg-shade" onClick={()=>this.props.onTempClick("C")} style={{border: this.props.unit === "si" ? "1px solid black" : "none"}}>C°</button>
                </div>
            </div>
        );
    }
}

export default Settings;