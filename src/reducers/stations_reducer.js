import Immutable from 'immutable';

export const DETECTED_NEARBY_STATIONS = 'DETECTED_NEARBY_STATIONS';
export const INITIAL_STATE = Immutable.List([]);

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case DETECTED_NEARBY_STATIONS:
    return state.concat(action.payload)
  default:
    return state;
  }
}
