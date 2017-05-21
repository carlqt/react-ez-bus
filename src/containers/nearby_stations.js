import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from  'react-redux';

import { detectNearbyStations } from '../actions/stations.js';
import Station from '../components/nearby_stations/station';

class NearbyStations extends Component {
  constructor(props) {
    super(props);
    this.renderStations = this.renderStations.bind(this);
    let lat;
    let lng;

    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
      props.detectNearbyStations(lat, lng);
    });
  }

  renderStations() {
    const { stations } = this.props;
    return(
      stations.map((station) => {
        return(
          <Station key={station.get("BusStopCode")}
          stationCode={station.get("BusStopCode")}
          description={station.get("Description")}
          buses={station.get("Buses")} />
        )
      })
    )

  }

  render() {
    const { loading } = this.props;
    return(
      <div>
        { loading ? <div className="loading"/> : this.renderStations() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stations: state.stations.get("stations"),
    loading: state.stations.get("loading"),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    detectNearbyStations
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyStations);
