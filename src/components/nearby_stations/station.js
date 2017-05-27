import './station.css'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from  'react-redux';

import { fetchBusStationDetails } from '../../actions/stations';
import Bus from './bus';

class Station extends Component {
  constructor(props) {
    super(props);
    this.renderPanelBody = this.renderPanelBody.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      active: false
    }
  }

  colorCode(bus) {
    const arrivalTime = bus.getIn(["NextBus", "EstimatedArrival"]);
    switch (true) {
      case arrivalTime < 2:
        return "success";
      case arrivalTime <= 5:
        return "warning";
      default:
        return "danger";
    }
  }

  renderPanelBody() {
    if (this.state.active) {
      const { stationCode } = this.props;
      const station = this.props.stations.get("stations").find(s => s.get("BusStopCode") === stationCode );
      const buses = station.get("Buses");
      if (buses === null) return null;
      return(
        <div className="panel-body" >
          <hr/>
          {buses.map(bus => <Bus key={bus} bus={bus} color={this.colorCode(bus)} />)}
        </div>
      );
    }
  }

  toggle() {
    const { stationCode } = this.props;
    const { type } = this.props;

    if (!this.state.active) {
      this.props.fetchBusStationDetails(stationCode, type);
    }

    this.setState({active: !this.state.active});
  }

  render() {
    const { description, stationCode } = this.props;

    return(
      <div className="panel">
        <div className="panel-title text-center" onClick={() => this.toggle() }>
          { `${stationCode} - ${description}` }
        </div>

        { this.renderPanelBody() }
      </div>
    )
  }
}

Station.propTypes = {
  description: PropTypes.string.isRequired,
  stationCode: PropTypes.string.isRequired,
}

function mapStateToProps(state, ownProps) {
  const stations = ownProps.type == undefined ? state.stations : state.allStations;

  return {
    stations,
    loading: state.stations.get("loading"),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBusStationDetails
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);