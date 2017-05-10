import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

import NearbyStations from './containers/nearby_stations';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={NearbyStations} />
    </div>
  </Router>
  ,
  document.getElementById('root')
);
