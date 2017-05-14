import React from 'react';
import PropTypes from 'prop-types';

const Station = (props) => {
  const stationCode = props.station.get("BusStopCode");
  const description = props.station.get("Description");

  return(
    <div>
      { `${stationCode} - ${description}` }
    </div>
  )
}

Station.propTypes = {
  station: PropTypes.object.isRequired,
}

export default Station;