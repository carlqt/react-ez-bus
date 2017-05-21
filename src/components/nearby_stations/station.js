import './station.css'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from  'react-redux';

import { fetchBusStationDetails } from '../../actions/stations.js';

class Station extends Component {
  constructor(props) {
    super(props);
    this.renderPanelBody = this.renderPanelBody.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      active: false
    }
  }

  renderPanelBody(buses) {
    if (this.state.active) {
      return(
        <div className="panel-body" >
          <hr/>
          {buses.map(bus => <div key={bus}>{bus}</div>)}
        </div>
      );
    }
  }

  toggle() {
    const { stationCode } = this.props;
    this.setState({active: !this.state.active});
    this.props.fetchBusStationDetails(stationCode);
  }

  render() {
    const { description, stationCode, buses } = this.props;

    return(
      <div className="panel">
        <div className="panel-title text-center" onClick={() => this.toggle() }>
          { `${stationCode} - ${description}` }
        </div>

        { this.renderPanelBody(buses) }
      </div>
    )
  }
}

Station.propTypes = {
  description: PropTypes.string.isRequired,
  buses: PropTypes.object.isRequired,
  stationCode: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    apibuses: state.stationBuses.get("buses"),
    loading: state.stations.get("loading"),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBusStationDetails
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Station);