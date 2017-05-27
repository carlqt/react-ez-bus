import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from  'react-redux';

import { allStations } from '../actions/stations.js';
import Paginate from '../components/paginate';

class Stations extends Component {
  constructor(props) {
    super(props);
    this.renderStations = this.renderStations.bind(this);
    this.getUrlParams = this.getUrlParams.bind(this);
    this.getPage = this.getPage.bind(this);
  }

  componentWillMount() {
    this.props.allStations();
  }

  getUrlParams = (search) => {
    let hashes = search.slice(search.indexOf('?') + 1).split('&')
    let params = {}
    hashes.forEach(hash => {
        let [key, val] = hash.split('=')
        params[key] = decodeURIComponent(val)
    })

    return params;
  }


  getPage() {
    let page = this.getUrlParams(this.props.location.search).page;
    page = parseInt(page, 10) - 1;

    if (page<= 0 || isNaN(page)) {
      page = 0
    };

    return page
  }


  renderStations() {
    const { stations } = this.props;
    const size = 20;
    const page = this.getPage();

    return(
      <Paginate page={page} size={size}>
        { stations }
      </Paginate>
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
    stations: state.allStations.get("stations"),
    loading: state.stations.get("loading"),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
   allStations
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Stations);