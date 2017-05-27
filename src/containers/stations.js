import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from  'react-redux';

import { allStations } from '../actions/stations.js';
import Station from '../components/nearby_stations/station';

class Stations extends Component {
  constructor(props) {
    super(props);
    this.renderStations = this.renderStations.bind(this);
  }

  componentWillMount() {
    this.props.allStations();
  }

  renderStations() {
    const { stations } = this.props;
    return(
      stations.map((station) => {
        return(
          <Station key={station.get("BusStopCode")}
          stationCode={station.get("BusStopCode")}
          description={station.get("Description")}
          />
        )
      })
    )
  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="columns">
            <div className="column col-3" />
            <div className="column col-6">
              {this.renderStations()}
            </div>
            <div className="column col-3" />
          </div>
        </div>
      </div>
    )
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
   allStations
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);