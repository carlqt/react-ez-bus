import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import NearbyStations from './containers/nearby_stations';
import RootReducer from './reducers/root_reducer';

const store = createStore(RootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={NearbyStations} />
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
