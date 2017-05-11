import { combineReducers } from 'redux';
import StationsReducer from './stations_reducer';

const rootReducer = combineReducers({
  stations: StationsReducer,
});

export default rootReducer;
