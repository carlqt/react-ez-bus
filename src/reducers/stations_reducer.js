import Immutable from 'immutable';

import { FETCH_BUS_STATION, DETECTED_NEARBY_STATIONS } from '../constants';

export const INITIAL_STATE = Immutable.fromJS({
  stations: [],
  errors: null,
  loading: true,
});

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case DETECTED_NEARBY_STATIONS:
    action.payload.loading = false;
    return state.merge(action.payload)
  case FETCH_BUS_STATION:
    const i = state.get("stations").findIndex(s => s.get("BusStopCode") === action.stationCode );
    return state.mergeDeepIn(["stations", i], action.payload);
  default:
    return state;
  }
}
