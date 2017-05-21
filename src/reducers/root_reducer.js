import { combineReducers } from 'redux';
import StationsReducer from './stations_reducer';
import StationReducer from './station_reducer';

const rootReducer = combineReducers({
  stations: StationsReducer,
  stationBuses: StationReducer,
});

export default rootReducer;
