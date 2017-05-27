import 'spectre.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './reducers/root_reducer';
import App from './App';
import Stations from './containers/stations';
import Navbar from './components/navbar';

const store = createStore(RootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <hr />

        <Route exact path="/" component={App} />
        <Route path="/stations" component={Stations}/>
      </div>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
