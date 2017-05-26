import './bus.css';
import React from 'react';

const Bus = ({bus, color}) => {
  if (bus.get("Status") === "Not In Operation") return null;

  const arrival = bus.getIn(["NextBus", "EstimatedArrival"]);
  const nextArrival = bus.getIn(["SubsequentBus", "EstimatedArrival"]);

  const displayArrival = (arrival) => {
    return parseInt(arrival, 10) <= 0 ? "Arriving" : `${parseInt(arrival, 10)} minutes`
  }

  return(
    <div className="container">
      <div className="columns">
        <div className="column col-4">
          <button className={`btn btn-action ${color} btn-lg btn-primary circle`}>{bus.get("ServiceNo")}</button>
        </div>
        <div className="column col-4">
          {displayArrival(arrival)}
        </div>
        <div className="column col-4">
          {displayArrival(nextArrival)}
        </div>
      </div>
    </div>
  );
}


export default Bus;