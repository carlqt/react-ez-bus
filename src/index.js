import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './reducers/root_reducer';
import App from './App';

const store = createStore(RootReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route exact path="/" component={App} />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
