import Immutable from 'immutable';

import { ALL_STATIONS, FETCH_BUS_ALL_STATION } from '../constants';

export const INITIAL_STATE = Immutable.fromJS({
  stations: [],
  errors: null,
  loading: true,
});

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case ALL_STATIONS:
    action.payload.loading = false;
    return state.merge(action.payload);
  case FETCH_BUS_ALL_STATION:
    const i = state.get("stations").findIndex(s => s.get("BusStopCode") === action.stationCode );
    return state.mergeDeepIn(["stations", i], action.payload);
  default:
    return state;
  }
}
