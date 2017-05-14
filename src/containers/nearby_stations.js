import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from  'react-redux';

import { detectNearbyStations } from '../actions/stations.js';
import Station from '../components/nearby_stations/station';

class NearbyStations extends Component {
  constructor(props) {
    super(props);
    let lat;
    let lng;

    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      props.detectNearbyStations(lat, lng);
    });
  }

  render() {
    const { stations } = this.props;
    return(
      <div>
        {
          stations.map((station) => {
            return(
              <Station key={station.get("BusStopCode")} station={station} />
            )
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stations: state.stations.get("stations"),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    detectNearbyStations
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyStations);
