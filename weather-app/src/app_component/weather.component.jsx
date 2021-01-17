import React from "react";

const Weather = (props) =>{
    return(
        <div className="container">
            <div className="cards">
                <h1>{props.city}, {props.country}</h1>
                <h5 className="py-4">
                    <i className={`wi {props.icon} display-1`}></i>
                </h5>
                <h1 className="py-2">
                    {props.celsius}&deg;
                </h1>
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="p-4">{props.description}</h4>
            </div>
        </div>
    );
};

function minmaxTemp(min, max){
    return(
        <h3>
            <span className="p-4">
                {min}&deg;
            </span>
            <span className="p-4">
                {max}&deg;
            </span>
        </h3>
    );
}
export default Weather;