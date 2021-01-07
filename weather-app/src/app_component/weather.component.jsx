import React from "react";

const Weather = () =>{
    return(
        <div className="container">
            <div className="cards">
                <h1>London</h1>
                <h5 className="py-4">
                    <i className="wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className="py-2">
                    25&deg;
                </h1>
                {minmaxTemp(23, 27)}
                <h4 className="p-4">Slow Rain</h4>
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