import React from "react";

export default function Toggle({onChange}) {    
    return (
        <div className="symbol">
            <span>°C </span>
            <label className="switch">
                <input type="checkbox" onChange={(e) => onChange(e.target.value)}></input>
                <span className="slider round"></span>
            </label>
            <span> °F</span>
        </div>
    );
}
