import { combineReducers } from 'redux';
import StationsReducer from './stations_reducer';
import AllStationsReducer from './all_stations_reducer';

const rootReducer = combineReducers({
  stations: StationsReducer,
  allStations: AllStationsReducer,
});

export default rootReducer;
