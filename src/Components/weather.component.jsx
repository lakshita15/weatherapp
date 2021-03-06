import React from "react";

const Weather = props=> {
  return (
    //return jsx
    <div className="container">
      <div className="cards pt-4">
        <h1>{props.city}</h1>
        <h5 className="py-4">
          <i className={` ${props.weathericon}display-1`}></i>
        </h5>
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show min and max temperature */}
        {minmaxtemp(props.temp_min,props.temp_max)}
        <h4 className="py-3">
          {props.description}
        </h4>
      </div>
    </div>
  );
};
function minmaxtemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
export default Weather;
