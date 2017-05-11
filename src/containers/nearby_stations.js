import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from  'react-redux';

import { detectNearbyStations } from '../actions/stations.js';

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
    console.log(this.props.stations);
    const { stations } = this.props
    return(
      <div>
        { stations.map((station) => { return <div key={station.BusStopCode}>{station.BusStopCode}</div> }) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stations: state.stations,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    detectNearbyStations
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyStations);
